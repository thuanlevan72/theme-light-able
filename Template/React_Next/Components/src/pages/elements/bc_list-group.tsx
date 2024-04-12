import SectionTitle from "@layout/SectionTitle";
import Layout from "@layout/index";
import React, { ReactElement } from "react";
import { Col, Card, Carousel, Row, ListGroup, Button, Badge, Tab, Nav } from "react-bootstrap";

const BCListGroup = () => {
    return (
        <>
            <SectionTitle
                title="List group"
                description="List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within."
                link="https://react-bootstrap.netlify.app/docs/components/list-group"
            />
            <Row>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <h5 className="mb-2">Basic example</h5>
                            <small className="m-0">The most basic list group is an unordered list with list items and the proper classes</small>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup>
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <h5 className="mb-2">Active items</h5>
                            <small className="m-0">
                                Add <code>.active</code> to a <code>.list-group-item</code> to indicate the current active selection.
                            </small>
                        </Card.Header>
                        <Card.Body className="pc-component">
                            <ListGroup>
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item active aria-current="true">Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <h5 className="mb-2">Disabled items</h5>
                            <small className="m-0">
                                Add <code>.disabled</code> to a <code>.list-group-item</code> to make it <em>appear</em> disabled. Note that some
                                elements with <code>.disabled</code> will also require custom JavaScript to fully disable their click events (e.g.,
                                links).
                            </small>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup>
                                <ListGroup.Item disabled aria-disabled="true">
                                    Cras justo odio ( disabled )
                                </ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item disabled aria-disabled="true">
                                    Morbi leo risus ( disabled )
                                </ListGroup.Item>
                                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <h5 className="mb-2">List groups [ Links ]</h5>
                            <small className="m-0">
                                Use <code>&lt;a&gt;</code>s or <code>&lt;button&gt;</code>s to create <em>actionable</em> list group items with hover, disabled, and active states by adding <code>.list-group-item-action</code>. We separate these pseudo-classes to ensure list groups made of non-interactive elements (like <code>&lt;li&gt;</code>s or <code>&lt;div&gt;</code>s) don’t provide a click or tap affordance.
                            </small>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup>
                                <a href="#" className="list-group-item list-group-item-action">Cras justo odio</a>
                                <a href="#!" className="list-group-item list-group-item-action active" aria-current="true">Dapibus ac facilisis in</a>
                                <a href="#!" className="list-group-item list-group-item-action">Morbi leo risus</a>
                                <a href="#!" className="list-group-item list-group-item-action">Porta ac consectetur ac</a>
                                <a href="#!" className="list-group-item list-group-item-action disabled">Vestibulum at eros (disabled)</a>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <h5 className="mb-2">List groups [ Buttons ]</h5>
                            <small className="m-0">
                                With <code>&lt;button&gt;</code>s, you can also make use of the
                                <code>disabled</code> attribute instead of the
                                <code>.disabled</code> class. Sadly, <code>&lt;a&gt;</code>s don’t support the disabled attribute.
                            </small>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup>
                                <Button variant="light" className="list-group-item list-group-item-action">
                                    Cras justo odio
                                </Button>
                                <Button variant="light" className="list-group-item list-group-item-action active" aria-current="true">Dapibus ac facilisis in</Button>
                                <Button variant="light" className="list-group-item list-group-item-action">Morbi leo risus</Button>
                                <Button variant="light" className="list-group-item list-group-item-action">Porta ac consectetur ac</Button>
                                <Button variant="light" className="list-group-item list-group-item-action" disabled>Vestibulum at eros</Button>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <h5 className="mb-2">Flush</h5>
                            <small className="m-0">
                                Add <code>.list-group-flush</code> to remove some borders and rounded corners to render list group items edge-to-edge
                                in a parent container (e.g., cards).
                            </small>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <div className="col-md-12">
                    <Card>
                        <Card.Header>
                            <h5 className="mb-2">Numbered</h5>
                            <small className="m-0">
                                Add the <code>.list-group-numbered</code> modifier class (and optionally use an <code>&lt;ol&gt;</code> element) to
                                opt into numbered list group items.
                            </small>
                        </Card.Header>
                        <Card.Body>
                            <div className="row g-4">
                                <Col md={6}>
                                    <ol className="list-group list-group-numbered">
                                        <li className="list-group-item">Cras justo odio</li>
                                        <li className="list-group-item">Cras justo odio</li>
                                        <li className="list-group-item">Cras justo odio</li>
                                    </ol>
                                </Col>
                                <Col md={6}>
                                    <ol className="list-group list-group-numbered">
                                        <li className="list-group-item d-flex justify-content-between align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="fw-bold">Subheading</div>
                                                Cras justo odio
                                            </div>
                                            <Badge bg="primary" className="rounded-pill">14</Badge>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="fw-bold">Subheading</div>
                                                Cras justo odio
                                            </div>
                                            <Badge bg="primary" className="rounded-pill">14</Badge>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="fw-bold">Subheading</div>
                                                Cras justo odio
                                            </div>
                                            <Badge bg="primary" className="rounded-pill">14</Badge>
                                        </li>
                                    </ol>
                                </Col>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <Col md={12}>
                    <Card>
                        <Card.Header>
                            <h5 className="mb-2">Horizontal</h5>
                            <small className="m-0">
                                Add <code>.list-group-horizontal</code> to change the layout of list group items from vertical to horizontal across
                                all breakpoints. Alternatively, choose a responsive variant <code>.list-group-horizontal-sm | md | lg | xl | xxl</code> to
                                make a list group horizontal starting at that breakpoint’s <code>min-width</code>. Currently
                                <strong>horizontal list groups cannot be combined with flush list groups.</strong>
                            </small>
                        </Card.Header>
                        <Card.Body>
                            <div className="row g-4">
                                <div className="col-12">
                                    <h6>list group horizontal</h6>
                                    <hr />
                                    <ListGroup horizontal>
                                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                    </ListGroup>
                                </div>
                                <div className="col-12">
                                    <h6>list group horizontal small (sm)</h6>
                                    <hr />
                                    <ListGroup horizontal="sm">
                                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                    </ListGroup>
                                </div>
                                <div className="col-12">
                                    <h6>list group horizontal medium (md)</h6>
                                    <hr />
                                    <ListGroup horizontal="md">
                                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                    </ListGroup>
                                </div>
                                <div className="col-12">
                                    <h6>list group horizontal large (lg)</h6>
                                    <hr />
                                    <ListGroup horizontal="lg">
                                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                    </ListGroup>
                                </div>
                                <div className="col-12">
                                    <h6>list group horizontal extra large (xl)</h6>
                                    <hr />
                                    <ListGroup horizontal="xl">
                                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                    </ListGroup>
                                </div>
                                <div className="col-12">
                                    <h6>list group horizontal double extra large (xxl)</h6>
                                    <hr />
                                    <ListGroup horizontal="xxl">
                                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <h5 className="mb-2">Contextual classes</h5>
                            <small className="m-0">Use contextual classes to style list items with a stateful background and color.</small>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item variant="primary">A simple primary list group item</ListGroup.Item>
                                <ListGroup.Item variant="secondary">A simple secondary list group item</ListGroup.Item>
                                <ListGroup.Item variant="success">A simple success list group item</ListGroup.Item>
                                <ListGroup.Item variant="danger">A simple danger list group item</ListGroup.Item>
                                <ListGroup.Item variant="warning">A simple warning list group item</ListGroup.Item>
                                <ListGroup.Item variant="info">A simple info list group item</ListGroup.Item>
                                <ListGroup.Item variant="light">A simple light list group item</ListGroup.Item>
                                <ListGroup.Item variant="dark">A simple dark list group item</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <h5 className="mb-2">Contextual classes [ links ]</h5>
                            <small className="m-0">
                                Contextual classes also work with <code>.list-group-item-action</code>. Note the addition of the hover styles here
                                not present in the previous example. Also supported is the <code>.active</code> state; apply it to indicate an active
                                selection on a contextual list group item.
                            </small>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup>
                                <ListGroup.Item action href="#">Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item action variant="primary" href="#">A simple primary list group item</ListGroup.Item>
                                <ListGroup.Item action variant="secondary" href="#">A simple secondary list group item</ListGroup.Item>
                                <ListGroup.Item action variant="success" href="#">A simple success list group item</ListGroup.Item>
                                <ListGroup.Item action variant="danger" href="#">A simple danger list group item</ListGroup.Item>
                                <ListGroup.Item action variant="warning" href="#">A simple warning list group item</ListGroup.Item>
                                <ListGroup.Item action variant="info" href="#">A simple info list group item</ListGroup.Item>
                                <ListGroup.Item action variant="light" href="#">A simple light list group item</ListGroup.Item>
                                <ListGroup.Item action variant="dark" href="#">A simple dark list group item</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card>
                        <Card.Header>
                            <h5 className="mb-2">With badges</h5>
                            <small className="m-0">Add badges to any list group item to show unread counts, activity, and more</small>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup>
                                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                    Cras justo odio
                                    <span className="badge bg-primary rounded-pill">14</span>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                    Dapibus ac facilisis in
                                    <span className="badge bg-primary rounded-pill">2</span>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                    Morbi leo risus
                                    <span className="badge bg-primary rounded-pill">1</span>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card>
                        <Card.Header>
                            <h5 className="mb-2">Custom content</h5>
                            <small className="m-0">Add nearly any HTML within, even for linked list groups like the one below</small>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup>
                                <ListGroup.Item action href="#" className="active" aria-current="true">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1 text-white">List group item heading</h5>
                                        <small>3 days ago</small>
                                    </div>
                                    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                    <small>Donec id elit non mi porta.</small>
                                </ListGroup.Item>
                                <ListGroup.Item action href="#">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">List group item heading</h5>
                                        <small className="text-muted">3 days ago</small>
                                    </div>
                                    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                    <small className="text-muted">Donec id elit non mi porta.</small>
                                </ListGroup.Item>
                                <ListGroup.Item action href="#">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">List group item heading</h5>
                                        <small className="text-muted">3 days ago</small>
                                    </div>
                                    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                    <small className="text-muted">Donec id elit non mi porta.</small>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <h5 className="mb-2">List group Checkboxes</h5>
                            <small className="m-0">Place Bootstrap’s checkboxes and radios within list group items and customize as needed</small>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup>
                                <label className="list-group-item">
                                    <input className="form-check-input me-1" type="checkbox" value="" />
                                    Cras justo odio
                                </label>
                                <label className="list-group-item">
                                    <input className="form-check-input me-1" type="checkbox" value="" />
                                    Dapibus ac facilisis in
                                </label>
                                <label className="list-group-item">
                                    <input className="form-check-input me-1" type="checkbox" value="" />
                                    Morbi leo risus
                                </label>
                                <label className="list-group-item">
                                    <input className="form-check-input me-1" type="checkbox" value="" />
                                    Porta ac consectetur ac
                                </label>
                                <label className="list-group-item">
                                    <input className="form-check-input me-1" type="checkbox" value="" />
                                    Vestibulum at eros
                                </label>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <h5 className="mb-2">List group radios</h5>
                            <small className="m-0">Place Bootstrap’s checkboxes and radios within list group items and customize as needed</small>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup>
                                <label className="list-group-item">
                                    <input className="form-check-input me-1" type="radio" value="" name="list_radio" />
                                    Cras justo odio
                                </label>
                                <label className="list-group-item">
                                    <input className="form-check-input me-1" type="radio" value="" name="list_radio" />
                                    Dapibus ac facilisis in
                                </label>
                                <label className="list-group-item">
                                    <input className="form-check-input me-1" type="radio" value="" name="list_radio" />
                                    Morbi leo risus
                                </label>
                                <label className="list-group-item">
                                    <input className="form-check-input me-1" type="radio" value="" name="list_radio" />
                                    Porta ac consectetur ac
                                </label>
                                <label className="list-group-item">
                                    <input className="form-check-input me-1" type="radio" value="" name="list_radio" />
                                    Vestibulum at eros
                                </label>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12}>
                    <Card>
                        <Card.Header>
                            <h5 className="mb-2">JavaScript behavior</h5>
                            <small className="m-0">
                                Use the tab JavaScript plugin—include it individually or through the compiled <code>bootstrap.js</code> file—to
                                extend our list group to create tabbable panes of local content.
                            </small>
                        </Card.Header>
                        <Card.Body>

                            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#list-home">
                                <Row>
                                    <Col sm={4}>
                                        <ListGroup>
                                            <ListGroup.Item action href="#list-home">
                                                Home
                                            </ListGroup.Item>
                                            <ListGroup.Item action href="#list-profile">
                                                Profile
                                            </ListGroup.Item>
                                            <ListGroup.Item action href="#list-messages">
                                                Messages
                                            </ListGroup.Item>
                                            <ListGroup.Item action href="#list-settings">
                                                Settings
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Col>
                                    <Col sm={8}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="#list-home">
                                                Velit aute mollit ipsum ad dolor consectetur nulla officia culpa adipisicing exercitation fugiat tempor.
                                                Voluptate deserunt sit sunt nisi aliqua fugiat proident ea ut. Mollit voluptate reprehenderit occaecat nisi ad
                                                non minim tempor sunt voluptate consectetur exercitation id ut nulla. Ea et fugiat aliquip nostrud sunt
                                                incididunt consectetur culpa aliquip eiusmod dolor. Anim ad Lorem aliqua in cupidatat nisi enim eu nostrud do
                                                aliquip veniam minim.
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="#list-profile">
                                                Cupidatat quis ad sint excepteur laborum in esse qui. Et excepteur consectetur ex nisi eu do cillum ad
                                                laborum. Mollit et eu officia dolore sunt Lorem culpa qui commodo velit ex amet id ex. Officia anim incididunt
                                                laboris deserunt anim aute dolor incididunt veniam aute dolore do exercitation. Dolor nisi culpa ex ad irure
                                                in elit eu dolore. Ad laboris ipsum reprehenderit irure non commodo enim culpa commodo veniam incididunt
                                                veniam ad.
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="#list-messages">
                                                Ut ut do pariatur aliquip aliqua aliquip exercitation do nostrud commodo reprehenderit aute ipsum voluptate.
                                                Irure Lorem et laboris nostrud amet cupidatat cupidatat anim do ut velit mollit consequat enim tempor.
                                                Consectetur est minim nostrud nostrud consectetur irure labore voluptate irure. Ipsum id Lorem sit sint
                                                voluptate est pariatur eu ad cupidatat et deserunt culpa sit eiusmod deserunt. Consectetur et fugiat anim do
                                                eiusmod aliquip nulla laborum elit adipisicing pariatur cillum.
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="#list-settings">
                                                Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt ullamco ex elit nostrud ut
                                                dolore nisi officia magna sit occaecat laboris sunt dolor. Nisi eu minim cillum occaecat aute est cupidatat
                                                aliqua labore aute occaecat ea aliquip sunt amet. Aute mollit dolor ut exercitation irure commodo non amet
                                                consectetur quis amet culpa. Quis ullamco nisi amet qui aute irure eu. Magna labore dolor quis ex labore id
                                                nostrud deserunt dolor eiusmod eu pariatur culpa mollit in irure.
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

BCListGroup.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

export default BCListGroup;
