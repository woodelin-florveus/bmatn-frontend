
import { useState } from "react";
import { useHistory } from "react-router-dom";

function TrainerCard ({trainer}) {



  const history = useHistory()

  //console.log(trainer.appointments)

  const {id, name, image, rating, bio, location, appointments} = trainer


      console.log(name)


    return (
        <>
      
          <div className="column">    
              <div className="ui fluid card">
                  <div className='image'>
                  <img src={image}  alt="trainer_image" />
                  </div>

                  <div className="content">
                      <h3>{name}</h3>
                        <div className="meta"> 
                          <span className="rating"> Rating : {rating}</span> 
                        </div>
                          <div className="description">
                            {bio}
                          </div>   
                        {/* <div className="location">
                      {appointments.map(appointment => (<div key={appointment.id}> Location: {appointment.location}</div>))}
                      </div> */}
                      {/* fix location through backend */}

                  </div>

                    <div className="ui divider"></div>

                  <div className="extra-content"style={{padding:"2em"}}>
                    <div className="ui two buttons">

                        <div className="ui basic green button" onClick={() => history.push({
                        pathname: `/bookdate/${id}`,
                        state: { id: id, name: name, image: image, trainer_location: location}
                        })}>Book</div>

                    <div className="ui basic red button" onClick={() => history.push({
                      pathname: `/trainers/${id}`,
                      state: { id: id, trainer_name: name, image: image, trainer_location: location}
                    })}>More Info</div>
                    </div>            
                  </div>
              </div>

          </div>
        </>

      

      
    )

}


export default TrainerCard