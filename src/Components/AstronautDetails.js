import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";


const config = require('../config.json');
const url = "http" + (config.https ? "s" : "") + "://" + config.host + ((config.port !== 0) ? (":" + config.port) : "");

const AstronautDetails = (attr) => {
    const {_id, firstname, lastname } = attr.obj; // TODO : ADD MORE ATTR


    // DELETE FUNCTION 
    const deleteAstronaut = () => {
        axios.delete(url+"/delete-astronaut/" + _id)
        .then((res) => {
            if (res.status === 200) {
                alert("Astronaut successfully deleted");
                window.location.reload();
            } else {
                // TODO
                console.log(res);
            }
        }).catch((err) => {
            // TODO
            alert("Something went wrong");
        });
    }

    return (
        <tr>
            <td>{firstname}</td>
            <td>{lastname}</td>
            {/* TODO : ADD MORE  */}
            {/* <td>{sex}</td> */}
            {/* <td>{wikiPage}</td> */}
            <td>
                <Link className="edit-link" to={"/edit-astronaut/"+ _id}>Edit</Link>
                <Button onClick={deleteAstronaut} size="sm" variant="danger">Delete</Button>
            </td>
        </tr>
    );
};
export default AstronautDetails;
