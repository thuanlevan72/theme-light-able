import React, { useState } from "react";
import { Form, Col, Row } from 'react-bootstrap';
import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';

const FormSliderTooltip = () => {
    const [sliderValues, setSliderValues] = useState<any>([50, 75]);

    const handleSliderChange = (values: any) => {
        setSliderValues(values);
    };
    return (
        <React.Fragment>
            <div className="form-group row mb-5">
                <label className="col-form-label col-lg-3 col-sm-12 text-lg-end">Slider With Tooltip</label>
                <Col lg={6} md={12} sm={12}>
                    <Row className="align-items-center g-3">
                        <Col xs={6} sm={3}>
                            <Form.Control
                                type="text"
                                placeholder="Quantity"
                                defaultValue={sliderValues[0]}
                            />
                        </Col>
                        <Col xs={6} sm={3}>
                            <Form.Control
                                type="text"
                                placeholder="Quantity"
                                defaultValue={sliderValues[1]}
                            />
                        </Col>
                        <Col sm={6}>
                            <Nouislider
                                range={{ min: 0, max: 100 }}
                                start={sliderValues}
                                onSlide={handleSliderChange}
                                tooltips={[true, true]}
                                connect
                            />
                        </Col>
                    </Row>
                    <small className="form-text text-muted">Always show slider values.</small>
                </Col>
            </div>
        </React.Fragment>
    );
}

export default FormSliderTooltip;