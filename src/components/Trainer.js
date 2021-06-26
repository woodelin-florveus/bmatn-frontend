import { Card, Button } from 'semantic-ui-react'


function Trainer(){


    const extra = (
        <div className='ui-two buttons'>
        <Button basic color='green'>
          Approve
        </Button>
        <Button basic color='red'>
          Decline
        </Button>
      </div>
      )

    return(
        <div>
            <h1 className="trainer-header" style={{textAlign:"center", padding:"1em"}}> Local Trainers</h1>

<Card
    image="https://dummyimage.com/650x650/000/fff"
    header='Elliot Baker'
    meta='Friend'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    extra={extra}
  />

        </div>
    )

}

export default Trainer; 