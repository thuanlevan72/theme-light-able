import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useMobileSidebar } from "./MobileSidebar";

interface SectionTitleProps {
    title?: string;
    description?: string;
    link?: any;
}
const SectionTitle = ({ title, description, link }: SectionTitleProps) => {
    const { toggleOpen } = useMobileSidebar(); 
    return (
        <>
            <Row>
                <Col md={10} xxl={9} className="mb-4">
                    <Link
                        href="#"
                        className="d-inline-flex align-items-center d-xl-none btn btn-dark mb-3"
                        onClick={toggleOpen}
                    ><i className="ti ti-menu-2 me-2"></i> Explore Components
                    </Link>
                    <h2>{title}</h2>
                    <p className="text-muted">{description}</p>
                    <div>
                        <Link className="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank"
                            href={link}>
                            <i className="ti ti-external-link me-2"></i>
                            Reference
                        </Link>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default SectionTitle;