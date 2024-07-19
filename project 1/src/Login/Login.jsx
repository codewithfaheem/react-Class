import React from "react";

import './Login.css'
import Button from "../Atoms/Button/Button";
import Heading from "../Atoms/Heading/Heading";

// function Login() {

// }


const SignUp = () => {
    return(
        <h1>SignUp Page</h1>
    )
}

const Login = () => {
    return(
        <>
            <h1>Login Page</h1>
            <Heading text="Hello Shahzad !" variant="h1" />
            <Button title="Submit" />
            <Button title="Submit" variant="primary" />
            <Button title="Submit" variant="success" />
            <Button title="Submit" variant="danger" />
        </>
    )
}

export {Login, SignUp};