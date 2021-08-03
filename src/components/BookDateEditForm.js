import {useState, useEffect} from "react"
import { useHistory, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactRoundedImage from "react-rounded-image"
import moment from 'moment'




function BookDateEditForm({currentUser}){

    const {id} = useParams()

    const history = useHistory()

    const [appointmentEdit, setAppointmentEdit] = useState('')

    const [trainerEdit, setTrainerEdit] = useState('')

    const [isLoaded, setIsLoaded] = useState(false)

    // appointments

    useEffect(() => {
        fetch(`http://localhost:3000/appointments/${id}`)
        .then(response => response.json())
        .then(appointmentEdit => {
            setAppointmentEdit(appointmentEdit)
            setIsLoaded(true)
        })
    }, [id])

    // trainer

    useEffect(() => {
        fetch(`http://localhost:3000/trainers/${id}`)
        .then(response => response.json())
        .then(trainerEdit => {
            setTrainerEdit(trainerEdit)
            setIsLoaded(true)
        })
    }, [id])

    const [editForm, setEditForm] = useState({
        trainer_id: id,
        date: appointmentEdit.date
    })

    console.log(editForm.date)

    //const {name, image} = trainerEdit

    //const {date} = appointmentEdit


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
                body: JSON.stringify({trainer_id: editForm.id, date: editForm.date, user_id: currentUser.id})
            })
            .then(response => response.json())
            .then(newDateForm => {
                //add neccesary data
            })
           

    }

    if(!isLoaded) return <h2>....loading</h2>

    return (
        <div className="trainerForm-container" style={{padding:"2em"}}>

            <div className="trainer_profile_image">
                <ReactRoundedImage  
                    image={trainerEdit.image}
                    roundedColor="none"
                    imageWidth="none"
                    imageHeight="none"
                />
            </div>

            <form onSubmit={handleUpdateForm} className="book_trainer-form" autoComplete="off">

                <label> Please Schedule New Date</label>

                    <DatePicker
                    name="date"
                    selected={editForm.date} 
                    onChange={onDateChange}
                    showTimeSelect
                    value={editForm.date}
                    />

                <label> New Scheduled Date</label>

                <input 
                    type="text"
                    name="date"
                    placeholder="appointment-date"
                    onChange={handleUpdate}
                    value={moment(editForm.date).format("L")}
                />

                <input 
                
                type="submit"
                
                />

            </form>

        </div>
    )


}

export default BookDateEditForm;