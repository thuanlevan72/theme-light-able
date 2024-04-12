import React, { ReactElement, useState } from "react";
import Layout from "@layout/index";
import { Row } from "react-bootstrap";
import SectionTitle from "@layout/SectionTitle";
import { Steps } from 'intro.js-react';
import 'intro.js/introjs.css';

const Tour = () => {

    const [stepsEnabled, setStepsEnabled] = useState(true);

    return (
        <React.Fragment>
            <Row>
                <SectionTitle
                    title="Tour"
                    description="Intro.js is a lightweight JavaScript library for creating step-by-step and powerful customer onboarding tours"
                    link="https://www.npmjs.com/package/intro.js-react"
                />
            </Row>
            <Row>
                <div className="col-sm-12">
                    <div className="card step1">
                        <div className="card-header step2">
                            <h5 className="step3">Hello card</h5>
                        </div>
                        <div className="card-body step4">
                            <h1>H1 Admin Template</h1>
                            <h2>H2 Admin Template</h2>
                            <h3>H3 Admin Template</h3>
                            <h4>H4 Admin Template</h4>
                            <h5>H5 Admin Template</h5>
                            <h6>H6 Admin Template</h6>
                            <p>p Admin Template</p>
                            <strong>p Admin Template</strong>
                        </div>
                    </div>

                    <Steps
                        enabled={stepsEnabled}
                        steps={[

                            {
                                element: '.selector1',
                                intro: 'Hello world!',
                            },
                            {
                                element: '.step1',
                                intro: 'This is Card',
                            },
                            {
                                element: '.step2',
                                intro: 'This is Card header',
                            },
                        ]}
                        initialStep={0}
                        onExit={() => setStepsEnabled(false)}
                    />

                </div>
            </Row>
        </React.Fragment>
    );
}

Tour.getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>;
};

export default Tour;