import React, { useState } from 'react';
import DayTimePicker from '@mooncake-dev/react-day-time-picker';




function BookDateTimeForm(){

    const [dateForm, setDateForm] = useState({
        name: "", 
        date: "", 
        time: ""})

    

    

    const handleScheduled = dateTime => {
        console.log('scheduled: ', dateTime)
    }


    
    const handleUpdate = event => {
        setDateForm({...dateForm, [event.target.name]: event.target.value})
    }





  return (
      <>
      <h1> bookdate: {dateForm.date}</h1>

     <DayTimePicker 
     timeSlotSizeMinutes={15} 
     value={dateForm.date}
     inputProps={{placeholder: "start date"}}
     onConfirm={handleScheduled}
     />

     

        <form autoComplete="off">
            <label> Name:</label>
            <input type="text" 
             name="name"
             placeholder="add name"
             onChange={handleUpdate}
             value={dateForm.name}
            />

            <label> Date:</label>
            <input type="text" 
             name="date"
             placeholder="appointment-date"
             onChange={handleUpdate}
             value={dateForm.date}
            />

            <label>Time</label>
            <input type="text"
             name="time"
             placeholder="appointment-time"
             onChange={handleUpdate}
             value={dateForm.time}
            />

            <input
                type='submit'
             />
        </form>





        </>
    )

}

export default BookDateTimeForm;