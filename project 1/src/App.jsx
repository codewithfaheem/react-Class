import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Login, SignUp } from "./Login/Login";
import { InputControl } from "./Atoms/InputControl";

import "./App.css";

function App() {
  
  const [userData, setUserData] = useState({});
    ``
    const setValue = (name, value) => {
      setUserData({
        ...userData,
        [name]: value
    })
    }
  function handleChange(e, key) {
    
      setUserData({
        ...userData,
        [key]: e.target.value,
      });
    0
  }

  function submitForm(){

  }
  console.log(userData);
  return (
    <>
      <button onClick={() => updateValue(5)}>{}</button>
      <Login /> : <SignUp  userData={userData} setUserData={setUserData} />
      <label> First name</label>
      <input
        type="text"
        value={userData?.firstName}
        onChange={(e) => handleChange(e, "firstName")}
        name="firstName"
      />
      <label> Last name</label>
      <input
        type="text"
        value={userData?.lastname}
        onChange={(e) => handleChange(e, "lastName")}
        name="lastName"
      />
      <button onClick={submitForm} type="submit" > submit</button>


      <hr />

      <InputControl name='firstname' label="First Name" value={userData?.firstname} setValue={setValue} />
      <InputControl name='lastname' label="Last Name" value={userData?.lastname} setValue={setValue} />
    </>
  );
}

export default App;
