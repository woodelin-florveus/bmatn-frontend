import { Grid } from "semantic-ui-react"
import AppointmentCard from "./AppointmentCard";
import { useEffect, useState } from "react"

function Appointment({currentUser}){


  // testing 

const [items, setItems] = useState([])
const [isLoaded, setIsLoaded] = useState(false)

const fetchUrl = "http://localhost:3000/appointments";

const getItems = () => fetch(fetchUrl).then(response => response.json())

useEffect(() => {
  getItems().then(data => setItems(data), setIsLoaded(true))
}, [])


const deleteAppointment = (id) => {
  const appointmentId = items.filter((appoint) => appoint.id !== id)
  setItems(appointmentId)
}

const updateAppointment = (newAppointment) => {
  const appointmentId = items.map((appoint) => appoint.id === newAppointment.id ? newAppointment : appoint)
  setItems(appointmentId)
}




    let appointmentRender;

    if(items) {

      appointmentRender = items.map((appointment) => {
        
        return (
          <AppointmentCard 
            key={appointment.id}
            appointment={appointment}
            deleteAppointment={deleteAppointment}
            updateAppointment={updateAppointment}
            setItems={setItems}
            currentUser={currentUser}
            
          />
        )
      })
    } else {
      appointmentRender = "Loading..."
    }

  

    return(
        <div>
          <h1 style={{textAlign: "center", padding:"1em"}}> All Appointments </h1>      
          <Grid columns={2} padded style={{padding:"1em"}}>
            <Grid.Column style={{borderRight: " 1px solid  black"}}>
                <h3 style={{textAlign:"center"}}> Upcoming Appointments</h3>
                {appointmentRender}
            </Grid.Column>
            <Grid.Column>
                <h3 style={{textAlign: "center"}}> Previous Appointments</h3>                
            </Grid.Column>
          </Grid>
        </div>
    )

}

export default Appointment;