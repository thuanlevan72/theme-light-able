import React, { ReactElement } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import Clipboard from "@views/Forms/Clipboard";

const form2_clipboard = () => {
    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Clipboard" />
            <Row>
                <Col sm={12}>
                    <Card>
                        <Card.Body>
                            <Form onSubmit={(event: any) => event.preventDefault()}>
                                <Clipboard />
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

form2_clipboard.getLayout = (page: ReactElement) => {

    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default form2_clipboard;