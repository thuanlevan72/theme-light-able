import React, { useState, useEffect } from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';

const FormSoftLimits = () => {
    const [quantity, setQuantity] = useState<any>(20);

    const handleInputChange = (e: any) => {
        setQuantity(Number(e.target.value));
    };
    return (
        <React.Fragment>
            <div className="form-group row mb-5">
                <label className="col-form-label col-lg-3 col-sm-12 text-lg-end">Soft Limits</label>
                <Col lg={6} md={12} sm={12}>
                    <Row className="align-items-center mb-4 g-3">
                        <Col sm={4}>
                            <Form.Control
                                type="text"
                                className="form-control"
                                id="pc-no_ui_slider-5-input"
                                placeholder="Quantity"
                                value={quantity}
                                onChange={handleInputChange}
                            />
                        </Col>
                        <Col sm={8}>
                            <Nouislider range={{ min: 0, max: 100 }}
                                start={[quantity]}
                                connect
                                pips={{
                                    mode: 'values',
                                    values: [20, 80],
                                    density: 4
                                }}
                                onSlide={(values: any) => setQuantity(values[0])} />
                        </Col>
                    </Row>
                    <small className="form-text text-muted">
                        If you want to disable the edges of a slider, the set event can be used to reset the value if a limit is passed.
                    </small>
                </Col>
            </div>
        </React.Fragment>
    );
}

export default FormSoftLimits;