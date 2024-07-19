import React from "react";
import './Button.css'
const Button = ({title, variant}) => {
    let buttonVariant = ""
    switch (variant){
        case "primary":
            buttonVariant = "btn btn-primary"
            break;
        case "danger":
            buttonVariant = "btn btn-danger"
            break;
        case "success":
            buttonVariant = "btn btn-success"
            break;
        case "success":
            buttonVariant = "btn btn-success"
            break;
        default:
            buttonVariant = "btn btn-default"
            break;
        }
        console.log(variant)
    return(

        <button className={buttonVariant}>{title}</button>
    )
}

export default Button;