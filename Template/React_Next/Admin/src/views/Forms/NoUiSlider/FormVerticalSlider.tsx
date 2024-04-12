import React, { useState, useEffect } from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';

const FormVerticalSlider = () => {

    const [quantity, setQuantity] = useState<any>(0);

    const handleInputChange = (e: any) => {
        setQuantity(Number(e.target.value));
    };

    return (
        <React.Fragment>
            <div className="form-group row">
                <label className="col-form-label col-lg-3 col-sm-12 text-lg-end">Vertical Slider</label>
                <Col lg={6} md={12} sm={12}>
                    <Row className="mb-3 g-3">
                        <Col sm={4}>
                            <Form.Control
                                type="text"
                                className="form-control mb-3"
                                id="pc-no_ui_slider-6-input"
                                placeholder="Quantity"
                                value={quantity}
                                onChange={handleInputChange}
                            />
                        </Col>
                        <Col sm={8}>
                            {/* <div
                                id="pc-no_ui_slider-6"
                                className="pc-toggle-noUiSlider"
                            ></div> */}
                            <Nouislider range={{
                                min: [0],
                                max: [10]
                            }}
                                step={2}
                                start={0}
                                connect
                                orientation="vertical"
                                onUpdate={(values) => setQuantity(values)}
                            />
                        </Col>
                    </Row>
                    <small className="form-text text-muted">Vertical orientation slider example</small>
                </Col>
            </div>
        </React.Fragment>
    );
}

export default FormVerticalSlider;