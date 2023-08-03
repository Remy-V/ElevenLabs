
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import AstronautDetails from "./AstronautDetails";

const config = require('../config.json');
const url = "http" + (config.https ? "s" : "") + "://" + config.host + ((config.port !== 0) ? (":" + config.port) : "");

const AstronautList = () => {
    const [astronauts, setAstronaut] = useState([]);
    useEffect(() => {
    axios.get(url+"/astronaut-list")
        .then(({data}) => {
            setAstronaut(data);
        })
        .catch((err) => {
            console.log("Can't fetch Astronauts list : " + err);
        });
        
    }, []);

    const DataTable = () => {
        return astronauts.map((res, i) => {
            return <AstronautDetails obj={res} key={i} />;
        });
    }

    return (
        <div className="table-wrapper">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        {/* <th>Sex</th> */}
                        {/* <th>wikiPage</th> */}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>{DataTable()}</tbody>
            </Table>

        </div>
    );
};


export default AstronautList;
