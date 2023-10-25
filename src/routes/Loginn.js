import React, { useState } from "react";
import Navbarr from '../components/Navbarr';
import Footer from '../components/Footer'
import { Login } from "../components/Login";
import { Register } from "../components/Register";
function Loginn () {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = ( formName ) => {
    setCurrentForm(formName);
  }

  return (
    <div>
    <Navbarr />
    <div className="App">
      {
        currentForm === "Login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }
    </div>
    <Footer />
    </div>
  );
}

export default Loginn;