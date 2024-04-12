import SectionTitle from "@layout/SectionTitle";
import Layout from "@layout/index";
import Link from "next/link";
import React, { ReactElement } from "react";
import { Col, Card, Row } from "react-bootstrap";

//import images
import lightBox from "@assets/images/light-box/l3.jpg";
import Image from "next/image";

const BCCard = () => {
    return (
        <>
            <SectionTitle
                title="Cards"
                description="Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options."
                link="https://react-bootstrap.netlify.app/docs/components/cards"
            />

            <Row>
                <Col md={6} xl={4}>
                    <h5>Body Content</h5>
                    <hr />
                    <div className="pc-component">
                        <Card>
                            <Card.Body> This is some text within a card body. </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col md={6} xl={4}>
                    <h5>Titles, Text, and Links</h5>
                    <hr />
                    <div className="pc-component">
                        <Card>
                            <Card.Body>
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                    card&apos;s
                                    content.</p>
                                <Link href="#!" className="card-link">Card link</Link>
                                <Link href="#!" className="card-link">Another link</Link>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col md={6} xl={4}>
                    <h5>Header and Footer</h5>
                    <hr />
                    <div className="pc-component">
                        <Card>
                            <h5 className="card-header">Featured</h5>
                            <Card.Body>
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <Link href="#!" className="btn btn-success">Go somewhere</Link>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col xl={12}>
                    <Row>
                        <Col sm={12} md={4}>
                            <h5>Left Align</h5>
                            <hr />
                            <div className="pc-component">
                                <Card>
                                    <Card.Body>
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <Link href="#!" className="btn btn-primary">Go somewhere</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                        <Col sm={12} md={4}>
                            <h5>Center Align</h5>
                            <hr />
                            <div className="pc-component">
                                <Card className="text-center">
                                    <Card.Body>
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <Link href="#!" className="btn btn-primary">Go somewhere</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                        <Col sm={12} md={4}>
                            <h5>Right Align</h5>
                            <hr />
                            <div className="pc-component">
                                <Card className="text-end">
                                    <Card.Body>
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <Link href="#!" className="btn btn-primary">Go somewhere</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} xxl={4}>
                    <h5>Image Caps</h5>
                    <hr />
                    <div className="pc-component">
                        <Card className="mb-3">
                            <Image className="img-fluid card-img-top" src={lightBox}
                                alt="Card image cap" />
                            <Card.Body>
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                                    additional
                                    content.
                                    This content is a little bit
                                    longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col md={6} xxl={4}>
                    <h5>Image Caps [ Bottom ]</h5>
                    <hr />
                    <div className="pc-component">
                        <Card>
                            <Card.Body>
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                                    additional
                                    content.
                                    This content is a little bit
                                    longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </Card.Body>
                            <Image className="img-fluid card-img-bottom" src={lightBox}
                                alt="Card image cap" />
                        </Card>
                    </div>
                </Col>
                <Col md={6} xxl={4}>
                    <h5>Image Overlays</h5>
                    <hr />
                    <div className="pc-component">
                        <Card className="bg-dark">
                            <Image className="img-fluid card-img" src={lightBox} alt="Card image" />
                            <div className="card-img-overlay">
                                <h5 className="card-title text-white">Card title</h5>
                                <p className="card-text text-white">This is a wider card with supporting text below as a natural lead-in
                                    to
                                    additional content. This content is a little bit
                                    longer.</p>
                                <p className="card-text text-white">Last updated 3 mins ago</p>
                            </div>
                        </Card>
                    </div>
                </Col>
                <Col xl={12}>
                    <h5>Card Styles</h5>
                    <hr />
                    <div className="pc-component">
                        <Row>
                            <Col sm={4}>
                                <Card className="text-white bg-primary">
                                    <div className="card-header">Header</div>
                                    <Card.Body>
                                        <h5 className="card-title text-white">Primary card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                                            the card&apos;s
                                            content.</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={4}>
                                <Card className="text-white bg-secondary">
                                    <div className="card-header">Header</div>
                                    <Card.Body>
                                        <h5 className="card-title text-white">Secondary card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                                            the card&apos;s
                                            content.</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={4}>
                                <Card className="text-white bg-success">
                                    <div className="card-header">Header</div>
                                    <Card.Body>
                                        <h5 className="card-title text-white">Success card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                                            the card&apos;s
                                            content.</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={4}>
                                <Card className="text-white bg-danger">
                                    <div className="card-header">Header</div>
                                    <Card.Body>
                                        <h5 className="card-title text-white">Danger card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                                            the card&apos;s
                                            content.</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={4}>
                                <Card className="text-white bg-warning">
                                    <div className="card-header">Header</div>
                                    <Card.Body>
                                        <h5 className="card-title text-white">Warning card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                                            the card&apos;s
                                            content.</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={4}>
                                <Card className="text-white bg-info">
                                    <div className="card-header">Header</div>
                                    <Card.Body>
                                        <h5 className="card-title text-white">Info card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                                            the card&apos;s
                                            content.</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={4}>
                                <Card className="bg-light">
                                    <div className="card-header">Header</div>
                                    <Card.Body>
                                        <h5 className="card-title">Light card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                                            the card&apos;s
                                            content.</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={4}>
                                <Card className="text-white bg-dark">
                                    <div className="card-header">Header</div>
                                    <Card.Body>
                                        <h5 className="card-title text-white">Dark card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                                            the card&apos;s
                                            content.</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col xl={12}>
                    <h5>Card Groups</h5>
                    <hr />
                    <div className="pc-component">
                        <div className="card-group">
                            <Card>
                                <Image className="img-fluid card-img-top" src={lightBox}
                                    alt="Card image cap" />
                                <Card.Body>
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                                        additional
                                        content. This content is a little
                                        bit longer.</p>
                                </Card.Body>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </Card>
                            <Card>
                                <Image className="img-fluid card-img-top" src={lightBox}
                                    alt="Card image cap" />
                                <Card.Body>
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This card has supporting text below as a natural lead-in to additional
                                        content.</p>
                                </Card.Body>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </Card>
                            <Card>
                                <Image className="img-fluid card-img-top" src={lightBox}
                                    alt="Card image cap" />
                                <Card.Body>
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                                        additional
                                        content. This card has even longer
                                        content than the first to show that equal height action.</p>
                                </Card.Body>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </Card>
                        </div>
                    </div>
                </Col>
                <Col xl={12}>
                    <h5 className="mt-3">Horizontal</h5>
                    <hr />
                    <div className="pc-component">
                        <Card className="overflow-hidden">
                            <Row className="g-0">
                                <Col md={4}>
                                    <Image
                                        src={lightBox} className="img-fluid rounded-md-start" alt="..." />
                                </Col>
                                <Col md={8}>
                                    <Card.Body>
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </div>
                </Col>
            </Row>
        </>
    )
}

BCCard.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

export default BCCard;
