import SectionTitle from "@layout/SectionTitle";
import Layout from "@layout/index";
import React, { ReactElement, useState } from "react";
import { Col, Card, Button, Row, Offcanvas, Table, Dropdown, Pagination } from "react-bootstrap";

const BCPagination = () => {

    return (
        <>
            <SectionTitle
                title="Pagination"
                description="Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages."
                link="https://react-bootstrap.netlify.app/docs/components/pagination"
            />

            <Row>
                <Col sm={12}>
                    <Card>
                        <div className="card-header">
                            <h5>Pagination</h5>
                        </div>
                        <Card.Body className="pc-component">
                            <nav aria-label="Page navigation example">
                                <Pagination>
                                    <Pagination.Prev>Previous</Pagination.Prev>
                                    <Pagination.Item href="#">1</Pagination.Item>
                                    <Pagination.Item href="#">2</Pagination.Item>
                                    <Pagination.Item href="#">3</Pagination.Item>
                                    <Pagination.Prev>Next</Pagination.Prev>
                                </Pagination>
                            </nav>

                            <h5 className="mt-4 mb-0">Working with Icons</h5>
                            <hr className="mt-2" />

                            <nav aria-label="Page navigation example">
                                <Pagination>
                                    <Pagination.Prev>
                                        <span aria-hidden="true">&laquo;</span>
                                        <span className="sr-only">Previous</span>
                                    </Pagination.Prev>
                                    <Pagination.Item href="#">1</Pagination.Item>
                                    <Pagination.Item href="#">2</Pagination.Item>
                                    <Pagination.Item href="#">3</Pagination.Item>
                                    <Pagination.Next>
                                        <span aria-hidden="true">&raquo;</span>
                                        <span className="sr-only">Next</span>
                                    </Pagination.Next>
                                </Pagination>
                            </nav>

                            <h5 className="mt-4 mb-0">Disabled and Active States</h5>
                            <hr className="mt-2" />

                            <nav aria-label="...">
                                <Pagination>
                                    <Pagination.Prev disabled>Previous</Pagination.Prev>
                                    <Pagination.Item href="#">1</Pagination.Item>
                                    <Pagination.Item active>2 <span className="sr-only">(current)</span></Pagination.Item>
                                    <Pagination.Item href="#">3</Pagination.Item>
                                    <Pagination.Next>Next</Pagination.Next>
                                </Pagination>
                            </nav>

                            <h5 className="mt-4 mb-0">Sizing</h5>
                            <hr className="mt-2" />

                            <nav className="mb-3" aria-label="...">
                                <Pagination size="lg">
                                    <Pagination.Item disabled>1</Pagination.Item>
                                    <Pagination.Item href="#">2</Pagination.Item>
                                    <Pagination.Item href="#">3</Pagination.Item>
                                </Pagination>
                            </nav>

                            <nav aria-label="...">
                                <Pagination size="sm">
                                    <Pagination.Item disabled>1</Pagination.Item>
                                    <Pagination.Item href="#">2</Pagination.Item>
                                    <Pagination.Item href="#">3</Pagination.Item>
                                </Pagination>
                            </nav>

                            <h5 className="mt-4 mb-0">Alignment</h5>
                            <hr className="mt-2" />

                            <nav aria-label="Page navigation example">
                                <Pagination className="justify-content-center">
                                    <Pagination.Prev disabled>Previous</Pagination.Prev>
                                    <Pagination.Item href="#">1</Pagination.Item>
                                    <Pagination.Item href="#">2</Pagination.Item>
                                    <Pagination.Item href="#">3</Pagination.Item>
                                    <Pagination.Next>Next</Pagination.Next>
                                </Pagination>
                            </nav>

                            <nav aria-label="Page navigation example">
                                <Pagination className="justify-content-end">
                                    <Pagination.Prev disabled>Previous</Pagination.Prev>
                                    <Pagination.Item href="#">1</Pagination.Item>
                                    <Pagination.Item href="#">2</Pagination.Item>
                                    <Pagination.Item href="#">3</Pagination.Item>
                                    <Pagination.Next>Next</Pagination.Next>
                                </Pagination>
                            </nav>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

BCPagination.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

export default BCPagination;
