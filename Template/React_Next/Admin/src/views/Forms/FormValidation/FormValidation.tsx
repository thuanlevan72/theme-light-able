import React from 'react';
import * as Yup from "yup";
import { useFormik } from "formik";
import { Col, Card, Row, Form, Button } from 'react-bootstrap';

const FormValidation = () => {
    const formik: any = useFormik({
        initialValues: {
            file: '',
            color: '',
            date: '',
            time: '',
            month: '',
            email: '',
            url: '',
            url_not_ld: '',
            number: '',
            integer: '',
            number_min_max: '',
            tel: '',
            password: '',
            confirmPassword: '',
            text_min_max: '',
            select: '',
            radio: '',
            checkbox1: false,
        },
        validationSchema: Yup.object({
            file: Yup.mixed().required('Please upload a file'),
            color: Yup.string().matches(/^#([0-9A-Fa-f]{3}){1,2}$/, 'Invalid color format'),
            date: Yup.date().required('Please enter a date'),
            time: Yup.string().matches(/^([0-1][0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format'),
            month: Yup.string().matches(/^\d{4}-(0[1-9]|1[0-2])$/, 'Invalid month format'),
            email: Yup.string().email('Invalid email format').required('Please enter an email'),
            url: Yup.string().url('Invalid URL format').required('Please enter a URL'),
            url_not_ld: Yup.string().url('Invalid URL format'),
            number: Yup.number().required('Please enter a number'),
            integer: Yup.number().integer('Please enter an integer').required('Please enter a number'),
            number_min_max: Yup.number()
                .min(2, 'Must be at least 2')
                .max(7, 'Must be at most 7')
                .required('Please enter a number between 2 and 7'),
            tel: Yup.string()
                .matches(/^\d{3}-\d{3}-\d{4}$/, 'Invalid phone number format (e.g., 123-456-7890)'),
            password: Yup.string()
                .matches(
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/,
                    'Password must contain at least 1 uppercase, 1 lowercase, and 1 number'
                )
                .required('Please enter a password'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), ""], 'Passwords must match')
                .required('Please confirm your password'),
            text_min_max: Yup.string()
                .min(3, 'Must be at least 3 characters')
                .max(9, 'Must be at most 9 characters')
                .required('Please enter text between 3 and 9 characters'),
            select: Yup.string().required('Please select an option'),
            radio: Yup.string().required('Please select an option'),
            checkbox1: Yup.boolean().oneOf([true], 'Please check the box'),
        }),
        onSubmit: (values: any) => {
            formik.resetForm();
            alert(JSON.stringify(values, null, 2));
        }
    })

    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>Form Validation</h5>
                </Card.Header>
                <Card.Body>
                    <Form id="validate-me" onSubmit={formik.handleSubmit}>
                        <Row className="form-group">
                            <label className="col-lg-4 col-form-label text-lg-end">Upload any file:</label>
                            <Col lg={6}>
                                <Form.Control name="file" id="file" type="file"
                                    value={formik.values.file}
                                    onChange={formik.handleChange}
                                    isInvalid={!!formik.errors.file} />
                                {formik.errors.file && formik.touched.file ? (
                                    <Form.Control.Feedback type="invalid" className='d-block'>{formik.errors.file}</Form.Control.Feedback>
                                ) : null}
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <label className="col-lg-4 col-form-label text-lg-end">Color Picker:</label>
                            <Col lg={6}>
                                <Form.Control
                                    type="color"
                                    name="color"
                                    id="color"
                                    className="form-control-color"
                                    value={formik.values.color}
                                    onChange={formik.handleChange}
                                    isInvalid={!!formik.errors.color}
                                />
                                {formik.errors.color && formik.touched.color ? (
                                    <Form.Control.Feedback type="invalid" className='d-block'>{formik.errors.color}</Form.Control.Feedback>
                                ) : null}
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <label className="col-lg-4 col-form-label text-lg-end">Date:</label>
                            <Col lg={6}>
                                <Form.Control type="date" name="date" id="date"
                                    value={formik.values.date}
                                    onChange={formik.handleChange}
                                    isInvalid={!!formik.errors.color}
                                />
                                {formik.errors.date && formik.touched.date ? (
                                    <Form.Control.Feedback type="invalid" className='d-block'>{formik.errors.date}</Form.Control.Feedback>
                                ) : null}
                                <small className="form-text text-muted">YYYY-MM-DD</small>
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <label className="col-lg-4 col-form-label text-lg-end">Time:</label>
                            <Col lg={6}>
                                <Form.Control type="time" name="time" id="time"
                                    value={formik.values.time}
                                    onChange={formik.handleChange}
                                    isInvalid={!!formik.errors.color}
                                />
                                {formik.errors.time && formik.touched.time ? (
                                    <Form.Control.Feedback type="invalid" className='d-block'>{formik.errors.time}</Form.Control.Feedback>
                                ) : null}
                                <small className="form-text text-muted">HH:MM (24-hour time)</small>
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <label className="col-lg-4 col-form-label text-lg-end">Month:</label>
                            <Col lg={6}>
                                <Form.Control type="month" name="month" id="month"
                                    value={formik.values.month}
                                    onChange={formik.handleChange}
                                    isInvalid={!!formik.errors.color}
                                />
                                {formik.errors.month && formik.touched.month ? (
                                    <Form.Control.Feedback type="invalid" className='d-block'>{formik.errors.month}</Form.Control.Feedback>
                                ) : null}
                                <small className="form-text text-muted">YYYY-MM</small>
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <label className="col-lg-4 col-form-label text-lg-end">Email:</label>
                            <Col lg={6}>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    id="email"
                                    data-bouncer-message="The domain portion of the email address is invalid (the portion after the @)."
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    isInvalid={!!formik.errors.color}
                                />
                                {formik.errors.email && formik.touched.email ? (
                                    <Form.Control.Feedback type="invalid" className='d-block'>{formik.errors.email}</Form.Control.Feedback>
                                ) : null}
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <label className="col-lg-4 col-form-label text-lg-end">URL:</label>
                            <Col lg={6}>
                                <Form.Control
                                    type="url"
                                    name="url"
                                    id="url"
                                    data-bouncer-message="The URL is a missing a TLD (for example, .com)."
                                    value={formik.values.url}
                                    onChange={formik.handleChange}
                                    isInvalid={!!formik.errors.color}
                                />
                                {formik.errors.url && formik.touched.url ? (
                                    <Form.Control.Feedback type="invalid" className='d-block'>{formik.errors.url}</Form.Control.Feedback>
                                ) : null}
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <label className="col-lg-4 col-form-label text-lg-end">URL without TLD allowed:</label>
                            <Col lg={6}>
                                <Form.Control
                                    type="url"
                                    name="url_not_ld"
                                    id="url_not_ld"
                                    pattern="(?:(?:https?|HTTPS?|ftp|FTP):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-zA-Z\u00a1-\uffff0-9]-*)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]-*)*[a-zA-Z\u00a1-\uffff0-9]+)*)(?::\d{2,5})?(?:[\/?#]\S*)?"
                                    value={formik.values.url_not_ld}
                                    onChange={formik.handleChange}
                                    isInvalid={!!formik.errors.color}
                                />
                                {formik.errors.url_not_ld && formik.touched.url_not_ld ? (
                                    <Form.Control.Feedback type="invalid" className='d-block'>{formik.errors.url_not_ld}</Form.Control.Feedback>
                                ) : null}
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <label className="col-lg-4 col-form-label text-lg-end">Number</label>
                            <Col lg={6}>
                                <Form.Control type="number" name="number" id="number"
                                    value={formik.values.number}
                                    onChange={formik.handleChange}
                                    isInvalid={!!formik.errors.color}
                                />
                                {formik.errors.number && formik.touched.number ? (
                                    <Form.Control.Feedback type="invalid" className='d-block'>{formik.errors.number}</Form.Control.Feedback>
                                ) : null}
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <label className="col-lg-4 col-form-label text-lg-end">Number (no decimals)</label>
                            <Col lg={6}>
                                <Form.Control
                                    type="number"
                                    step="any"
                                    name="integer"
                                    id="integer"
                                    value={formik.values.integer}
                                    onChange={formik.handleChange}
                                    isInvalid={!!formik.errors.color}
                                />
                                {formik.errors.integer && formik.touched.integer ? (
                                    <Form.Control.Feedback type="invalid" className='d-block'>{formik.errors.integer}</Form.Control.Feedback>
                                ) : null}
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <label className="col-lg-4 col-form-label text-lg-end">Number with Min and Max</label>
                            <Col lg={6}>
                                <Form.Control type="number" min="2" max="7" name="number_min_max" id="number_min_max"
                                    value={formik.values.number_min_max}
                                    onChange={formik.handleChange}
                                    isInvalid={!!formik.errors.color}
                                />
                                {formik.errors.number_min_max && formik.touched.number_min_max ? (
                                    <Form.Control.Feedback type="invalid" className='d-block'>{formik.errors.number_min_max}</Form.Control.Feedback>
                                ) : null}
                                <small className="form-text text-muted">Must be between 2 and 7</small>
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <label className="col-lg-4 col-form-label text-lg-end">Telephone Number</label>
                            <Col lg={6}>
                                <Form.Control type="text" name="tel" id="tel" pattern="^(?:\d{3}[\-]\d{3}[\-]\d{4})$"
                                    value={formik.values.tel}
                                    onChange={formik.handleChange}
                                    isInvalid={!!formik.errors.color}
                                />
                                {formik.errors.tel && formik.touched.tel ? (
                                    <Form.Control.Feedback type="invalid" className='d-block'>{formik.errors.tel}</Form.Control.Feedback>
                                ) : null}
                                <small className="form-text text-muted">123-456-7890</small>
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <label className="col-lg-4 col-form-label text-lg-end">Password</label>
                            <Col lg={6}>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    id="password"
                                    // data-bouncer-message="Please choose a password that includes at least 1 uppercase character, 1 lowercase character, and 1 number."
                                    // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    isInvalid={!!formik.errors.color}
                                />
                                {formik.errors.password && formik.touched.password ? (
                                    <Form.Control.Feedback type="invalid" className='d-block'>{formik.errors.password}</Form.Control.Feedback>
                                ) : null}
                                <small className="form-text text-muted">At least 1 uppercase character, 1 lowercase character, and 1 number</small>
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <label className="col-lg-4 col-form-label text-lg-end">Confirm Password</label>
                            <Col lg={6}>
                                <Form.Control
                                    type="password"
                                    name="confirmPassword"
                                    id="confirm-password"
                                    value={formik.values.confirmPassword}
                                    onChange={formik.handleChange}
                                    isInvalid={!!formik.errors.color}
                                />
                                {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
                                    <Form.Control.Feedback type="invalid" className='d-block'>{formik.errors.confirmPassword}</Form.Control.Feedback>
                                ) : null}
                                <small className="form-text text-muted">must match the field above</small>
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <label className="col-lg-4 col-form-label text-lg-end">Text with MinLength and MaxLength</label>
                            <Col lg={6}>
                                <Form.Control type="text" minLength={3} maxLength={9} name="text_min_max" id="text_min_max"
                                    value={formik.values.text_min_max}
                                    onChange={formik.handleChange}
                                    isInvalid={!!formik.errors.color}
                                />
                                {formik.errors.text_min_max && formik.touched.text_min_max ? (
                                    <Form.Control.Feedback type="invalid" className='d-block'>{formik.errors.text_min_max}</Form.Control.Feedback>
                                ) : null}
                                <small className="form-text text-muted">must be between 3 and 9 characters long</small>
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <label className="col-lg-4 col-form-label text-lg-end">Select</label>
                            <Col lg={6}>
                                <select name="select" id="select" className='form-control'
                                    value={formik.values.select}
                                    onChange={formik.handleChange}
                                >
                                    <option label="select"></option>
                                    <option>Harry Potter</option>
                                    <option>Lord of the Rings</option>
                                    <option>Star Wars</option>
                                    <option>Start Trek</option>
                                </select>
                                {formik.errors.select && formik.touched.select ? (
                                    <Form.Control.Feedback type="invalid" className='d-block'>{formik.errors.select}</Form.Control.Feedback>
                                ) : null}
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <label className="col-lg-4 col-form-label text-lg-end">Radio Buttons</label>
                            <Col lg={6}>
                                <Form.Check>
                                    <Form.Check.Input
                                        type="radio"
                                        name="radio"
                                        id="radio-1" // Unique id for the "Yes" option
                                        value="yes" // Set a unique value for the "Yes" option
                                        checked={formik.values.radio === "yes"} // Use checked to determine if it's selected
                                        onChange={formik.handleChange}
                                        isInvalid={!!formik.errors.radio}
                                    />
                                    <Form.Check.Label htmlFor="radio-1"> Yes </Form.Check.Label>
                                </Form.Check>
                                <Form.Check>
                                    <Form.Check.Input
                                        type="radio"
                                        name="radio"
                                        id="radio-2" // Unique id for the "No" option
                                        value="no" // Set a unique value for the "No" option
                                        checked={formik.values.radio === "no"} // Use checked to determine if it's selected
                                        onChange={formik.handleChange}
                                        isInvalid={!!formik.errors.radio}
                                    />
                                    <Form.Check.Label htmlFor="radio-2"> No </Form.Check.Label>
                                </Form.Check>
                                {formik.errors.radio && formik.touched.radio ? (
                                    <Form.Control.Feedback type="invalid" className='d-block'>{formik.errors.radio}</Form.Control.Feedback>
                                ) : null}

                            </Col>
                        </Row>

                        <Row className="form-group align-items-center">
                            <label className="col-lg-4 col-form-label text-lg-end">Checkboxes</label>
                            <Col lg={6}>
                                <Form.Check>
                                    <Form.Check.Input type="checkbox" name="checkbox1" id="checkbox-1"
                                        value={formik.values.checkbox1}
                                        onChange={formik.handleChange}
                                        isInvalid={!!formik.errors.color} />
                                    <Form.Check.Label htmlFor="checkbox-1"> Default checkbox </Form.Check.Label>
                                </Form.Check>
                                {formik.errors.checkbox1 && formik.touched.checkbox1 ? (
                                    <Form.Control.Feedback type="invalid" className='d-block'>{formik.errors.checkbox1}</Form.Control.Feedback>
                                ) : null}
                            </Col>
                        </Row>
                        <Row className="form-group mb-0">
                            <div className="col-lg-4 col-form-label"></div>
                            <Col lg={6}>
                                <Button type="submit" variant='primary'>Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </React.Fragment >
    );
}

export default FormValidation;
