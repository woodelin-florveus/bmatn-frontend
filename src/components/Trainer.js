import TrainerCard from './TrainerCard'
import { Grid, Button } from 'semantic-ui-react'


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
            extra={extra}
            />
        )
    })



    

    return(
    
      <>

        <h1 className="trainer-header" style={{textAlign:"center", padding:"1em"}}> Choose Local Trainers</h1>

          <Grid columns={4} style={{padding:"2em"}}>

            {/* <Grid.Row> */}
              {listTrainers}
            {/* </Grid.Row> */}

          </Grid>


      </>

    )

}

export default Trainer; 