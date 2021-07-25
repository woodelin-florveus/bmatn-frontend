import { Card, Button } from "semantic-ui-react"


function AppointmentCard({appointment}){


      const {location, date} = appointment


     

    return (

        <Card.Group>
        <Card>
          <Card.Content>
            <Card.Header>Trainer: Matthew Harris</Card.Header>
            <Card.Meta>{date}</Card.Meta>
            <Card.Meta>Time: 8:00AM</Card.Meta>
            <Card.Description>
              Location: {location}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
    <Button primary>Delete</Button>
    <Button secondary>Edit</Button>
    </Card.Content>
        </Card>

        </Card.Group>

    )

}

export default AppointmentCard