import EditDate from "./EditDate";
import { Card, Button } from "semantic-ui-react"
import {useState} from 'react'


function AppointmentCard({appointment, deleteAppointment, updateAppointment, currentUser}){

     //const trainer_id = appointment.trainer.id


      const {id, date, location, trainer} = appointment


     const handleDeleteCard = () => {
       fetch(`http://localhost:3000/appointments/${id}`, {
         method: 'DELETE'
       });
       deleteAppointment(id)
     }

     const [showDate, setShowDate] = useState(false)

     const changeDate = () => {
        setShowDate(showDate => !showDate)
    }


    //console.log(trainer.name.length > 0)

    return (

        <Card.Group>
            <Card>
                <Card.Content>
                      {/* <Card.Header>{appointment.trainer.name.hasOwnProperty("name") ? appointment.trainer.name : "sorry not available"}</Card.Header> */}
                      <Card.Header>{trainer.name}</Card.Header>
                          <Card.Meta>{date}</Card.Meta>
                          <Card.Meta>Time: 8:00AM</Card.Meta>
                          <Card.Description>
                            Location: {location}
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                      <Button primary onClick={handleDeleteCard}>Delete</Button>
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