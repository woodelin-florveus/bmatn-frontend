import EditDate from "./EditDate";
import { Card, Button } from "semantic-ui-react"
import {useState} from 'react'


function AppointmentCard({appointment, deleteAppointment, updateAppointment, currentUser, setItems}){


   
      

      const {id, trainer_name, date, trainer_location} = appointment


     const handleDeleteCard = () => {
       fetch(`https://bmatn-app-api.herokuapp.com/appointments/${id}`, {
         method: 'DELETE'
       });
       deleteAppointment(id)
     }

     const [showDate, setShowDate] = useState(false)

     const changeDate = () => {
        setShowDate(showDate => !showDate)
    }


 

    return (

        <Card.Group>
            <Card>
                <Card.Content>
                      {/* <Card.Header>{appointment.trainer.name.hasOwnProperty("name") ? appointment.trainer.name : "sorry not available"}</Card.Header> */}
                      <Card.Header>{trainer_name}</Card.Header>
                          <Card.Meta>{date}</Card.Meta>
                          <Card.Meta>Time: 8:00AM</Card.Meta>
                          <Card.Description key={appointment.trainer_id}>{trainer_location}</Card.Description>
                            <Card.Description>
                            {/* {location} */}
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                      <Button primary onClick={handleDeleteCard}>Delete</Button>
                      <Button secondary onClick={changeDate}>Edit Date</Button>
                      {showDate ?                       
                      <EditDate id={id} currentUser={currentUser} updateAppointment={updateAppointment} setItems={setItems} appointment={appointment} />
                      : null}

                </Card.Content>
            </Card>
        </Card.Group>

    )

}

export default AppointmentCard