import Image from 'next/image'
import React from 'react'

import counter from "@assets/images/landing/img-counter-bg.svg"
import Link from 'next/link'
import { Card, Col, Container, Row } from 'react-bootstrap'

const Numbers = () => {
  return (
    <React.Fragment>
        <section className="bg-white pt-0">
    <Container>
      <Row>
        <div className="col-12">
          <Card className="bg-dark counter-block mb-0 wow animate__fadeInUp" data-wow-delay="0.7s">
            <Image src={counter} alt="img" className="img-fluid img-counter-bg" />
            <div className="card-body p-4 p-md-5">
              <Row className="align-items-center">
                <Col lg={6} className=" my-3">
                  <span className="h1 text-white mb-3 d-block">Trusted by Envato Elite Author</span>
                 
                    <Link href="https://themeforest.net/user/phoenixcoded" className="btn btn-primary" target="_blank">Envato <i
                      className="ph-duotone ph-arrow-square-out"></i></Link>
                </Col>
                <Col lg={6} className="my-3">
                  <div className="row g-3 text-center">
                    <div className="col-4">
                      <span className="counter text-white">6.3K+</span>
                      <h4 className="f-w-400 mb-0 text-white text-opacity-50">Customers</h4>
                    </div>
                    <div className="col-4">
                      <span className="counter text-white">10+</span>
                      <h4 className="f-w-400 mb-0 text-white text-opacity-50">Year</h4>
                    </div>
                    <div className="col-4">
                      <span className="counter text-white">4.8/5</span>
                      <h4 className="f-w-400 mb-0 text-white text-opacity-50">Ratings</h4>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Card>
        </div>
      </Row>
    </Container>
  </section>
    </React.Fragment>
  )
}

export default Numbers