

import { useHistory } from "react-router-dom";
//import { Link } from 'react-router-dom'

function TrainerCard ({trainer_location, trainer}) {


  console.log(trainer_location.toString())

  const history = useHistory()





  const {name, image, booked, rating, bio} = trainer

  

  
  


     


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
                        <span className="booked"> Booking Status | {booked.toString()}</span> 
                        <span className="rating"> Rating : {rating}</span> 
                      </div>
                        <div className="description">
                          {bio}
                        </div>

                        <div className="location">
                          location: {trainer_location.toString()}
                        </div>

                    </div>

                        <div className="ui divider"></div>

                    <div className="extra-content"style={{padding:"2em"}}>
                        <div className="ui two buttons">
                             
                            <div className="ui basic green button" onClick={() => history.push({
                              pathname: "/bookdate",
                              state: { name: name, trainer_location: trainer_location.toString()}
                            })}>Book</div>
                            
                            <div className="ui basic red button">Decline</div>
                        </div>            
                    </div>
              </div>

          </div>
        </>

      

      
    )

}


export default TrainerCard