import React, { useState } from "react";
import { Tab } from "react-bootstrap";

// img
import product2 from "@assets/images/application/img-prod-2.jpg";
import product3 from "@assets/images/application/img-prod-3.jpg";
import product4 from "@assets/images/application/img-prod-4.jpg";
import Image from "next/image";
import Link from "next/link";
import ProcesstoCheckout from "./ProcesstoCheckout";

const CartDetails = () => {
    const [count, setCount] = useState<number>(0);
    const [count1, setCount1] = useState<number>(0);
    const [count2, setCount2] = useState<number>(0);

    return (
        <React.Fragment>
            <Tab.Pane eventKey="ecomtab-1" id="ecomtab-1" role="tabpanel" aria-labelledby="ecomtab-tab-1">
                <div className="row gy-4">
                    <div className="col-xl-8">
                        <div className="card">
                            <div className="card-header">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <div className="progress" style={{ height: "6px" }}>
                                            <div className="progress-bar bg-primary" style={{ width: "33%" }}></div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <p className="mb-0 h6">Step 1</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body border-bottom">
                                <h5 className="mb-0">Cart Item <span className="ms-2 f-14 px-2 badge bg-light-secondary rounded-pill">3</span></h5>
                            </div>
                            <div className="card-body p-0 table-body">
                                <div className="table-responsive">
                                    <table className="table mb-0" id="pc-dt-simple">
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th className="text-end">Price</th>
                                                <th className="text-center">Quantity</th>
                                                <th className="text-end">Total</th>
                                                <th className="text-end"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="media align-items-center">
                                                        <Image src={product2} alt="image" width={50} className="bg-light rounded" />
                                                        <div className="media-body ms-3">
                                                            <h5 className="mb-1">Apple MacBook Pro</h5>
                                                            <p className="text-sm text-muted mb-0">Dark Red</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end">
                                                    <h5 className="mb-0">$100.00</h5>
                                                    <span className="text-sm text-muted text-decoration-line-through">$129.99</span>
                                                </td>
                                                <td className="text-center">
                                                    <div className="btn-group btn-group-sm mb-2 border" role="group">
                                                        <button type="button"
                                                            onClick={() => count > 0 && setCount(count - 1)}
                                                            className="btn btn-link-secondary"><i
                                                                className="ti ti-minus"></i></button>
                                                        <input className="wid-35 text-center border-0 m-0 form-control rounded-0 shadow-none"
                                                            type="text" id="number" value={count} />
                                                        <button type="button"
                                                            onClick={() => setCount(count + 1)}
                                                            className="btn btn-link-secondary"><i
                                                                className="ti ti-plus"></i></button>
                                                    </div>
                                                </td>
                                                <td className="text-end">
                                                    <h5 className="mb-0">$100.00</h5>
                                                </td>
                                                <td className="text-end">
                                                    <Link href="#" className="avtar avtar-s btn-link-danger btn-pc-default">
                                                        <i className="ti ti-trash f-18"></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="media align-items-center">
                                                        <Image src={product3} alt="image" width={50} className="bg-light rounded" />
                                                        <div className="media-body ms-3">
                                                            <h5 className="mb-1">Apple MacBook Pro</h5>
                                                            <p className="text-sm text-muted mb-0">Dark Red</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end">
                                                    <h5 className="mb-0">$100.00</h5>
                                                    <span className="text-sm text-muted text-decoration-line-through">$129.99</span>
                                                </td>
                                                <td className="text-center">
                                                    <div className="btn-group btn-group-sm mb-2 border" role="group">
                                                        <button type="button"
                                                            onClick={() => count1 > 0 && setCount1(count1 - 1)}
                                                            className="btn btn-link-secondary"><i
                                                                className="ti ti-minus"></i></button>
                                                        <input className="wid-35 text-center border-0 m-0 form-control rounded-0 shadow-none"
                                                            type="text" id="number2" value={count1} />
                                                        <button type="button"
                                                            onClick={() => setCount1(count1 + 1)}
                                                            className="btn btn-link-secondary"><i
                                                                className="ti ti-plus"></i></button>
                                                    </div>
                                                </td>
                                                <td className="text-end">
                                                    <h5 className="mb-0">$100.00</h5>
                                                </td>
                                                <td className="text-end">
                                                    <Link href="#" className="avtar avtar-s btn-link-danger btn-pc-default">
                                                        <i className="ti ti-trash f-18"></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="media align-items-center">
                                                        <Image src={product4} alt="image" width={50} className="bg-light rounded" />
                                                        <div className="media-body ms-3">
                                                            <h5 className="mb-1">Apple MacBook Pro</h5>
                                                            <p className="text-sm text-muted mb-0">Dark Red</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end">
                                                    <h5 className="mb-0">$100.00</h5>
                                                    <span className="text-sm text-muted text-decoration-line-through">$129.99</span>
                                                </td>
                                                <td className="text-center">
                                                    <div className="btn-group btn-group-sm mb-2 border" role="group">
                                                        <button type="button"
                                                            onClick={() => count2 > 0 && setCount2(count2 - 1)}
                                                            className="btn btn-link-secondary"><i
                                                                className="ti ti-minus"></i></button>
                                                        <input className="wid-35 text-center border-0 m-0 form-control rounded-0 shadow-none"
                                                            type="text" id="number1" value={count2} />
                                                        <button type="button"
                                                            onClick={() => setCount2(count2 + 1)}
                                                            className="btn btn-link-secondary"><i
                                                                className="ti ti-plus"></i></button>
                                                    </div>
                                                </td>
                                                <td className="text-end">
                                                    <h5 className="mb-0">$100.00</h5>
                                                </td>
                                                <td className="text-end">
                                                    <Link href="#" className="avtar avtar-s btn-link-danger btn-pc-default">
                                                        <i className="ti ti-trash f-18"></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="text-end">
                            <Link href="../application/ecom_product" className="btn btn-link-secondary d-inline-flex align-items-center">
                                <i className="ti ti-chevron-left me-2"></i> Back to Shopping</Link>
                        </div>
                    </div>
                    <ProcesstoCheckout isCardSummary={false} isPayment={false} />
                </div>
            </Tab.Pane>
        </React.Fragment>
    );
}

export default CartDetails;