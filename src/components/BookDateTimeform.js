import React, { useState, useEffect } from 'react';
import {useHistory, useParams, useLocation } from "react-router-dom"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactRoundedImage from "react-rounded-image"
import moment from 'moment'


function BookDateTimeForm({appointments, setAppointments, currentUser}){

   const {id} = useParams()

    const history = useHistory()

    const location = useLocation()
    
    const [appointmentInfo, setAppointmentInfo] = useState('')

    const [trainerInfo, setTrainerInfo] = useState('')

    const [isLoaded, setIsLoaded] = useState(false)


    useEffect(() => {
        fetch(`https://bmatn-app-api.herokuapp.com/trainers/${id}`)
        .then(response => response.json())
        .then(trainerInfo => {
            setTrainerInfo(trainerInfo)
            setIsLoaded(true)
        })
    }, [id])
  
    // appointments

    useEffect(() => {
        fetch(`https://bmatn-app-api.herokuapp.com/appointments/${id}`)
        .then(response => response.json())
        .then(appointmentInfo => {
            setAppointmentInfo(appointmentInfo)
            setIsLoaded(true)
        })  
          
    },[id])



    const [dateForm, setDateForm] = useState({
        trainer_id: id,
        name: "woodelin", 
        date: new Date(), 
        location: location.state.trainer_location,
        trainer_name: location.state.name
    })

    console.log(dateForm)
    

    if(!isLoaded) return <h2>...loading</h2>


    const handleUpdate = (event) => {    
        let name = event.target.name || event.target.element.current.name
        setDateForm({...dateForm, [name]: event.target.value})
    }

    const onDateChange = (date) => {
        setDateForm({...dateForm, date: date})
    }


    const handleSub = event => {
        event.preventDefault()
        
        fetch('https://bmatn-app-api.herokuapp.com/appointments', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify({trainer_id: dateForm.trainer_id, date: dateForm.date, location: dateForm.location, trainer_name: dateForm.trainer_name, user_id: currentUser.id})

        })
        .then(response => response.json())
        .then(appointmentData => {
            console.log(appointmentData)
            const newAppointmentData = [...appointments, appointmentData]

            setAppointments(newAppointmentData)
            history.push(`/appointments`)
        })
    }

  return (
      <div className="trainerForm-container" style={{padding:"2em"}}>

        <div className="trainer_profile_image">
            <ReactRoundedImage  
                image={trainerInfo.image}
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
                    name="date"
                    selected={dateForm.date} 
                    onChange={onDateChange}
                    showTimeSelect
                    value={dateForm.date}
                    />

                <label> Schedule Date:</label>
            
                    <input type="text" 
                    name="date"
                    placeholder="appointment-date"
                    onChange={handleUpdate}
                    value={moment(dateForm.date).format("L")}
                    />

                <label>Time</label>
            
                <input type="text"
                name="time"
                placeholder="appointment-time"
                onChange={handleUpdate}
                value={moment(dateForm.time).format("LT")}
                />


                <label>Location</label>

                    <input type="text"
                    name="name"
                    placeholder="trainer location"
                    onChange={handleUpdate}
                    //value={location.state.trainer_location}   
                    value={dateForm.location}   

                    />

            <label> trainer</label>

                        <input type="text"
                        name="name"
                        placeholder="trainer_name"
                        value={dateForm.trainer_name}
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