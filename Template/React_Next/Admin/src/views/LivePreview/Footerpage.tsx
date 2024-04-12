import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import darklogo from "@assets/images/logo-dark.svg"
import Link from 'next/link'

const Footerpage = () => {
  return (
    <React.Fragment>
        <footer className="footer">
    <div className="footer-top">
      <Container>
        <Row className="gy-4">
          <div className="col-md-4 wow animate__fadeInUp" data-wow-delay="0.2s">
            <Image src={darklogo} alt="image" className="img-fluid mb-3" />
            <p className="mb-0">Since 2014, over 6.3K developers have placed their trust in Phoenixcoded&apos;s Templates. Light Able is managed by their experienced team of professionals.</p>
          </div>
          <Col md={8}>
            <Row className="gy-4">
              <Col sm={4} className="wow animate__fadeInUp" data-wow-delay="0.6s">
                <h5 className="mb-sm-4 mb-2">Company</h5>
                <ul className="list-unstyled footer-link mb-0">
                  <li><Link href="https://themeforest.net/user/phoenixcoded" target="_blank">Profile</Link></li>
                  <li><Link href="https://themeforest.net/user/phoenixcoded/portfolio" target="_blank">Portfolio</Link></li>
                  <li><Link href="https://themeforest.net/user/phoenixcoded/followers" target="_blank">Follow Us</Link></li>
                  <li><Link href="https://phoenixcoded.net" target="_blank">Website</Link></li>
                </ul>
              </Col>
              <Col sm={4} className="wow animate__fadeInUp" data-wow-delay="0.8s">
                <h5 className="mb-sm-4 mb-2">Help & Support</h5>
                <ul className="list-unstyled footer-link mb-0">
                  <li><Link href="https://pcoded.gitbook.io/light-able" target="_blank">Documentation</Link></li>
                  <li><Link href="https://phoenixcoded.authordesk.app/" target="_blank">Support</Link></li>
                  <li><Link href="https://themeforest.net/user/phoenixcoded#contact" target="_blank">Reach Us</Link></li>
                </ul>
              </Col>
              <Col sm={4} className="wow animate__fadeInUp" data-wow-delay="1s">
                <h5 className="mb-sm-4 mb-2">Useful Resources</h5>
                <ul className="list-unstyled footer-link mb-0">
                  <li><Link href="https://themeforest.net/page/item_support_policy" target="_blank">Support Policy</Link></li>
                  <li><Link href="https://themeforest.net/licenses/standard" target="_blank">License</Link></li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="footer-bottom">
      <Container>
        <Row className="align-items-center">
          <div className="col my-1 wow animate__fadeInUp" data-wow-delay="0.4s">
            <p className="m-0">Made with &#9829; by Team <Link href="https://themeforest.net/user/phoenixcoded" target="_blank"> Phoenixcoded</Link></p>
          </div>
          <div className="col-auto my-1">
            <ul className="list-inline footer-sos-link mb-0">
              <li className="list-inline-item wow animate__fadeInUp" data-wow-delay="0.4s">
                <Link href="https://fb.com/phoenixcoded">
                  <i className="ph-duotone ph-facebook-logo f-20"></i>
                </Link>
              </li>
            </ul>
          </div>
        </Row>
      </Container>
    </div>
  </footer>
    </React.Fragment>
  )
}

export default Footerpage