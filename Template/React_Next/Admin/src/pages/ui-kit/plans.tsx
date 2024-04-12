import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import React, { ReactElement } from "react";
import { Card, Col, Row } from "react-bootstrap";

const Plans = () => {
    return (
       <>
        <BreadcrumbItem mainTitle="Ui kit" subTitle="Plans"  />
        <Row>
        <Col sm={12}>
          <Row className="align-items-center justify-content-center mb-4">
            <div className="col-auto">
              <label htmlFor="swc-price" className="h4 mb-0">Annual</label>
            </div>
            <div className="col-auto">
              <div className="form-check form-switch p-0 m-0">
                <input className="form-check-input f-20 m-0 postion-relative" type="checkbox" role="switch" id="swc-price" />
              </div>
            </div>
            <div className="col-auto">
              <label htmlFor="swc-price" className="h4 mb-0">Monthly</label>
            </div>
          </Row>
          <Row>
            <Col md={6} xxl={3}>
              <Card className="price-card">
                <Card.Body className="price-head bg-light-primary">
                  <h5 className="text-primary">Lite</h5>
                  <h2 className="price-price text-primary">$0 <span>/month</span></h2>
                  <div className="price-icon bg-light-primary">
                    <i className="ph-duotone ph-rocket text-primary"></i>
                  </div>
                </Card.Body>
                <Card.Body>
                  <ul className="list-unstyled product-list">
                    <li className="enable"><i className="ph-duotone ph-check-circle"></i>Free domains</li>
                    <li className="enable"><i className="ph-duotone ph-check-circle"></i>CDN Integration</li>
                    <li className="enable"><i className="ph-duotone ph-check-circle"></i>Advanced Settings</li>
                    <li>100,000 unique users</li>
                    <li>2000 Items</li>
                    <li>API Access</li>
                    <li>Search Features</li>
                    <li>Editor personalization</li>
                    <li>Upload special sites</li>
                    <li>Advanced Features</li>
                  </ul>
                  <div className="d-grid">
                    <button className="btn btn-primary">Current Plan</button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} xxl={3}>
              <Card className="price-card">
                <Card.Body className="price-head bg-light-secondary">
                  <h5 className="text-secondary">Standard</h5>
                  <h2 className="price-price text-secondary">$9 <span>/month</span></h2>
                  <div className="price-icon bg-light-secondary">
                    <i className="ph-duotone ph-grains text-secondary"></i>
                  </div>
                </Card.Body>
                <Card.Body>
                  <ul className="list-unstyled product-list">
                    <li className="enable"><i className="ph-duotone ph-check-circle"></i>Free domains</li>
                    <li className="enable"><i className="ph-duotone ph-check-circle"></i>CDN Integration</li>
                    <li className="enable"><i className="ph-duotone ph-check-circle"></i>Advanced Settings</li>
                    <li className="enable"><i className="ph-duotone ph-check-circle"></i>100,000 unique users</li>
                    <li className="enable"><i className="ph-duotone ph-check-circle"></i>2000 Items</li>
                    <li>API Access</li>
                    <li>Search Features</li>
                    <li>Editor personalization</li>
                    <li>Upload special sites</li>
                    <li>Advanced Features</li>
                  </ul>
                  <div className="d-grid">
                    <button className="btn btn-outline-secondary">Upgrade Plan</button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} xxl={3}>
              <Card className="price-card">
                <Card.Body className="price-head bg-light-secondary">
                  <h5 className="text-secondary">Standard</h5>
                  <h2 className="price-price text-secondary">$36 <span>/month</span></h2>
                  <div className="price-icon bg-light-secondary">
                    <i className="ph-duotone ph-flower-lotus text-secondary"></i>
                  </div>
                </Card.Body>
                <Card.Body>
                  <ul className="list-unstyled product-list">
                    <li className="enable"><i className="ph-duotone ph-check-circle"></i>Free domains</li>
                    <li className="enable"><i className="ph-duotone ph-check-circle"></i>CDN Integration</li>
                    <li className="enable"><i className="ph-duotone ph-check-circle"></i>Advanced Settings</li>
                    <li className="enable"><i className="ph-duotone ph-check-circle"></i>100,000 unique users</li>
                    <li className="enable"><i className="ph-duotone ph-check-circle"></i>2000 Items</li>
                    <li className="enable"><i className="ph-duotone ph-check-circle"></i>API Access</li>
                    <li className="enable"><i className="ph-duotone ph-check-circle"></i>Search Features</li>
                    <li>Editor personalization</li>
                    <li>Upload special sites</li>
                    <li>Advanced Features</li>
                  </ul>
                  <div className="d-grid">
                    <button className="btn btn-outline-secondary">Upgrade Plan</button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} xxl={3}>
              <Card className="price-card">
                <Card.Body className="price-head bg-light-secondary">
                  <h5 className="text-secondary">ENTERPRISE</h5>
                  <h2 className="price-price text-secondary">$69 <span>/month</span></h2>
                  <div className="price-icon bg-light-secondary">
                    <i className="ph-duotone ph-buildings text-secondary"></i>
                  </div>
                </Card.Body>
                <Card.Body>
                  <ul className="list-unstyled product-list">
                    <li className="enable"><i className="ph-duotone ph-check-circle"></i>Free domains</li>
                    <li className="enable"><i className="ph-duotone ph-check-circle"></i>CDN Integration</li>
                    <li className="enable"><i className="ph-duotone ph-check-circle"></i>Advanced Settings</li>
                    <li className="enable"><i className="ph-duotone ph-check-circle"></i>100,000 unique users</li>
                    <li className="enable"><i className="ph-duotone ph-check-circle"></i>2000 Items</li>
                    <li className="enable"><i className="ph-duotone ph-check-circle"></i>API Access</li>
                    <li className="enable"><i className="ph-duotone ph-check-circle"></i>Search Features</li>
                    <li className="enable"><i className="ph-duotone ph-check-circle"></i>Editor personalization</li>
                    <li className="enable"><i className="ph-duotone ph-check-circle"></i>Upload special sites</li>
                    <li className="enable"><i className="ph-duotone ph-check-circle"></i>Advanced Features</li>
                  </ul>
                  <div className="d-grid">
                    <button className="btn btn-outline-secondary">Upgrade Plan</button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        </Row>
       </>
    )
}

Plans.getLayout = (page: ReactElement) => {
    return (
      <Layout>
        {page}
      </Layout>
    )
};


export default Plans