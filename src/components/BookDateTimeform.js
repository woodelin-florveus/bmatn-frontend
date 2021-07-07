import React, { useState } from 'react';
//import DayTimePicker from '@mooncake-dev/react-day-time-picker';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";





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


    const [date, setDate] = useState(new Date());
    
  

  return (
      <>
      {/* <h1> bookdate: {dateForm.date}</h1> */}

     
     

        <form className="book-form" autoComplete="off">
        

            <label> Name:</label>
            <input type="text" 
             name="name"
             placeholder="add name"
             onChange={handleUpdate}
             value={dateForm.name}
            />

            <label> Date: {date.toString()}</label>
            
            <DatePicker 
            selected={date} 
            onChange={(date) => setDate(date)} 
            showTimeSelect
            dateFormat="MMMM d, yyyy h:mm aa"
            />
            
            
            {/* <h4>Date: {date}</h4> */}
            
            
            {/* <input type="text" 
             name="date"
             placeholder="appointment-date"
             onChange={handleUpdate}
             value={dateForm.date}
            /> */}

            <label>Time</label>
            <input type="text"
             name="time"
             placeholder="appointment-time"
             onChange={handleUpdate}
             value={date.toString()}
            />

            <input
                type='submit'
             />
        </form>





        </>
    )

}

export default BookDateTimeForm;