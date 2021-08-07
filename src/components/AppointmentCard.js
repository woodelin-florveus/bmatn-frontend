import EditDate from "./EditDate";
import { Card, Button } from "semantic-ui-react"
import { useHistory } from "react-router-dom"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useState} from 'react'


function AppointmentCard({appointment, name, deleteAppointment, updateAppointment, currentUser}){

     const trainer_id = appointment.trainer.id

    
      const history = useHistory()


      const {id, date, location} = appointment

     const handleDeleteCard = () => {
       fetch(`http://localhost:3000/appointments/${id}`, {
         method: 'DELETE'
       });
       deleteAppointment(id)
     }

     // figure out how your going to update just the name of the form or anything else that needs to be updated 

     const handleUpdateCard = () => {
      //  fetch(`http://localhost:3000/appointments/${id}`, {
      //    method:'PATCH',
      //    headers: {
      //      'Content-Type': 'application/json'
      //    }, 
      //    body: JSON.stringify({})
      //  })

       history.push({pathname: `/bookdate/edit/${trainer_id}`, 
       state: {id: id, date: date}
      })
     }

     const [showDate, setShowDate] = useState(false)

     const changeDate = () => {
        setShowDate(showDate => !showDate)
    }
    
    console.log(showDate)

    return (

        <Card.Group>
            <Card>
                <Card.Content>
                      <Card.Header>Trainer: {name}</Card.Header>
                          <Card.Meta>{date}</Card.Meta>
                          <Card.Meta>Time: 8:00AM</Card.Meta>
                          <Card.Description>
                            Location: {location}
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                      <Button primary onClick={handleDeleteCard}>Delete</Button>
                      {/* <Button secondary onClick={handleUpdateCard}>Edit</Button>  
                      onClick={chageDate}                       */}
                      <Button secondary onClick={changeDate}>Edit Date</Button>
                      {showDate ?                       
                      <EditDate id={id} currentUser={currentUser} updateAppointment={updateAppointment} />
                      : null}
                </Card.Content>
            </Card>
        </Card.Group>

    )

}

export default AppointmentCard