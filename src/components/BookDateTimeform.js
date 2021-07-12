import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'

function BookDateTimeForm(){

    const [dateForm, setDateForm] = useState({
        name: "", 
        date: "", 
        time: "",
        location: "",
        trainer: ""})

    const [date, setDate] = useState(new Date());
    
    const handleUpdate = event => {
        setDateForm({...dateForm, [event.target.name]: event.target.value})
    }

    const handleSub = event => {
        event.preventDefault()
        
    }

    console.log(dateForm)

  return (
      <>
      <DatePicker 
            selected={date} 
            onChange={(date) => setDate(date)} 
            showTimeSelect
            dateFormat="MMMM d, yyyy h:mm aa"
            />
     
     

        <form onSubmit={handleSub} className="book-form" autoComplete="off">
        

            <label> Name:</label>
            <input type="text" 
             name="name"
             placeholder="add name"
             onChange={handleUpdate}
             value={dateForm.name}
            />

            <label> Please Schedule Date</label>
            
            <input type="text" 
             name="date"
             placeholder="appointment-date"
             onChange={handleUpdate}
             value={moment(date).format("MMM Do YY")}
            />

            <label>Time</label>
            <input type="text"
             name="time"
             placeholder="appointment-time"
             onChange={handleUpdate}
             value={moment(date).format("LT")}
            />

            <label>Location</label>
                <select value={dateForm.location} onChange={handleUpdate} name="location">
                    <option value="Brooklyn"> Brooklyn </option>
                    <option value="Queens"> Queens </option>
                    <option value="Manhattan"> Manhattan </option>
                </select>

            <label>Available trainers</label>
                    <select value={dateForm.trainer} onChange={handleUpdate} name="trainer">
                        <option value="trainer_1"> Trainer_1</option>
                        <option value="trainer_2"> Trainer_2</option>
                        <option value="trainer_3"> Trainer_3</option>                        
                    </select> 
            <input
                type='submit'
                
             />
        </form>

        </>
    )

}

export default BookDateTimeForm;