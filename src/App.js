import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import Destination from './Components/Destination/Destination'
import Footer from './Components/Footer/Footer'
import SignIn from './Components/SignIn/SignIn'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import FinalDestination from './Components/FinalDestination/FinalDestination';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router >
        <Header />



        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login ></Login>
          </Route>
          <Route path="/signin">
            <SignIn></SignIn>
          </Route>
          <PrivateRoute path="/destination">
            <Destination />
          </PrivateRoute>
          <PrivateRoute path="/finalDestination">
            <FinalDestination />
          </PrivateRoute >
          <Route path="*">
            <h1>404 - Not Found!</h1>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router >
    </UserContext.Provider>
  );
}

export default App;
