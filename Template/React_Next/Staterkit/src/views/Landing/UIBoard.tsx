import Image from "next/image";
import React from "react";

// img
import dotImgBg from "@assets/images/landing/img-dot-bg.png";
import imgBoard from "@assets/images/landing/img-board.jpg";

const UIBoard = () => {
    return (
        <React.Fragment>
            <section className="bg-white board-section">
                <Image src={dotImgBg} alt="img" className="img-fluid img-dots-bg" />
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-md-8 col-xl-6">
                            <h2 className="wow animate__fadeInUp section-title" data-wow-delay="0.2s">The most powerful Light able UI Board
                            </h2>
                            <p className="mt-lg-4 mt-2 mb-4 mb-md-5 wow animate__fadeInUp" data-wow-delay="0.4s">Lorem Ipsum is simply dummy
                                text of
                                the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since
                                the 1500s.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="bard-block">
                                <div className="board-color-option card">
                                    <div className="form-check form-check-inline board-color-checkbox mb-0 bg-primary">
                                        <input className="form-check-input" type="radio" name="product_color" defaultChecked />
                                        <i className="ph-duotone ph-eyedropper-sample"></i>
                                    </div>
                                    <div className="form-check form-check-inline board-color-checkbox mb-0 bg-secondary">
                                        <input className="form-check-input" type="radio" name="product_color" />
                                        <i className="ph-duotone ph-eyedropper-sample"></i>
                                    </div>
                                    <div className="form-check form-check-inline board-color-checkbox mb-0 bg-success">
                                        <input className="form-check-input" type="radio" name="product_color" />
                                        <i className="ph-duotone ph-eyedropper-sample"></i>
                                    </div>
                                    <div className="form-check form-check-inline board-color-checkbox mb-0 bg-danger">
                                        <input className="form-check-input" type="radio" name="product_color" />
                                        <i className="ph-duotone ph-eyedropper-sample"></i>
                                    </div>
                                    <div className="form-check form-check-inline board-color-checkbox mb-0 bg-info">
                                        <input className="form-check-input" type="radio" name="product_color" />
                                        <i className="ph-duotone ph-eyedropper-sample"></i>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-11 col-sm-9 wow animate__fadeInUp text-center" data-wow-delay="0.4s">
                                        <Image src={imgBoard} alt="img" className="img-fluid rounded border" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default UIBoard;