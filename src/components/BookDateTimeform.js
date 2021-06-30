import moment from 'moment';
import ReactTimeslotCalendar from 'react-timeslot-calendar-k';


function BookDateTimeForm(){




  return (
      <>
      <h1>Book a Date</h1>
    
      <ReactTimeslotCalendar
    initialDate = { moment([2017, 3, 24]).format() }
    timeslots = { [
        ['9', '10'],
        ['10', '11'],
        ['18'],
    ] }
/>

        </>
    )

}

export default BookDateTimeForm;