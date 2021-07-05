import React, { useState } from 'react';
import DayTimePicker from '@mooncake-dev/react-day-time-picker';



function BookDateTimeForm(){

    const [dateForm, setDateForm] = useState({name: "", date: "", time: ""})



    const handleScheduled = dateTime => {
        console.log('scheduled: ', dateTime)
    }

    
    const handleUpdate = event => {
        setDateForm({...dateForm, [event.target.name]: event.target.value})
    }


    

  return (
      <>
      <h1>Book a Date</h1>

     <DayTimePicker timeSlotSizeMinutes={15} 

        onConfirm={handleScheduled}    

     />

        <form>
            <label> Name:</label>
            <input type="text" 
             name="name"
             placeholder={handleScheduled}
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