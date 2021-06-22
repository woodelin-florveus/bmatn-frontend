import {Switch, Route} from 'react-router-dom'
import Homepage from './Homepage';
import Nav from './Nav';
import Profile from './Profile';
import Signup from './Signup';
import Login from './Login'


function App() {
  return (
    <div className="app">

      <Nav />

      <Switch>
          <Route path="/home">
            <Homepage />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/Signup">
            <Signup />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
        </Switch>

    </div>
  );
}

export default App;
