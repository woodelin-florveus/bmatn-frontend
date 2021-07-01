import React from 'react';
import DayTimePicker from '@mooncake-dev/react-day-time-picker';


function BookDateTimeForm(){


 
 

  return (
      <>
      <h1>Book a Date</h1>

     <DayTimePicker timeSlotSizeMinutes={15} />

        </>
    )

}

export default BookDateTimeForm;