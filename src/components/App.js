import {Switch, Route} from 'react-router-dom'
import Homepage from './Homepage';
import Trainer from './Trainer';
import Appointment from './Appointment'
import BookInfoForm from './BookInfoForm';
import Nav from './Nav';
import Profile from './Profile';
import Signup from './Signup';
import Login from './Login'
import { useEffect, useState } from 'react';
import BookDateTimeForm from './BookDateTimeform';



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




    

  return (
    <div className="app">

      <Nav currentUser={currentUser} setCurrentUser={setCurrentUser} />
      {/* {currentUser ? <h1>Welcome, {currentUser.name}</h1> : <h1>Please Login or sign up</h1>}   */}
      
      <Switch>
          <Route path="/home">
            <Homepage />
          </Route>
          <Route path="/trainers">
            <Trainer trainers={trainers} setTrainers={setTrainers} />
          </Route>
          <Route path="/appointments">
            <Appointment appointments={appointments} setAppointments={setAppointments} />
          </Route>
          <Route path="/bookinfoform">
            <BookInfoForm />
          </Route>
          <Route path="/bookdate">
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
