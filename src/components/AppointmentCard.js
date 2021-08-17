import EditDate from "./EditDate";
import { Card, Button } from "semantic-ui-react"
import {useState} from 'react'


function AppointmentCard({appointment, deleteAppointment, updateAppointment, currentUser}){

    
      console.log(appointment)
    

      const {id, name, appointments} = appointment

      


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


 

    return (

        <Card.Group>
            <Card>
                <Card.Content>
                      {/* <Card.Header>{appointment.trainer.name.hasOwnProperty("name") ? appointment.trainer.name : "sorry not available"}</Card.Header> */}
                      <Card.Header>{name}</Card.Header>
                          <Card.Meta>{appointments && appointments.map((appointment) => {
                            return (
                              <div key={appointment.id}>{appointment.date}</div>
                            )
                          })}</Card.Meta>
                          <Card.Meta>Time: 8:00AM</Card.Meta>
                          <Card.Description>
                            {appointments && appointments.map((appointment) => {
                              return (
                                <div key={appointment.id}>{appointment.location}</div>
                              )
                            })}
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