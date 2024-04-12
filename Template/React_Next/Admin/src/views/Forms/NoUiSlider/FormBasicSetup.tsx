import React, { useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

const FormBasicSetup = () => {
    const [basicNouiSider, setBasicNouiSider] = useState<any>(20)
    const onUpDate = (value: any) => {
        setBasicNouiSider(value[0])
    }

    return (
        <React.Fragment>
            <Form>
                <div className="form-group row mb-5">
                    <label className="col-form-label col-lg-3 col-sm-12 text-lg-end">Basic Setup</label>
                    <Col lg={6} md={12} sm={12}>
                        <Row className="align-items-center g-3">
                            <Col sm={4} >
                                <Form.Control type="text" id="pc-no_ui_slider-1-input" placeholder="Quantity" defaultValue={Number(basicNouiSider).toFixed(0)} />
                            </Col>
                            <Col sm={8}>
                                <Nouislider range={{ min: 0, max: 100 }} start={[20]} onSlide={onUpDate} />
                            </Col>
                        </Row>
                        <small className="form-text text-muted">Input control is attached to slider</small>
                    </Col>
                </div>
            </Form>
        </React.Fragment>
    );
}

export default FormBasicSetup;
