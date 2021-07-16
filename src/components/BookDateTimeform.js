import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'

function BookDateTimeForm({ trainers, currentUser }){
    

        

    const [date, setDate] = useState(new Date());

    const [dateForm, setDateForm] = useState({
        name: "woodelin", 
        training_date: moment(date).format("MMM Do YY"), 
        time: moment(date).format("LT"),
        location: "",
        trainer: ""})

    
    
    const handleUpdate = event => {
        setDateForm({...dateForm, [event.target.name]: event.target.value})
    }

    const handleSub = event => {
        event.preventDefault()
        
    }

       let test = trainers.map((trainer) => {
           trainer.appointments.map((train) => {
               console.log(train.location)
           })
       })

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
                    {trainers.map((trainer) => 
                      trainer.appointments.map((train) => 
                        <option key={train.id}>{train.location}</option>
                        )
                    )}
                </select>

            <label>Available trainers</label>
                    <select value={dateForm.trainer} onChange={handleUpdate} name="trainer">
                       
                        {trainers.map((trainer) => 
                        
                            <option key={trainer.id}>{trainer.name}</option>
                        
                        )}
                    </select> 
            <input
                type='submit'
                
             />
        </form>

        </>
    )

}

export default BookDateTimeForm;