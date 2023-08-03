import React from "react";
import * as Yup from "yup"; 
import {Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";

const AstronautForm = (attr) => {
    const validationSchema = Yup.object().shape({
        firstname: Yup.string().required(),
        lastname: Yup.string().required(),
        // sex: Yup
        //     .mixed()
            // .oneOf(['male', 'female', 'other'])
            // .defined()
            // .required()
        // birthDate: Yup.date().required().default(() => new Date(1900, 0, 1)),
        // wikiPage: Yup.string().nullable(),
        // lastUpdate: Yup.date().nonNullable().default(() => new Date())
    });
    /* others */

    /* End others */

    return (
        <div className="form-wrapper">
        <Formik {...attr} validationSchema={validationSchema}>
            <Form>
            <FormGroup>
                
                {/* FIRSTNAME */}

                <Field 
                name="firstname"
                placeholder="First Name" 
                type="text" 
                className="form-control" 
                required />
                
                {/* ERROR */}
                
                <ErrorMessage
                name="firstname"
                className="d-block invalid-feedback"
                component="span"
                />
            </FormGroup>
            <FormGroup>
                
                {/* LASTNAME */}

                <Field 
                name="lastname" 
                placeholder="Last Name"
                type="text" 
                className="form-control" 
                required />
                
                {/* ERROR */}

                <ErrorMessage
                name="lastname"
                className="d-block invalid-feedback"
                component="span"
                />
            </FormGroup>
            <FormGroup className="select-wrapper">
                
                {/* SEX */}
                
                {/* <Field 
                name="sex"
                as="select" 
                className="form-control"
                multiple={false}
                required>
                    <option value="male">Male</option>
                    <option value="female" selected>Female</option>
                    <option value="other">Other</option>
                </Field>
                 */}
                {/* ERROR */}
                {/* <ErrorMessage
                name="sex"
                className="d-block invalid-feedback"
                component="span"
                /> */}



            </FormGroup>
            {/* <FormGroup> */}
                
                {/* BIRTHDATE */}

            {/* </FormGroup> */}
            <FormGroup>
                
                {/* WIKIPAGE */}

                {/* <Field name="wikiPage"
                type="text"
                className="form-control"/>
                 */}
                {/* ERROR */}
                
                {/* <ErrorMessage
                name="wikiPage"
                className="d-block invalid-feedback"
                component="span"
                /> */}
            </FormGroup>
            <Button variant="danger" size="lg" block="block" type="submit">{attr.children}</Button>
            </Form>
        </Formik>
        </div>
    )

}

export default AstronautForm;