import SectionTitle from "@layout/SectionTitle";
import Layout from "@layout/index";
import React, { ReactElement } from "react";
import { Card, Col, Row } from "react-bootstrap";

const BCTypography = () => {
    return (
        <>
            <SectionTitle
                title="Typography"
                description="Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more.                "
                link="https://getbootstrap.com/docs/5.2/content/typography/"
            />

            <Row>
                <Col sm={12}>
                    <Card>
                        <div className="card-header">
                            <h5>Headings</h5>
                            <p><span className="badges">.h1</span> through .h6 classes are also available, for when you want to match
                                the font styling of a heading
                                but cannot use the associated HTML element.</p>
                        </div>
                        <Card.Body className="pc-component">
                            <h1>h1. Heading</h1>
                            <div className="clearfix"></div>
                            <h2>h2. Heading</h2>
                            <div className="clearfix"></div>
                            <h3>This is a H3</h3>
                            <div className="clearfix"></div>
                            <h4>This is a H4</h4>
                            <div className="clearfix"></div>
                            <h5>This is a H5</h5>
                            <div className="clearfix"></div>
                            <h6>This is a H6</h6>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12}>
                    <Card>
                        <div className="card-header">
                            <h5>Display Headings</h5>
                        </div>
                        <Card.Body className="pc-component">
                            <h1 className="display-1">Display 1</h1>
                            <h1 className="display-2">Display 2</h1>
                            <h1 className="display-3">Display 3</h1>
                            <h1 className="display-4">Display 4</h1>
                            <h1 className="display-5">Display 5</h1>
                            <h1 className="display-6">Display 6</h1>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <div className="card-header">
                            <h5>Inline Text Elements</h5>
                        </div>
                        <Card.Body className="pc-component">
                            <p className="lead m-t-0">Your title goes here</p>
                            You can use the mark tag to
                            <mark>highlight</mark> text.
                            <br />
                            <del>This line of text is meant to be treated as deleted text.</del>
                            <br />
                            <ins>This line of text is meant to be treated as an addition to the document.</ins>
                            <br />
                            <strong>rendered as bold text</strong>
                            <br />
                            <em>rendered as italicized text</em>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <div className="card-header">
                            <h5>Contextual Text Colors</h5>
                        </div>
                        <Card.Body className="pc-component">
                            <p className="text-muted mb-1"> Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh. </p>
                            <p className="text-primary mb-1"> Nullam id dolor id nibh ultricies vehicula ut id elit. </p>
                            <p className="text-success mb-1"> Duis mollis, est non commodo luctus, nisi erat porttitor ligula. </p>
                            <p className="text-info mb-1"> Maecenas sed diam eget risus varius blandit sit amet non magna. </p>
                            <p className="text-warning mb-1"> Etiam porta sem malesuada magna mollis euismod. </p>
                            <p className="text-danger mb-1"> Donec ullamcorper nulla non metus auctor fringilla. </p>
                            <p className="text-dark mb-1"> Nullam id dolor id nibh ultricies vehicula ut id elit. </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card>
                        <div className="card-header">
                            <h5>Unordered</h5>
                        </div>
                        <Card.Body className="pc-component">
                            <ul>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Consectetur adipiscing elit</li>
                                <li>Integer molestie lorem at massa</li>
                                <li>Facilisis in pretium nisl aliquet</li>
                                <li>Nulla volutpat aliquam velit
                                    <ul>
                                        <li>Phasellus iaculis neque</li>
                                        <li>Purus sodales ultricies</li>
                                        <li>Vestibulum laoreet porttitor sem</li>
                                        <li>Ac tristique libero volutpat at</li>
                                    </ul>
                                </li>
                                <li>Faucibus porta lacus fringilla vel</li>
                                <li>Aenean sit amet erat nunc</li>
                                <li>Eget porttitor lorem</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card>
                        <div className="card-header">
                            <h5>Ordered</h5>
                        </div>
                        <Card.Body className="pc-component">
                            <ol>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Consectetur adipiscing elit</li>
                                <li>Integer molestie lorem at massa</li>
                                <li>Facilisis in pretium nisl aliquet</li>
                                <li>Nulla volutpat aliquam velit
                                    <ul>
                                        <li>Phasellus iaculis neque</li>
                                        <li>Purus sodales ultricies</li>
                                        <li>Vestibulum laoreet porttitor sem</li>
                                        <li>Ac tristique libero volutpat at</li>
                                    </ul>
                                </li>
                                <li>Faucibus porta lacus fringilla vel</li>
                                <li>Aenean sit amet erat nunc</li>
                                <li>Eget porttitor lorem</li>
                            </ol>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12} lg={4}>
                    <Card>
                        <div className="card-header">
                            <h5>Unstyled</h5>
                        </div>
                        <Card.Body className="pc-component">
                            <ul className="list-unstyled">
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Integer molestie lorem at massa
                                    <ul>
                                        <li>Phasellus iaculis neque</li>
                                    </ul>
                                </li>
                                <li>Faucibus porta lacus fringilla vel</li>
                                <li>Eget porttitor lorem</li>
                            </ul>
                            <h5>Inline</h5>
                            <hr />
                            <ul className="list-inline m-b-0">
                                <li className="list-inline-item">Lorem ipsum</li>
                                <li className="list-inline-item">Phasellus iaculis</li>
                                <li className="list-inline-item">Nulla volutpat</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <div className="card-header">
                            <h5>Blockquotes</h5>
                        </div>
                        <Card.Body className="pc-component">
                            <p className="text-muted mb-1"> Your awesome text goes here. </p>
                            <blockquote className="blockquote">
                                <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                                    ante.</p>
                                <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite>
                                </footer>
                            </blockquote>
                            <p className="text-muted m-b-15 m-t-20"> Add <code>.text-end</code> for a blockquote with right-aligned
                                content. </p>
                            <blockquote className="blockquote text-end">
                                <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                                    ante.</p>
                                <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <div className="card-header">
                            <h5>Horizontal Description</h5>
                        </div>
                        <Card.Body className="pc-component">
                            <dl className="dl-horizontal row">
                                <dt className="col-sm-3">Description lists</dt>
                                <dd className="col-sm-9">A description list is perfect for defining terms.</dd>

                                <dt className="col-sm-3">Euismod</dt>
                                <dd className="col-sm-9">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.
                                </dd>
                                <dd className="col-sm-9">Donec id elit non mi porta gravida at eget metus.</dd>

                                <dt className="col-sm-3">Malesuada porta</dt>
                                <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

                                <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
                                <dd className="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                                    fermentum massa justo sit amet risus.</dd>
                            </dl>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

BCTypography.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

export default BCTypography;
