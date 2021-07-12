
import { Grid, Image, Card, Button } from "semantic-ui-react"
import { Link } from 'react-router-dom'

function TrainerCard ({extra, trainer}) {


  const {name, image, booked, rating, bio} = trainer





   

    return (
        <>
      <Grid.Column>
          <Card>
            <Image src={image} />
            <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className='date'>Booked: {booked.toString()}</span>
      </Card.Meta>
      <Card.Meta>
        <span className='rating'>Rating: {rating}</span>
      </Card.Meta>
      <Card.Description>
        Bio: {bio}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <Button primary>Contact</Button>
    <Link to="/bookdate">
    <Button secondary>Book</Button>
    </Link>
    </Card.Content>
          </Card>
      </Grid.Column>

        </>

      
    )

}


export default TrainerCard