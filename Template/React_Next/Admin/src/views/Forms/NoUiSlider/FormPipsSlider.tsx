import React, { useState } from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';

const FormPipsSlider = () => {
    const [sliderValue, setSliderValue] = useState<any>(50.00);

    return (
        <React.Fragment>
            <div className="form-group row mb-5">
                <label className="col-form-label col-lg-3 col-sm-12 text-lg-end">
                    Moving the slider by clicking pips
                </label>
                <Col lg={6} md={12} sm={12}>
                    <Row className="align-items-center g-3">
                        <Col sm={4}>
                            <Form.Control
                                type="text"
                                className="form-control"
                                id="pc-no_ui_slider-10-input"
                                placeholder="Currency"
                                defaultValue={sliderValue}
                            />
                        </Col>
                        <Col sm={8} className="mb-4">
                            <Nouislider
                                start={[50]}
                                range={{
                                    min: 0,
                                    max: 100
                                }}
                                pips={{
                                    mode: 'count',
                                    values: 5
                                }}
                                onSlide={(value: any) => setSliderValue(value)}
                            />
                        </Col>
                    </Row>
                </Col>
            </div>
        </React.Fragment>
    );
}

export default FormPipsSlider;