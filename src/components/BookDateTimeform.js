import React from 'react';
import DayTimePicker from '@mooncake-dev/react-day-time-picker';


function BookDateTimeForm(){


//  const handledSchedule = dateTime => {
//         // const [hours, minutes, seconds] = dateTime.split(':')
//         //     console.log ('scheduled : ', `${(hours > 12) ? hours - 12 : hours} : ${minutes}${seconds ? `:${seconds}` : ''}
//         //     ${(hours >= 12) ? 'PM' : 'AM'}`)
 
//             console.log('scheduled :', dateTime)
//         }

    const timeSlotValidator = slotTime => {

        const eveningTime = new Date(
            slotTime.getFullYear(),
            slotTime.getMonth(),
            slotTime.getDate(),
            18, 
            0,
            0
        )

        // const isValid = slotTime.getTime() > eveningTime.getTime();
        // return isValid
    }

        const chooseTrainer = () => {
            console.log('Choose Trainer')
        }

  return (
      <>
      <h1>Book a Date</h1>

     <DayTimePicker timeSlotSizeMinutes={15} 

        onConfirm={chooseTrainer}    

     />

        </>
    )

}

export default BookDateTimeForm;