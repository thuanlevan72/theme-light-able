import SectionTitle from "@layout/SectionTitle";
import Layout from "@layout/index";
import React, { ReactElement } from "react";
import { Card, Col, Row } from "react-bootstrap";

const ac_treeview = () => {
    return (
        <React.Fragment>
            <Row>
                <SectionTitle
                    title="Tree View"
                    description="Standalone tree view library"
                    link="alerts"
                />
            </Row>
            <Row>
                <Col sm={12}>
                    <Card>
                        <div className="card-header">
                            <h5>HTML Demo</h5>
                        </div>
                        <Card.Body>
                            <div id="tree-demo">
                                <ul className="vtree">
                                    <li className="vtree-leaf vtree-has-children" data-vtree-id="a">
                                        <span className="vtree-toggle"></span>
                                        <a className="vtree-leaf-label">Label A</a>
                                        <ul className="vtree-subtree">
                                            <li className="vtree-leaf vtree-selected vtree-has-children" data-vtree-id="a.a"
                                            ><span className="vtree-toggle"></span>
                                                <a className="vtree-leaf-label">Label A.A</a>
                                                <ul className="vtree-subtree">

                                                    <li className="vtree-leaf closed" data-vtree-id="0.12323823208527607">
                                                        <span className="vtree-toggle"></span>
                                                        <a className="vtree-leaf-label">Label A.A.A</a>
                                                    </li>
                                                    <li className="vtree-leaf closed" data-vtree-id="0.4096606855317739">
                                                        <span className="vtree-toggle"></span>
                                                        <a className="vtree-leaf-label">Label A.A.B</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="vtree-leaf closed vtree-has-children" data-vtree-id="b">
                                        <span className="vtree-toggle"></span>
                                        <a className="vtree-leaf-label">Label B</a>
                                        <ul className="vtree-subtree">
                                            <li className="vtree-leaf closed" data-vtree-id="0.2011757217468677">
                                                <span className="vtree-toggle"></span>
                                                <a className="vtree-leaf-label">Label B.A</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <p id="tree-msg"></p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
}

ac_treeview.getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>;
};

export default ac_treeview;