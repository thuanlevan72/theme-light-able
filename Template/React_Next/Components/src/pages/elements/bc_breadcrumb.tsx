import SectionTitle from "@layout/SectionTitle";
import Layout from "@layout/index";
import React, { ReactElement } from "react";
import { Col, Card, Button } from "react-bootstrap";

const BCBreadcrumb = () => {
    return (
        <>
            <SectionTitle
                title="Breadcrumb"
                description="Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS."
                link="https://react-bootstrap.netlify.app/docs/components/breadcrumb"
            />

            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-header">
                            <h5>Breadcrumb</h5>
                        </div>
                        <div className="card-body pc-component">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-default-icon">
                                    <li className="breadcrumb-item active" aria-current="page">Home</li>
                                </ol>
                            </nav>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-default-icon">
                                    <li className="breadcrumb-item"><a href="#!">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Library</li>
                                </ol>
                            </nav>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-default-icon">
                                    <li className="breadcrumb-item"><a href="#!">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#!">Library</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Data</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-header">
                            <h5>Breadcrumb Icon</h5>
                        </div>
                        <div className="card-body pc-component">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-default-icon">
                                    <li className="breadcrumb-item active" aria-current="page"><i className="ti ti-home-2"></i></li>
                                </ol>
                            </nav>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-default-icon">
                                    <li className="breadcrumb-item"><a href="#!"> <i className="ti ti-home-2 fs-6"></i></a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">Library</li>
                                </ol>
                            </nav>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-default-icon">
                                    <li className="breadcrumb-item"><a href="#!"><i className="ti ti-home-2"></i></a></li>
                                    <li className="breadcrumb-item"><a href="#!">Library</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Data</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-header">
                            <h5>Breadcrumb Dividers [ character ]</h5>
                        </div>
                        <div className="card-body pc-component">
                            <nav aria-label="breadcrumb"
                            //   style={{"--bs-breadcrumb-divider: '>'"}}
                            >
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item active" aria-current="page"><i className="ti ti-home-2"></i></li>
                                </ol>
                            </nav>
                            <nav aria-label="breadcrumb"
                            //   style={{"--bs-breadcrumb-divider: '>'"}}
                            >
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#!"> <i className="ti ti-home-2"></i></a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">Library</li>
                                </ol>
                            </nav>
                            <nav aria-label="breadcrumb"
                            //   style={{"--bs-breadcrumb-divider: '>'"}}
                            >
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#!"><i className="ti ti-home-2"></i></a></li>
                                    <li className="breadcrumb-item"><a href="#!">Library</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Data</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-header">
                            <h5>Breadcrumb Dividers [ embedded SVG icon ]</h5>
                        </div>
                        <div className="card-body pc-component">
                            <nav
                            //   style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb"
                            >
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item active" aria-current="page"><i className="ti ti-home-2"></i></li>
                                </ol>
                            </nav>
                            <nav
                            //   style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb"
                            >
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#!"> <i className="ti ti-home-2"></i></a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">Library</li>
                                </ol>
                            </nav>
                            <nav
                            //   style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb" 
                            >
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#!"><i className="ti ti-home-2"></i></a></li>
                                    <li className="breadcrumb-item"><a href="#!">Library</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Data</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

BCBreadcrumb.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

export default BCBreadcrumb;
