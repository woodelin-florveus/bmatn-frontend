import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Label } from 'semantic-ui-react'



function TrainerInfo(){

  const { id } = useParams()

  const [trainerInfo, setTrainerInfo] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:3000/trainers/${id}`)
    .then(response => response.json())
    .then((trainerInfo) => {
        setTrainerInfo(trainerInfo)
        setIsLoaded(true)
    })
  },[id])

  if(!isLoaded) return <h2>Loading....</h2>

  const {name, image, bio} = trainerInfo


    return (
      <div className="trainer_info_card">
        <MDBCard style={{ maxWidth: '70%', margin: 'auto'}}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src={image} alt={name} fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>{name}</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              content is a little bit longer.
              <Label.Group size='huge' color="blue" style={{paddingTop:'.5em'}}>
                  <Label>Yoga</Label>
                  <Label>High Intensity Training</Label>
                  <Label>Weight Training</Label>
                  <Label>Mobility Flexibility</Label>
            </Label.Group>
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    </div>
    )

}

export default TrainerInfo;