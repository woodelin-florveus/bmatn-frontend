import { Card, Button } from "semantic-ui-react"


function AppointmentCard({appointment, name, deleteAppointment, updateAppointment}){


      const {id, location, date} = appointment


     const handleDeleteCard = () => {
       fetch(`http://localhost:3000/appointments/${id}`, {
         method: 'DELETE'
       });
       deleteAppointment(id)
       console.log(id)
     }

     // figure out how your going to update just the name of the form or anything else that needs to be updated 

     const handleUpdateCard = () => {
       fetch(`http://localhost:3000/appointments/${id}`, {
         method:'PATCH',
         headers: {
           'Content-Type': 'application/json'
         }, 
         body: JSON.stringify({})
       })
     }

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
                      <Button secondary>Edit</Button>                        
                </Card.Content>
            </Card>
        </Card.Group>

    )

}

export default AppointmentCard