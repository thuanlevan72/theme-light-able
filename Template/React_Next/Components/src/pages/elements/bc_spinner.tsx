import SectionTitle from "@layout/SectionTitle";
import Layout from "@layout/index";
import React, { ReactElement } from "react";
import { Button, Card, Col, Spinner } from "react-bootstrap";

const BCSpinner = () => {
    return (
        <>
            <SectionTitle
                title="Spinners"
                description="Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript."
                link="https://react-bootstrap.netlify.app/docs/components/spinners"
            />

            <div className="row">
                <div className="col-md-6">
                    <Card>
                        <Card.Header>
                            <h5>Border spinner</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <Spinner animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6">
                    <Card>
                        <Card.Header>
                            <h5>Border spinner [ Colors ]</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <Spinner animation="border" role="status" variant="primary">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                            <Spinner animation="border" role="status" variant="secondary">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                            <Spinner animation="border" role="status" variant="success">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                            <Spinner animation="border" role="status" variant="danger">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                            <Spinner animation="border" role="status" variant="warning">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                            <Spinner animation="border" role="status" variant="info">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                            <Spinner animation="border" role="status" variant="light">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                            <Spinner animation="border" role="status" variant="dark">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6">
                    <Card>
                        <Card.Header>
                            <h5>Growing spinner</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <Spinner animation="grow" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6">
                    <Card>
                        <Card.Header>
                            <h5>Growing spinner [ Colors ]</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <Spinner animation="grow" role="status" variant="primary">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                            <Spinner animation="grow" role="status" variant="secondary">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                            <Spinner animation="grow" role="status" variant="success">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                            <Spinner animation="grow" role="status" variant="danger">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                            <Spinner animation="grow" role="status" variant="warning">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                            <Spinner animation="grow" role="status" variant="info">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                            <Spinner animation="grow" role="status" variant="light">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                            <Spinner animation="grow" role="status" variant="dark">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6">
                    <Card>
                        <Card.Header>
                            <h5>Placement</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <h6>Start</h6>
                            <div className="d-flex justify-content-start">
                                <Spinner animation="border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </Spinner>
                            </div>
                            <hr />
                            <h6>Center</h6>
                            <div className="d-flex justify-content-center">
                                <Spinner animation="border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </Spinner>
                            </div>
                            <hr />
                            <h6>End</h6>
                            <div className="d-flex justify-content-end">
                                <Spinner animation="border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </Spinner>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6">
                    <Card>
                        <Card.Header>
                            <h5>Size</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <h6>Small</h6>
                            <Spinner animation="border" role="status" size="sm">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                            <Spinner animation="grow" role="status" size="sm">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                            <hr />
                            <h6>Custom</h6>
                            <Spinner animation="border" role="status" style={{ width: '3rem', height: '3rem' }}>
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                            <Spinner animation="grow" role="status" style={{ width: '3rem', height: '3rem' }}>
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <h5>Buttons</h5>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <div className="row g-4">
                                <div className="col-sm-6">
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <Button className="btn btn-primary lh-1 ms-1" type="button" disabled>
                                                <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                                                <span className="sr-only">Loading...</span>
                                            </Button>
                                        </div>
                                        <div className="col-12">
                                            <Button className="btn btn-primary lh-1" type="button" disabled>
                                                <Spinner className="me-2" as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                                                Loading...
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <Button className="btn btn-primary lh-1" type="button" disabled>
                                                <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
                                                <span className="sr-only">Loading...</span>
                                            </Button>
                                        </div>
                                        <div className="col-12">
                                            <Button className="btn btn-primary lh-1" type="button" disabled>
                                                <Spinner className="me-2" as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
                                                Loading...
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    )
}

BCSpinner.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

export default BCSpinner;
