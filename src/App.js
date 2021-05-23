import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import PrivateRoute from './Components/LogIn/PrivateRoute';
import Login from './Components/LogIn/Login'
import Crypto from './Components/Crypto/Crypto';
import Header from './Components/Header/Header';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
 
  return (
    <div className="App">
     
     <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
    <Router>  
      <Header></Header>
      <Switch>
      <Route exact path="/">
         <Home></Home>
          </Route>
      <Route exact path="/login">
         <Login></Login>
          </Route>
      <PrivateRoute path="/crypto" >
            <Crypto></Crypto>
             </PrivateRoute>
       </Switch>
    </Router>
     </UserContext.Provider>


    </div>
  );
}

export default App;
