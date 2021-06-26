
import { Card } from "semantic-ui-react"


function Appointment(){


    return(
        <div>
            <h1 className="appointment-header" style={{textAlign:"center", padding:"1em"}}> All Appointments </h1>
        <Card.Group>
        <Card>
          <Card.Content>
            <Card.Header>Trainer: Matthew Harris</Card.Header>
            <Card.Meta>Date: 06/24/2021</Card.Meta>
            <Card.Meta>Time: 8:00AM</Card.Meta>
            <Card.Description>
              Location: "brooklyn"
            </Card.Description>
          </Card.Content>
        </Card>

        </Card.Group>
        </div>
    )

}

export default Appointment;