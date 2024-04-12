import React from "react";
import { Card, Form, Button, InputGroup, Col } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';

const FormTooltips = () => {

    const validationSchema = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        username: yup.string().required(),
        city: yup.string().required(),
        state: yup.string().required(),
        zip: yup.string().required()
    });

    const formik: any = useFormik({
        initialValues: {
            firstName: 'Mark',
            lastName: 'Otto',
            username: '',
            city: '',
            state: '',
            zip: '',
        },
        validationSchema,
        onSubmit: (values: any) => {
            // console.log(values); // You can handle the form submission here
        },
    });

    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>Tooltips</h5>
                </Card.Header>
                <Card.Body>
                    <Form
                        className="row g-3 needs-validation"
                        noValidate
                        onSubmit={(event) => { formik.handleSubmit(); event.preventDefault() }}>
                        <Col md={4} className="position-relative">
                            <Form.Label htmlFor="validationTooltip01" >First name</Form.Label>
                            <Form.Control type="text" id="validationTooltip01"
                                name="firstName"
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                isValid={formik.touched.firstName && !formik.errors.firstName} />
                            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                        </Col>
                        <Col md={4} className="position-relative">
                            <Form.Label htmlFor="validationTooltip02">Last name</Form.Label>
                            <Form.Control type="text" id="validationTooltip02"
                                name="lastName"
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                isValid={formik.touched.lastName && !formik.errors.lastName} />
                            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                        </Col>
                        <Col md={4} className="position-relative">
                            <Form.Label htmlFor="validationTooltipUsername" >Username</Form.Label>
                            <InputGroup>
                                <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                                <Form.Control type="text" id="validationTooltipUsername"
                                    aria-describedby="validationTooltipUsernamePrepend"
                                    name="username"
                                    value={formik.values.username}
                                    onChange={formik.handleChange}
                                    isInvalid={!!formik.errors.username}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>
                                    {formik.errors.username}
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Col>
                        <Col md={6} className="position-relative">
                            <Form.Label htmlFor="validationTooltip03">City</Form.Label>
                            <Form.Control type="text" id="validationTooltip03"
                                name="city"
                                value={formik.values.city}
                                onChange={formik.handleChange}
                                isInvalid={!!formik.errors.city}
                            />
                            <Form.Control.Feedback type="invalid" tooltip>
                                {formik.errors.city}
                            </Form.Control.Feedback>
                        </Col>
                        <Col md={3} className="position-relative">
                            <Form.Label htmlFor="validationTooltip04" >State</Form.Label>
                            <Form.Select id="validationTooltip04" name="state"
                                value={formik.values.state}
                                onChange={formik.handleChange}
                                isInvalid={!!formik.errors.state}
                            >
                                <option selected disabled>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid" tooltip>
                                {formik.errors.state}
                            </Form.Control.Feedback>
                        </Col>
                        <Col md={3} className="position-relative">
                            <Form.Label htmlFor="validationTooltip05">Zip</Form.Label>
                            <Form.Control type="text" id="validationTooltip05"
                                name="zip"
                                value={formik.values.zip}
                                onChange={formik.handleChange}
                                isInvalid={!!formik.errors.zip}
                            />
                            <Form.Control.Feedback type="invalid" tooltip>
                                {formik.errors.zip}
                            </Form.Control.Feedback>
                        </Col>
                        <Col xs={12}>
                            <Button variant="primary" type="submit">
                                Submit form
                            </Button>
                        </Col>
                    </Form>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}

export default FormTooltips;