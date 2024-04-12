import Image from "next/image";
import React from "react";
import { Tab } from "react-bootstrap";

// img
import payCard from "@assets/images/application/img-pay-card-bg.png";
import mastercard from "@assets/images/application/mastercard.png";
import visa from "@assets/images/application/visa.png";
import card from "@assets/images/application/card.png";
import paypal from "@assets/images/application/paypal.png";
import ProcesstoCheckout from "./ProcesstoCheckout";

const Payment = () => {
    return (
        <React.Fragment>
            <Tab.Pane eventKey="ecomtab-3" id="ecomtab-3" role="tabpanel" aria-labelledby="ecomtab-tab-3">
                <div className="card-body">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="card">
                                <div className="card-header">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <div className="progress" style={{ height: "6px" }}>
                                                <div className="progress-bar bg-primary" style={{ width: "99%" }}></div>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <p className="mb-0 h6">Step 3</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body border-bottom">
                                    <h5 className="mb-0">Payment</h5>
                                </div>
                                <div className="card-body">
                                    <div className="address-check border rounded p-3">
                                        <div className="form-check">
                                            <input type="radio" name="radio11" className="form-check-input input-primary" defaultChecked />
                                            <label className="form-check-label d-block">
                                                <span className="row align-items-center justify-content-between">
                                                    <span className="col-6">
                                                        <span className="h6 mb-0 d-block">Ian Carpenter <small className="text-muted">(Home)</small>
                                                            <span className="badge bg-primary rounded-pill">Default</span></span>
                                                    </span>
                                                    <span className="col-6 text-end">
                                                        <button className="btn btn-primary"><i className="ti ti-edit-circle align-text-bottom me-1"></i>Change</button>
                                                    </span>
                                                </span>
                                                <span className="text-muted address-details">1754 Ureate Path, 695 Newga View, Seporcus,
                                                    Rhode Island, Belgium - SA5 5BO</span>
                                                <span className="row align-items-center justify-content-between">
                                                    <span className="col-6">
                                                        <span className="text-muted mb-0">+91 1234567890</span>
                                                    </span>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="row g-2">
                                        <div className="col-md-6">
                                            <div className="address-check border rounded">
                                                <div className="form-check paycard"
                                                    style={{ backgroundImage: `url(${payCard.src})` }}>
                                                    <input type="radio" name="payradio1" className="form-check-input input-primary"
                                                        id="paycard-check-1" defaultChecked />
                                                    <label className="form-check-label d-block" htmlFor="paycard-check-1">
                                                        <span className="card-body p-3 d-block">
                                                            <span className="d-flex align-items-start justify-content-between">
                                                                <span className="h5">John Smith</span>
                                                                <Image src={mastercard} alt="images" className="img-fluid" />
                                                            </span>
                                                            <span className="row g-2 align-items-center justify-content-between mt-2 mb-5">
                                                                <span className="col-auto">
                                                                    <span className="h5 mb-0">****</span>
                                                                </span>
                                                                <span className="col-auto">
                                                                    <span className="h5 mb-0">****</span>
                                                                </span>
                                                                <span className="col-auto">
                                                                    <span className="h5 mb-0">****</span>
                                                                </span>
                                                                <span className="col-auto">
                                                                    <span className="h5 mb-0">2599</span>
                                                                </span>
                                                            </span>
                                                            <span className="row  align-items-center justify-content-between">
                                                                <span className="col-auto">
                                                                    <span className="mb-0"><span className="text-sm opacity-50">CVV</span> 085</span>
                                                                </span>
                                                                <span className="col-auto">
                                                                    <span className="mb-0"><span className="text-sm opacity-50">Expire Date</span> 05/24</span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="address-check border rounded">
                                                <div className="form-check paycard"
                                                    style={{ backgroundImage: `url(${payCard.src})` }}>
                                                    <input type="radio" name="payradio1" className="form-check-input input-primary"
                                                        id="paycard-check-2" />
                                                    <label className="form-check-label d-block" htmlFor="paycard-check-2">
                                                        <span className="card-body p-3 d-block">
                                                            <span className="d-flex align-items-start justify-content-between">
                                                                <span className="h5">Jennifer winget</span>
                                                                <Image src={visa} alt="images" className="img-fluid" />
                                                            </span>
                                                            <span className="row g-2 align-items-center justify-content-between mt-2 mb-5">
                                                                <span className="col-auto">
                                                                    <span className="h5 mb-0">****</span>
                                                                </span>
                                                                <span className="col-auto">
                                                                    <span className="h5 mb-0">****</span>
                                                                </span>
                                                                <span className="col-auto">
                                                                    <span className="h5 mb-0">****</span>
                                                                </span>
                                                                <span className="col-auto">
                                                                    <span className="h5 mb-0">2599</span>
                                                                </span>
                                                            </span>
                                                            <span className="row  align-items-center justify-content-between">
                                                                <span className="col-auto">
                                                                    <span className="mb-0"><span className="text-sm opacity-50">CVV</span> 085</span>
                                                                </span>
                                                                <span className="col-auto">
                                                                    <span className="mb-0"><span className="text-sm opacity-50">Expire Date</span> 05/24</span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="divider"><span>OR</span></div>
                                    <div className="row">
                                        <div className="col-xl-12 col-xxl-4">
                                            <div className="address-check border rounded">
                                                <div className="form-check">
                                                    <input type="radio" name="payoptradio1" className="form-check-input input-primary"
                                                        id="payopn-check-1" defaultChecked />
                                                    <label className="form-check-label d-block" htmlFor="payopn-check-1">
                                                        <span className="card-body p-3 d-block">
                                                            <span className="h5 mb-3 d-block">Credit Card</span>
                                                            <span className="d-flex align-items-center">
                                                                <span className="f-12 badge bg-success me-3">5% OFF</span>
                                                                <Image src={card} alt="img" className="img-fluid ms-1" />
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-xxl-4">
                                            <div className="address-check border rounded">
                                                <div className="form-check">
                                                    <input type="radio" name="payoptradio1" className="form-check-input input-primary"
                                                        id="payopn-check-2" />
                                                    <label className="form-check-label d-block" htmlFor="payopn-check-2">
                                                        <span className="card-body p-3 d-block">
                                                            <span className="h5 mb-3 d-block">Pay with PayPal</span>
                                                            <span className="d-flex align-items-center">
                                                                <span className="f-12 badge bg-success me-3">5% OFF</span>
                                                                <Image src={paypal} alt="img"
                                                                    className="img-fluid ms-1" />
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-xxl-4">
                                            <div className="address-check border rounded">
                                                <div className="form-check">
                                                    <input type="radio" name="payoptradio1" className="form-check-input input-primary" id="payopn-check-3" />
                                                    <label className="form-check-label d-block" htmlFor="payopn-check-3">
                                                        <span className="card-body p-3 d-block">
                                                            <span className="d-flex align-items-center">
                                                                <span>
                                                                    <span className="h5 mb-3 d-block">Cash on Delivery</span>
                                                                    <span className="f-12 text-muted">When you use this payment</span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-12">
                                            <div className="form-group row align-items-center g-2">
                                                <label className="col-lg-4 col-form-label py-0">Card Number :<small
                                                    className="text-muted d-block">Enter
                                                    the 16 digit card number on the card</small></label>
                                                <div className="col-lg-8">
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group row align-items-center g-2">
                                                <label className="col-lg-4 col-form-label py-0">Expiry Date :<small
                                                    className="text-muted d-block">Enter
                                                    the expiration on the card</small></label>
                                                <div className="col-lg-8">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <input type="text" className="form-control" placeholder="Month" />
                                                        </div>
                                                        <div className="col-6">
                                                            <input type="text" className="form-control" placeholder="Year" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row align-items-center g-2">
                                                <label className="col-lg-4 col-form-label py-0">CVV Number :<small className="text-muted d-block">Enter
                                                    the 3 or 4 digit number on the card</small></label>
                                                <div className="col-lg-8">
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group row align-items-center g-2">
                                                <label className="col-lg-4 col-form-label py-0">Password :<small className="text-muted d-block">Enter
                                                    your dynamic password</small></label>
                                                <div className="col-lg-8">
                                                    <input type="password" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="text-end btn-page mb-0 mt-4">
                                                <button className="btn btn-outline-secondary">Cancel</button>
                                                <button className="btn btn-primary">Save & Continue</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end mb-3">
                                <button className="btn btn-link-primary"><i
                                    className="ti ti-arrow-narrow-left align-text-bottom me-2"></i>Back to Shipping
                                    Information</button>
                            </div>
                        </div>
                        <ProcesstoCheckout isCardSummary={true} isPayment={true} />
                    </div>
                </div>
            </Tab.Pane>
        </React.Fragment>
    );
}

export default Payment;