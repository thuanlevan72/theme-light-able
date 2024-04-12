import SectionTitle from "@layout/SectionTitle";
import Layout from "@layout/index";
import Link from "next/link";
import React, { ReactElement, useState } from "react";
import { Col, Card, Button, Row, Collapse, Accordion } from "react-bootstrap";

const BCCollapse = () => {
    const [collapseOpen, setCollapseOpen] = useState(false);

    const toggleCollapse = () => {
        setCollapseOpen(!collapseOpen);
    };

    const [collapseOpen1, setCollapseOpen1] = useState(false);
    const [collapseOpen2, setCollapseOpen2] = useState(false);

    const toggleCollapse1 = () => {
        setCollapseOpen1(!collapseOpen1);
    };

    const toggleCollapse2 = () => {
        setCollapseOpen2(!collapseOpen2);
    };

    return (
        <>
            <SectionTitle
                title="Collapse"
                description="Toggle the visibility of content across your project with a few clases and our JavaScript plugins."
                link="https://react-bootstrap.netlify.app/docs/utilities/transitions/#collapse"
            />

            <Row>
                <Col sm={12}>
                    <h5 className="mb-3">Basic Collapse</h5>
                    <hr />
                    <div className="pc-component">
                        <Card>
                            <Card.Header className="border-bottom-0">
                                <Link
                                    href="#"
                                    className="btn btn-primary m-t-5 me-1"
                                    onClick={toggleCollapse}
                                    aria-expanded={collapseOpen}
                                    aria-controls="collapseExample"
                                >
                                    Link with href
                                </Link>
                                <Button
                                    variant="primary"
                                    className="m-t-5"
                                    onClick={toggleCollapse}
                                    aria-expanded={collapseOpen}
                                    aria-controls="collapseExample"
                                >
                                    Button with onClick
                                </Button>
                            </Card.Header>
                            <Collapse in={collapseOpen}>
                                <div id="collapseExample">
                                    <Card.Body className="border-top">
                                        <p className="mb-0">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life
                                            accusamus terry richardson ad squid. Nihil anim keffiyeh
                                            helvetica, craft beer labore wes anderson cred nesciunt
                                            sapiente ea proident.
                                        </p>
                                    </Card.Body>
                                </div>
                            </Collapse>
                        </Card>
                    </div>
                </Col>
                <Col sm={12} className="mb-3">
                    <h5 className="mb-3">Multiple Targets</h5>
                    <hr />
                    <div className="pc-component">
                        <Button
                            variant="primary"
                            className="mb-1 me-1"
                            onClick={toggleCollapse1}
                            aria-expanded={collapseOpen1}
                            aria-controls="multiCollapseExample1"
                        >
                            Toggle first element
                        </Button>
                        <Button
                            variant="primary"
                            className="mb-1 me-1"
                            onClick={toggleCollapse2}
                            aria-expanded={collapseOpen2}
                            aria-controls="multiCollapseExample2"
                        >
                            Toggle second element
                        </Button>
                        <Button
                            variant="primary"
                            className="mb-1 me-1"
                            onClick={() => {
                                toggleCollapse1();
                                toggleCollapse2();
                            }}
                            aria-expanded={collapseOpen1 && collapseOpen2}
                            aria-controls="multiCollapseExample1 multiCollapseExample2"
                        >
                            Toggle both elements
                        </Button>
                        <Row>
                            <Col sm={6}>
                                <Collapse in={collapseOpen1}>
                                    <div className="collapse multi-collapse mt-2" id="multiCollapseExample1">
                                        <Card>
                                            <Card.Body>
                                                <p className="mb-0">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
                                                    keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                                </p>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Collapse>
                            </Col>
                            <Col sm={6}>
                                <Collapse in={collapseOpen2}>
                                    <div className="collapse multi-collapse mt-2" id="multiCollapseExample2">
                                        <Card>
                                            <Card.Body>
                                                <p className="mb-0">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
                                                    keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                                </p>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Collapse>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col sm={12}>
                    <Card>
                        <div className="card-header">
                            <h5>Accordion</h5>
                        </div>
                        <Card.Body className="pc-component">
                            <Accordion id="accordionExample" defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header id="headingOne">
                                        Accordion Item #1
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <strong>This is the first item&apos;s accordion body.</strong> It is hidden by default, until the
                                        collapse plugin adds the
                                        appropriate classes that we use to style each element. These classes control the overall
                                        appearance, as well as the showing
                                        and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our
                                        default variables. It&apos;s also
                                        worth noting that just about any HTML can go within the <code>.accordion-body</code>, though
                                        the transition does limit
                                        overflow.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header id="headingTwo">
                                        Accordion Item #2
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <strong>This is the second item&apos;s accordion body.</strong> It is hidden by default, until the
                                        collapse plugin adds the
                                        appropriate classes that we use to style each element. These classes control the overall
                                        appearance, as well as the showing
                                        and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our
                                        default variables. It&apos;s also
                                        worth noting that just about any HTML can go within the <code>.accordion-body</code>, though
                                        the transition does limit
                                        overflow.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header id="headingThree">
                                        Accordion Item #3
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <strong>This is the third item&apos;s accordion body.</strong> It is hidden by default, until the
                                        collapse plugin adds the
                                        appropriate classes that we use to style each element. These classes control the overall
                                        appearance, as well as the showing
                                        and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our
                                        default variables. It&apos;s also
                                        worth noting that just about any HTML can go within the <code>.accordion-body</code>, though
                                        the transition does limit
                                        overflow.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Card.Body>
                    </Card>

                    <h5 className="mt-5 mb-3">Accordion Flush</h5>
                    <hr />
                    <Card>
                        <div className="card-body pc-component">
                            <Accordion id="accordionFlushExample" defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header id="flush-headingOne">
                                        Accordion Item #1
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                        non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                        put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                                        farm-to-table, raw denim aesthetic synth nesciunt you probably haven&apos;t heard of them accusamus labore sustainable VHS.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header id="flush-headingTwo">
                                        Accordion Item #2
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                        terry richardson ad squid. 3 wolf moon officia aute,
                                        non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                                        wolf moon tempor, sunt aliqua
                                        put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                                        helvetica, craft beer labore
                                        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                                        Leggings occaecat craft beer
                                        farm-to-table, raw denim aesthetic synth nesciunt you probably haven&apos;t heard of them accusamus
                                        labore sustainable VHS.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header id="flush-headingThree">
                                        Accordion Item #3
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                        terry richardson ad squid. 3 wolf moon officia aute,
                                        non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                                        wolf moon tempor, sunt aliqua
                                        put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                                        helvetica, craft beer labore
                                        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                                        Leggings occaecat craft beer
                                        farm-to-table, raw denim aesthetic synth nesciunt you probably haven&apos;t heard of them accusamus
                                        labore sustainable VHS.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

BCCollapse.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

export default BCCollapse;
