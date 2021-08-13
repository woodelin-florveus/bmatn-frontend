import TrainerCard from './TrainerCard'
import { Button } from 'semantic-ui-react'



function Trainer({trainers}){

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
    
      < div className="trainer_container">

        <h1 className="trainer-header" style={{textAlign:"center", padding:"1em"}}> Choose Local Trainers</h1>

          <div className="ui four column grid" style={{padding:"4em"}}>
            
              {listTrainers}
              
            </div>
            
      </div>

    )

}

export default Trainer; 