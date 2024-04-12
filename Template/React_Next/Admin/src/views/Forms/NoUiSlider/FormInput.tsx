import React, { useState } from "react";
import { Form, Col, Row } from 'react-bootstrap';
import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';

const FormInput = () => {

    const [quantity, setQuantity] = useState<any>([10, 30]);

    const handleSelectChange = (e: any) => {
        setQuantity(Number(e.target.value));
    };

    const handleInputChange = (e: any) => {
        setQuantity(Number(e.target.value));
    };

    return (
        <React.Fragment>
            <div className="form-group row mb-5">
                <label className="col-form-label col-lg-3 col-sm-12 text-lg-end">
                    Using HTML5 input elements
                </label>
                <Col lg={6} md={12} sm={12}>
                    <Row className="align-items-center g-3">
                        <Col xs={6} sm={3}>
                            <select
                                className="form-control"
                                id="pc-no_ui_slider-input-select"
                                onChange={handleSelectChange}
                                value={quantity[0]}
                            >
                                {Array.from({ length: 101 }, (_, i) => (
                                    <option key={i} value={i}>
                                        {i}
                                    </option>
                                ))}
                            </select>
                        </Col>
                        <Col xs={6} sm={3}>
                            <Form.Control
                                type="number"
                                id="pc-no_ui_slider-input-number"
                                placeholder="Quantity"
                                value={quantity[1]}
                                onChange={handleInputChange}
                            />
                        </Col>
                        <Col sm={6}>
                            <Nouislider range={{ min: -20, max: 40 }}
                                start={quantity}
                                connect
                                onSlide={(values: any) => setQuantity(values)} />
                        </Col>
                    </Row>
                    <small className="form-text text-muted">
                        noUiSlider&apos;s &apos;update&apos; method is useful for synchronizing with other elements
                    </small>
                </Col>
            </div>
        </React.Fragment>
    );
}

export default FormInput;