import SectionTitle from '@layout/SectionTitle';
import Layout from '@layout/index';
import Image from 'next/image';
import React, { ReactElement, useState, useRef } from 'react'

// Import Images
import sl1 from '../../assets/images/light-box/sl1.jpg'
import sl2 from '../../assets/images/light-box/sl2.jpg'
import sl3 from '../../assets/images/light-box/sl3.jpg'
import sl4 from '../../assets/images/light-box/sl4.jpg'
import sl5 from '../../assets/images/light-box/sl5.jpg'
import sl6 from '../../assets/images/light-box/sl6.jpg'
import l1 from '../../assets/images/light-box/l1.jpg'
import l2 from '../../assets/images/light-box/l2.jpg'
import l3 from '../../assets/images/light-box/l3.jpg'
import l4 from '../../assets/images/light-box/l4.jpg'
import l5 from '../../assets/images/light-box/l5.jpg'
import l6 from '../../assets/images/light-box/l6.jpg'
import { Card, CardBody, CardHeader, Col, Container, Modal, Row } from 'react-bootstrap';

const ACLightbox = () => {

    const [imgStates, setImgStates] = useState([false, false, false, false, false, false]);

    const images = [l1, l2, l3, l4, l5, l6]; // Replace sl1, sl2, ... with your image URLs
    const images1 = [sl1, sl2, sl3, sl4, sl5, sl6]; // Replace sl1, sl2, ... with your image URLs
    const lightboxLabels = ['l1', 'l2', 'l3', 'l4', 'l5', 'l6'];

    const toggleImageModal = (index: any) => {
        const updatedImgStates = [...imgStates];
        updatedImgStates[index] = !updatedImgStates[index];
        setImgStates(updatedImgStates);
    };

    return (
        <Container>
            <Row>
                <Col xl={9}>
                    <Row>
                        <SectionTitle
                            title="Lightbox"
                            description="Bootstrap-datepicker provides a flexible datepicker widget in the Bootstrap style."
                            link="https://react-bootstrap.netlify.app/docs/components/modal"
                        />
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Card>
                                <CardHeader>
                                    <h5>light box</h5>
                                </CardHeader>
                                <CardBody>
                                    <p> Add this code <code>data-lightbox=&quot;example-set&quot;</code> to see road trip gallery in lightbox popup.</p>
                                    <Row className="text-center">
                                        {images1.map((image, index) => (
                                            <Col key={index} xl={2} lg={3} sm={4} xs={12}>
                                                <a data-lightbox={lightboxLabels[index]} onClick={() => toggleImageModal(index)}>
                                                    <Image src={image} className="img-fluid m-b-10" alt="" />
                                                </a>
                                            </Col>
                                        ))}
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    {images.map((image, index) => (
                        <Modal key={index} show={imgStates[index]} centered size="lg" onHide={() => toggleImageModal(index)} className="fade modal-lightbox" id="lightboxModal" aria-hidden="true">
                            <div className="modal-content">
                                <button type="button" onClick={() => toggleImageModal(index)} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                <div className="modal-body">
                                    {/* <Image src={l1} alt="images" className="modal-image img-fluid" /> */}
                                    <Image src={image} alt="images"  className="modal-image img-fluid" />
                                </div>
                            </div>
                        </Modal>
                        // <Modal
                        //     key={index}
                        //     show={imgStates[index]}
                        //     centered
                        //     size="lg"
                        //     onHide={() => toggleImageModal(index)}
                        //     className="modal-lightbox"
                        //     id={`lightboxModal${index + 1}`}
                        //     aria-hidden="true"
                        // >
                        //     <div className="modal-content">
                        //     <button type="button" onClick={() => toggleImageModal(index)} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        //     <div className="modal-body">
                        //         <Image src={image} alt={`images-${index}`} className="modal-image img-fluid" />
                        //         </div>
                        //     </div>
                        // </Modal>
                    ))}
                </Col>
            </Row>
        </Container>
    )
}

ACLightbox.getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>;
};

export default ACLightbox