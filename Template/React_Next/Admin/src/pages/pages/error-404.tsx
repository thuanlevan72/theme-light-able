import React, { ReactElement } from "react";
import NonLayout from "@layout/NonLayout";
import { Card } from "react-bootstrap";

//import images
import ImgError404 from "@assets/images/pages/img-error-404.png";
import Link from "next/link";
import Image from "next/image";
import FooterBlock from "@layout/FooterBlock";

const Error404 = () => {
    return (
        <>
            <div className="auth-main v1">
                <div className="auth-wrapper">
                <div className="auth-form">
                    <div className="error-card">
                    <Card.Body>
                        <div className="error-image-block">
                        <Image className="img-fluid" src={ImgError404} alt="img" />
                        </div>
                        <div className="text-center">
                        <h1 className="mt-2">Oops! Something Went wrong</h1>
                        <p className="mt-2 mb-4 text-muted f-20">We couldn’t find the page you were looking for. Why not try back to the Homepage.</p>
                        <Link className="btn btn-primary d-inline-flex align-items-center mb-3" 
                        href="/"><i className="ph-duotone ph-house me-2"></i> Back to Home</Link>              
                        </div>
                    </Card.Body>
                    </div>
                </div>

                {/* FooterBlock */}
                <FooterBlock />
                
                </div>
            </div>
        </>
    )
}

Error404.getLayout = (page: ReactElement) => {
    return (
        <NonLayout>
            {page}
        </NonLayout>
    )
};

export default Error404;