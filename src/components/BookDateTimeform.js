import React, { useState } from 'react';
//import DayTimePicker from '@mooncake-dev/react-day-time-picker';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'





function BookDateTimeForm(){

    const [dateForm, setDateForm] = useState({
        name: "", 
        date: "", 
        time: ""})

    // const [date, setDate] = useState(new Date())

    // console.log(date)
    
    const handleUpdate = event => {
        setDateForm({...dateForm, [event.target.name]: event.target.value})
    }

    const handleSub = event => {
        event.preventDefault()
        console.log(event.target[2].value)
    }

    const [date, setDate] = useState(new Date());
    
   
  

  return (
      <>
      {/* <h1> bookdate: {dateForm.date}</h1> */}


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

            <input
                type='submit'
                
             />
        </form>





        </>
    )

}

export default BookDateTimeForm;