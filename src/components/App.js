import {Switch, Route} from 'react-router-dom'
import Homepage from './Homepage';
import Trainer from './Trainer';
import TrainerInfo from './TrainerInfo'
import Appointment from './Appointment'
import Nav from './Nav';
import Profile from './Profile';
import Signup from './Signup';
import Login from './Login'
import { useEffect, useState } from 'react';
import BookDateTimeForm from './BookDateTimeform';
import BookDateEditForm from './BookDateEditForm';



function App() {

  const [currentUser, setCurrentUser] = useState(null)

  const [trainers, setTrainers] = useState([])
  const [appointments, setAppointments] = useState([])

  
  

  useEffect(() => {
    const token = true

    if(token){
      fetch("http://localhost:3000/myself")
      .then(response => response.json())
      .then(user => {
        setCurrentUser(user)
      });  
    }
  },[])


  // trainers 

  useEffect(() => {
      fetch('http://localhost:3000/trainers')
      .then(response => response.json())
      .then(setTrainers)
  },[])


  // appointments

  useEffect(() => {
    fetch('http://localhost:3000/appointments')
    .then(response => response.json())
    .then(setAppointments)
  }, [])


  const deleteAppointment = (id) => {
      const appointmentId = appointments.filter((appoint) => appoint.id !== id)
      setAppointments(appointmentId)
  }

  const updateAppointment = (newAppointment) => {
    const appointmentId = appointments.map((appoint) => appoint.id === newAppointment.id ? newAppointment : appoint)
    setAppointments(appointmentId)
  }

    

  return (
    <div className="app">

      <Nav currentUser={currentUser} setCurrentUser={setCurrentUser} />
      {/* {currentUser ? <h1>Welcome, {currentUser.name}</h1> : <h1>Please Login or sign up</h1>}   */}
      
      <Switch>
          <Route path="/home">
            <Homepage />
          </Route>
          <Route path="/trainers/:id">
            <TrainerInfo trainers={trainers} />
          </Route>
          <Route path="/trainers">
            <Trainer trainers={trainers} setTrainers={setTrainers} />
          </Route>
          <Route path="/appointments">
            <Appointment trainers={trainers} appointments={appointments} setAppointments={setAppointments} deleteAppointment={deleteAppointment} updateAppointment={updateAppointment} />
          </Route>
          <Route path="/bookdate/edit/:id">
            <BookDateEditForm currentUser={currentUser} setAppointments={setAppointments} />
          </Route>
          <Route path="/bookdate/:id">
            <BookDateTimeForm appointments={appointments} setAppointments={setAppointments} currentUser={currentUser} />
          </Route>
          <Route path="/profile">
            {currentUser && <Profile currentUser={currentUser} setCurrentUser={setCurrentUser} />}
          </Route>
          <Route path="/Signup">
            <Signup setCurrentUser={setCurrentUser} />
          </Route>
          <Route path="/Login">
            <Login setCurrentUser={setCurrentUser} />
          </Route>
          <Route path="/">
      {currentUser ? <h1>Welcome, {currentUser.name}</h1> : <h1>Please Login or sign up</h1>}    
          </Route>
        </Switch>

    </div>
  );
}

export default App;
