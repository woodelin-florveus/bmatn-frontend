import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react"
import moment from 'moment'


function EditDate({id, currentUser, updateAppointment}){

    const [editForm, setEditForm] = useState({
        trainer_id: id, 
        date: new Date()
    })

    const handleUpdate = (event) => {
        let name = event.target.name || event.target.element.current.name
        setEditForm({...editForm, [name]: event.target.value})
    }

    const onDateChange = (date) => {
        setEditForm({...editForm, date: date})
    }


    const handleUpdateForm = (event) => {

        event.preventDefault()

        fetch(`http://localhost:3000/appointments/${id}`,{
            method: 'PATCH', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({trainer_id: editForm.trainer_id, date: editForm.date, user_id: currentUser.id})
            
        })
        .then(response => response.json())
        .then(updateAppointment)

    }
    
    return(

        <form onSubmit={handleUpdateForm} className="edit_form" style={{marginTop:"1em"}}> 

        <label>Please Schedule Your Date</label>

        <DatePicker 
        name="date"
        selected={editForm.date}
        onChange={onDateChange}
        value={editForm.date}

        />

        <label>New Scheduled Date</label>

        <input 
            type="text"
            name="date"
            onChange={handleUpdate}
            placeholder="appointment-date"
            value={moment(editForm.date).format("L")}
        />
  
        <input type="submit"
               value="update" 
        />
        </form>
    )
}

export default EditDate