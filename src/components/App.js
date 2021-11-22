import {Switch, Route} from 'react-router-dom'

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
      fetch("https://bmatn-app-api.herokuapp.com/myself")
      .then(response => response.json())
      .then(user => {
        setCurrentUser(user)
      });  
    }
  },[])




  // trainers 

  useEffect(() => {
      fetch('https://bmatn-app-api.herokuapp.com/trainers')
      .then(response => response.json())
      .then(setTrainers)
  },[])


  // appointments

  useEffect(() => {
    fetch('https://bmatn-app-api.herokuapp.com/appointments')
    .then(response => response.json())
    .then(setAppointments)
  }, [])


  return (
    <div className="app">

      <Nav currentUser={currentUser} setCurrentUser={setCurrentUser} />
      {/* {currentUser ? <h1>Welcome, {currentUser.name}</h1> : <h1>Please Login or sign up</h1>}   */}
      
      <Switch>
          <Route path="/trainers/:id">
            <TrainerInfo trainers={trainers} />
          </Route>
          <Route path="/trainers">
            <Trainer trainers={trainers} setTrainers={setTrainers} />
          </Route>
          <Route path="/appointments">
            <Appointment currentUser={currentUser} setAppointments={setAppointments} appointments={appointments}  />
          </Route>
          <Route path="/bookdate/edit/:id">
            <BookDateEditForm currentUser={currentUser} setAppointments={setAppointments}  />
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
