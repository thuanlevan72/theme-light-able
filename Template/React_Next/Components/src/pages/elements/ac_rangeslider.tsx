import React, { ReactElement, useState } from "react";
import SectionTitle from "@layout/SectionTitle";
import Layout from "@layout/index";
import { Col, Row } from "react-bootstrap";
import Slider from "react-rangeslider";
import 'react-rangeslider/lib/index.css'

const Rangeslider = () => {

    const [value, setValue] = useState(10);
    const [nagative, setNagative] = useState(-10);
    const [foating, setFloating] = useState(12.5);
    const [horizontal, setHorizontal] = useState<any>(10);

    const horizontalLabels = { 0: 'Low', 50: 'Medium', 100: 'High' }

    const formatkg = (value: any) => value + ' kg';

    const [vertical, setVertical] = useState<any>(10);

    const verticalLabels = {
        10: 'Getting started',
        50: 'Half way',
        90: 'Almost done',
        100: 'Complete!'
    }

    const formatPc = (p: any) => p + '%'

    return (
        <React.Fragment>
            <Row>
                <SectionTitle
                    title="Range Slider"
                    description="Beautiful notifications with CSS and Vanilla JavaScript!"
                    link="https://www.npmjs.com/package/react-rangeslider"
                />
            </Row>
            <Row>
                <Col lg={4} md={6}>
                    <div className="card">
                        <div className="card-body">
                            <h6>Basic example with custom formatter and colored selected region via CSS.</h6>
                            <hr />
                            <Slider min={10} max={100} tooltip={false} value={value} onChange={(value) => setValue(value)} />
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6}>
                    <div className="card">
                        <div className="card-body">
                            <h6>Negative Values</h6>
                            <hr />
                            <Slider min={-10} max={0} value={nagative} onChange={(value) => setNagative(value)} />
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6}>
                    <div className="card">
                        <div className="card-body">
                            <h6>Floating Point Boundaries</h6>
                            <hr />
                            <Slider min={10} max={20} step={0.5} value={foating} onChange={(value) => setFloating(value)} />
                        </div>
                    </div>
                </Col>
                <Col lg={6} md={6}>
                    <div className="card">
                        <div className="card-body">
                            <h6>Custom Labels</h6>
                            <hr />
                            <Slider min={0}
                                max={100}
                                value={horizontal}
                                labels={horizontalLabels}
                                format={formatkg}
                                tooltip={true}
                                // handleLabel={horizontal.toString()}
                                onChange={(value) => setHorizontal(value)}
                                className="slider custom-labels" />
                        </div>
                    </div>
                </Col>
                <Col lg={6} md={6}>
                    <div className="card">
                        <div className="card-body">
                            <h6>orientation vertical</h6>
                            <hr />
                            <Slider min={0}
                                max={100}
                                value={vertical}
                                orientation='vertical'
                                labels={verticalLabels}
                                handleLabel={vertical.toString()}
                                format={formatPc}
                                onChange={(value) => setVertical(value)}
                                className="slider custom-labels" />
                        </div>
                    </div>
                </Col>
            </Row>

        </React.Fragment>
    );
}


Rangeslider.getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>;
};

export default Rangeslider;