
import { Button } from "semantic-ui-react"
import { Link } from 'react-router-dom'
import DummyForm from "./DummyForm"

function TrainerCard ({extra, trainer}) {


  const {name, image, booked, rating, bio} = trainer





   

    return (
        <>
      {/* <Grid.Column>
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
    <Link to="/bookdate" query={{ the: 'query' }}>
    <Button secondary>Book</Button>
    </Link>
    </Card.Content>
          </Card>
      </Grid.Column> */}

        
          <div className="column">
            <div className="ui fluid card">
                <div className='image'>
                  <img src={image}  alt="trainer_image" />
                </div>

                    <div className="content">
                      <h3>{name}</h3>
                      <div className="meta"> 
                        <span className="booked"> Booking Status | {booked.toString()}</span> 
                      </div>
                        <div className="description">
                          {bio}
                        </div>
                    </div>

                          <div className="extra-content">
                          <div class="ui basic green button">Book</div>
                              <Link to="/bookdate" />
                          <Button secondary>Book</Button>
                          </div>
              </div>
          </div>
        </>

      

      
    )

}


export default TrainerCard