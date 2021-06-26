import { Card, Button } from 'semantic-ui-react'


function Trainer(){


    const extra = (
        <div className='ui-two buttons'>
        <Button basic color='green'>
          Book
        </Button>
        <Button basic color='green'>
          More Info ...
        </Button>
        <Button basic color='green'>
          Contact
        </Button>
      </div>
      )

    return(
        <div>
            <h1 className="trainer-header" style={{textAlign:"center", padding:"1em"}}> Local Trainers</h1>

  <Card.Group itemsPerRow={4} style={{padding:"2em"}}>

<Card
    image="https://dummyimage.com/650x650/000/fff"
    header='Trainer Name'
    meta='Booked'
    description='Add Bio'
    extra={extra}
  />
  
  <Card
    image="https://dummyimage.com/650x650/000/fff"
    header='Trainer Name'
    meta='Booked'
    description='Add Bio'
    extra={extra}
  />

<Card
    image="https://dummyimage.com/650x650/000/fff"
    header='Trainer Name'
    meta='Booked'
    description='Add Bio'
    extra={extra}
  />

<Card
    image="https://dummyimage.com/650x650/000/fff"
    header='Trainer Name'
    meta='Booked'
    description='Add Bio'
    extra={extra}
  />
  
  </Card.Group>
      </div>
    )

}

export default Trainer; 