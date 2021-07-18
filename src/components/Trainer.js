import TrainerCard from './TrainerCard'
import { Grid, Button } from 'semantic-ui-react'
import DummyForm from './DummyForm'


function Trainer({trainers, setTrainer}){


    const extra = (
        <div className='ui-two buttons'>
        <Button basic color='green'>
          Book
        </Button>
        <Button basic color='green'>
          Contact
        </Button>
      </div>
      )


    const listTrainers = trainers.map((trainer) => {


        return (
            <TrainerCard 
            key={trainer.id}
            trainer={trainer}
            trainer_location={trainer.appointments.map((appoint) => {
              return appoint.location
            })}
            extra={extra}
            />
        )
    })


    return(
    
      <>

        <h1 className="trainer-header" style={{textAlign:"center", padding:"1em"}}> Choose Local Trainers</h1>

          {/* <Grid columns={4} style={{padding:"2em"}}>
          
            <Grid.Row>
              {listTrainers}
            </Grid.Row>

          </Grid> */}

          <div className="ui three column grid" style={{padding:"4em"}}>
            
              {listTrainers}
            </div>
             

      </>

    )

}

export default Trainer; 