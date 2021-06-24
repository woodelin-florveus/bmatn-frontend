import {Switch, Route} from 'react-router-dom'
import Homepage from './Homepage';
import Nav from './Nav';
import Profile from './Profile';
import Signup from './Signup';
import Login from './Login'
import { useEffect, useState } from 'react';


function App() {

  const [currentUser, setCurrentUser] = useState(null)


  console.log(currentUser)


  // use a useEffect to remain logged in

  useEffect(() => {

    // check if a token has already logged in (look for the token)

    // if already logged in use token to log them in again

    // request => get auto log in

    // response => setCurrentUser

    const token = true

    if(token){
      fetch("http://localhost:3000/myself")
      .then(response => response.json())
      .then(user => {
        setCurrentUser(user)
      });  
    }
  },[])



  return (
    <div className="app">

      <Nav currentUser={currentUser} setCurrentUser={setCurrentUser} />
      {/* {currentUser ? <h1>Welcome, {currentUser.name}</h1> : <h1>Please Login or sign up</h1>}   */}
      <img src="https://dummyimage.com/1200x400/a8a7b2/ffffff.jpg" alt="dummyImage" />
      <Switch>
          <Route path="/home">
            <Homepage />
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
