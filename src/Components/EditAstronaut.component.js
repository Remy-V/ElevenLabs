// COMPONENT : EDIT AN ASTRONAUT

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import AstronautForm from "./AstronautForm";

const config = require('../config.json');
const url = "http" + (config.https ? "s" : "") + "://" + config.host + ((config.port !== 0) ? (":" + config.port) : "");

const EditAstronaut = (attr) => {
    const [formValues, setFormValues] = useState({
        firstname:'',
        lastname: '',

        // TODO : ADD MORE
        // sex: ['male', 'female', 'other'],
        // wikiPage: ''
    });

    // retrieve the ID by URL
    const { id } = useParams();

    const onSubmit = (AstronautObject) => {
        Axios.put( url + "/edit-astronaut/" + id, AstronautObject)
        .then((res) => {
            if (res.status === 200) { 
                alert("Astronaut successfully updated");
                window.location.replace("http://localhost:3001/astronaut-list");
            } else {
                console.log("flag error");
            }
        });
    }

    useEffect(() => {
        Axios.get( url + "/edit-astronaut/" + id)
        .then((res) => {
            // TODO : ADD MORE
            const { firstname, lastname } = res.data;
            setFormValues({ firstname, lastname });
        }).catch((err) => console.log(err));
    });

    return (
        <AstronautForm
          initialValues={formValues}
          onSubmit={onSubmit}
          enableReinitialize>
          Update Astronaut
        </AstronautForm>
    );
}

export default EditAstronaut;