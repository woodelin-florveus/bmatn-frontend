


import { Grid } from "semantic-ui-react"
import AppointmentCard from "./AppointmentCard";

function Appointment({ appointments, setAppointments, deleteAppointment, updateAppointment}){




    const listAppointments = appointments.map((appointment) => {
            return (
              <AppointmentCard 
              key={appointment.id}
              appointment={appointment}
              name={appointment.trainer.name}
              deleteAppointment={deleteAppointment}
              updateAppointment={updateAppointment}
              />
            )
    })

    return(
        <div>

          <h1 style={{textAlign: "center", padding:"1em"}}> All Appointments </h1>
        
          <Grid columns={2} padded style={{padding:"1em"}}>
            <Grid.Column style={{borderRight: " 1px solid  black"}}>
                <h3 style={{textAlign:"center"}}> Upcoming Appointments</h3>
                {listAppointments}
            </Grid.Column>

            <Grid.Column>
                <h3 style={{textAlign: "center"}}> Previous Appointments</h3>
                
            </Grid.Column>
          </Grid>


        </div>
    )

}

export default Appointment;