// COMPONENT : CREATE A NEW ASTRONAUT

import React, { useState } from "react";
import Axios from "axios";
import AstronautForm from "./AstronautForm";

const config = require('../config.json');
const url = "http" + (config.https ? "s" : "") + "://" + config.host + ((config.port !== 0) ? (":" + config.port) : "");

const CreateAstronaut = () => {
    const [formValues, setFormValues] = 
        useState({
            firstname: '', 
            lastname: ''
            // TODO : ADD MORE
            // sex: ['male', 'female', 'other'] 
            // wikiPage: ''
        });
    const onSubmit = AstronautObject => {
        console.log("Component");
        console.log(AstronautObject);
        Axios.post(
            url+'/create-astronaut', AstronautObject)
            .then(res => {
                console.log(res);
                (res.status===200) ? alert('Astronaut successfully created') : Promise.reject()
            }).catch(err => {
                alert('Unable to create this Astronaut');
                console.log(err);
        }); 
    }

    return(
        <AstronautForm initialValues={formValues}
        onSubmit={onSubmit}
        enableReinitialize>
            Create a New Astronaut
        </AstronautForm>
    )
}


export default CreateAstronaut;
