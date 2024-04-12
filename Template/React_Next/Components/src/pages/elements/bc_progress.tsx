import SectionTitle from "@layout/SectionTitle";
import Layout from "@layout/index";
import React, { ReactElement } from "react";
import { Col, Card, Carousel, Row, ProgressBar } from "react-bootstrap";

const BCProgress = () => {
    return (
        <>
            <SectionTitle
                title="Progress"
                description="Documentation and examples for using Bootstrap custom progress bars featuring support for stacked bars, animated backgrounds, and text labels."
                link="https://react-bootstrap.netlify.app/docs/components/progress"
            />
            <div className="row">
                <div className="col-sm-12">
                    <Card>
                        <Card.Header>
                            <h5>Progress</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <ProgressBar variant="info" now={0} className="mb-4" />
                            <ProgressBar variant="info" now={25} className="mb-4" />
                            <ProgressBar variant="info" now={50} className="mb-4" />
                            <ProgressBar variant="info" now={75} className="mb-4" />
                            <ProgressBar variant="info" now={100} />
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Header>
                            <h5>Labels</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <ProgressBar variant="info" now={25} label="25%" />
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Header>
                            <h5>Height</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <ProgressBar variant="info" now={25} style={{ height: '1px' }} className="mb-4" />
                            <ProgressBar variant="info" now={25} style={{ height: '20px' }} />
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Header>
                            <h5>Backgrounds</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <ProgressBar variant="success" now={25} className="mb-4" />
                            <ProgressBar variant="info" now={50} className="mb-4" />
                            <ProgressBar variant="warning" now={75} className="mb-4" />
                            <ProgressBar variant="danger" now={100} />
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Header>
                            <h5>Multiple Bars</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <div className="progress-stacked">
                                <div className="progress" role="progressbar" aria-label="Segment one"  style={{width: "15%"}}>
                                    <div className="progress-bar"></div>
                                </div>
                                <div className="progress" role="progressbar" aria-label="Segment two"  style={{width: "30%"}}>
                                    <div className="progress-bar bg-success"></div>
                                </div>
                                <div className="progress" role="progressbar" aria-label="Segment three"  style={{width: "20%"}}>
                                    <div className="progress-bar bg-info"></div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Header>
                            <h5>Striped</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <ProgressBar now={10} striped className="mb-4" />
                            <ProgressBar variant="success" now={25} striped className="mb-4" />
                            <ProgressBar variant="info" now={50} striped className="mb-4" />
                            <ProgressBar variant="warning" now={75} striped className="mb-4" />
                            <ProgressBar variant="danger" now={100} striped />
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Header>
                            <h5>Animated Stripes</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <ProgressBar animated now={85} className="mb-4" />
                            <ProgressBar variant="success" striped animated now={60} className="mb-4" />
                            <ProgressBar variant="info" striped animated now={90} className="mb-4" />
                            <ProgressBar variant="warning" striped animated now={50} className="mb-4" />
                            <ProgressBar variant="danger" striped animated now={35} className="mb-4" />
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    )
}

BCProgress.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

export default BCProgress;
