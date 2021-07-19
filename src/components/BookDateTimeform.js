import React, { useState } from 'react';
import { useLocation, useHistory } from "react-router-dom"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactRoundedImage from "react-rounded-image"
import moment from 'moment'

function BookDateTimeForm({appointments, setAppointments}){
    

    const history = useHistory()

    const location = useLocation()


    const [date, setDate] = useState(new Date());

    const [dateForm, setDateForm] = useState({
        name: "woodelin", 
        training_date: moment(date).format("MMM Do YY"), 
        time: moment(date).format("LT"),
        location: location.state.trainer_location,
        trainer: location.state.name})

    
    
    const handleUpdate = event => {
        setDateForm({...dateForm, [event.target.name]: event.target.value})
    }

    const handleSub = event => {
        event.preventDefault()
        
        fetch('http://localhost:3000/appointments', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify({training_date: dateForm.training_date, time: dateForm.time, location: dateForm.location, trainer: dateForm.trainer})
        })
        .then(response => response.json())
        .then(appointmentData => {
            console.log(appointmentData)
            const newAppointmentData = [...appointments, appointmentData]

            setAppointments(newAppointmentData)
            setDate({name:"", training_date: "", time: "", location:"", trainer:"" })
            history.push('/appointments')
        })
    }

    



  return (
      <div className="trainerForm-container" style={{padding:"2em"}}>

        <div className="trainer_profile_image">
        <ReactRoundedImage  
            image={location.state.image}
            roundedColor="none"
            imageWidth="none"
            imageHeight="none"
        />
        </div>

        <form onSubmit={handleSub} className="book_trainer-form" autoComplete="off">
        

            <label> Name:</label>
            <input type="text" 
             name="name"
             placeholder="add name"
             onChange={handleUpdate}
             value={dateForm.name}
            />

            <label> Please Schedule Date</label>

            <DatePicker
            className="customDate"
            selected={date} 
            onChange={(date) => setDate(date)} 
            showTimeSelect
            dateFormat="MMMM d, yyyy h:mm aa"
            />

            <label> Schedule Date:</label>
            
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
                    <input type="text"
                    name="name"
                    placeholder="trainer location"
                    onChange={handleUpdate}
                    value={location.state.trainer_location}
                    
                    />

            <label> trainer</label>

                        <input type="text"
                        name="name"
                        placeholder="trainer_name"
                        value={location.state.name}
                        onChange={handleUpdate}
                         />
    
            <input
                type='submit'            
             />
        </form>

        </div>
    )

}

export default BookDateTimeForm;