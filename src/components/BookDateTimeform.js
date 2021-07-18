import React, { useState } from 'react';
import { useLocation } from "react-router-dom"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactRoundedImage from "react-rounded-image"
import moment from 'moment'

function BookDateTimeForm(){
    


    const location = useLocation()


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



  return (
      <>

        <div className="trainer_profile_image">
        <ReactRoundedImage  
            image="https://dummyimage.com/150x150/cfcfcf/ffffff"
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

        </>
    )

}

export default BookDateTimeForm;