import Image from "next/image";
import React from "react";
import { Card, Col } from "react-bootstrap";

interface WidgetstProps {
    widgetData: Array<object>;
}

const Widgets: React.FC<WidgetstProps> = ({ widgetData }) => {
    return (
        <>
            {(widgetData || []).map((item: any, key: number) => (
                <Col md={4} sm={6} key={key}>
                    <Card className={item.id === 3 ? "statistics-card-1 overflow-hidden bg-brand-color-3" : "statistics-card-1 overflow-hidden"}>
                        <Card.Body>
                            <Image src={item.cardImg} alt="img" width={100} className="img-fluid img-bg" />
                            <h5 className={item.id === 3 ? "text-white mb-4" : "mb-4"}>{item.title}</h5>
                            <div className="d-flex align-items-center mt-3">
                                <h3
                                    className={item.id === 3 ? "text-white f-w-300 d-flex align-items-center m-b-0" : "f-w-300 d-flex align-items-center m-b-0"}>
                                    ${item.price}</h3>
                                {item.percentage && (
                                    <span className={"badge bg-light-" + item.bagdeColor + " ms-2"}>{item.percentage}%</span>
                                )}
                            </div>
                            <p className={item.id === 3 ? "text-white text-opacity-75 mb-2 text-sm mt-3" : "text-muted mb-2 text-sm mt-3"}>
                                {item.description}</p>
                            {item.id === 3 ?
                                <div className="progress bg-white bg-opacity-10" style={{ height: "7px" }}>
                                    <div
                                        className="progress-bar bg-white"
                                        role="progressbar"
                                        style={{ width: "75%" }}
                                    ></div>
                                </div>
                                :
                                <div className="progress" style={{ height: "7px" }}>
                                    <div
                                        className="progress-bar bg-brand-color-3"
                                        role="progressbar"
                                        style={{ width: "75%" }}
                                    ></div>
                                </div>
                            }

                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </>
    );
};

export default Widgets;
