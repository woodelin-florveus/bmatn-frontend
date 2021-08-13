

import { useHistory } from "react-router-dom";

function TrainerCard ({trainer_location, trainer}) {



  const history = useHistory()

  const {id, name, image, rating, bio} = trainer


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
                      <div className="location">
                      location: {trainer_location.length > 0 ? trainer_location : "sorry not available right now"}
                      </div>

                  </div>

                    <div className="ui divider"></div>

                  <div className="extra-content"style={{padding:"2em"}}>
                    <div className="ui two buttons">

                        <div className="ui basic green button" onClick={() => history.push({
                        pathname: `/bookdate/${id}`,
                        state: { id: id, name: name, image: image, trainer_location: trainer_location.toString()}
                        })}>Book</div>

                    <div className="ui basic red button" onClick={() => history.push({
                      pathname: `/trainers/${id}`,
                      state: { id: id, name: name, image: image, trainer_location: trainer_location.toString()}
                    })}>More Info</div>
                    </div>            
                  </div>
              </div>

          </div>
        </>

      

      
    )

}


export default TrainerCard