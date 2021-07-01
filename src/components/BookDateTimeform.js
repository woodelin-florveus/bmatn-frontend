import React from 'react';
import { render } from 'react-dom';
import DayTimePicker from '@mooncake-dev/react-day-time-picker';


function BookDateTimeForm(){

 

  return (
      <>
      <h1>Book a Date</h1>
    
      {/* <ReactTimeslotCalendar
    initialDate = { moment([2017, 3, 24]).format() }
    timeslots = { [
        ['1', '2'], // 1:00 AM - 2:00 AM
        ['2', '3'], // 2:00 AM - 3:00 AM
        ['4', '6'], // 4:00 AM - 6:00 AM
        '5', // 5:00 AM
        ['4', '6', '7', '8'], // 4:00 AM - 6:00 AM - 7:00AM - 8:00AM
    ]}
    /> */}

     <DayTimePicker timeSlotSizeMinutes={15} />;

        </>
    )

}

export default BookDateTimeForm;