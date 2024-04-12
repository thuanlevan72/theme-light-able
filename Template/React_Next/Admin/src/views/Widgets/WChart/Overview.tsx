import React, { useState } from "react";
import { Card, Col, Dropdown, Nav, Tab } from "react-bootstrap";

import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const Overview = () => {

    const [activeTab, setActiveTab] = useState("daily");

    const handleTabClick = (tabKey : string) => {
      setActiveTab(tabKey);
    };

    const series1 = [
        {
           name: "This month",
          data: [30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65]
        },{
          name: "Last month",
          data: [ 50, 55, 45, 60, 50, 65, 30, 60, 40, 70, 50, 90]
        }
    ];

    var options_overview : any = {
        chart: {
          type: 'line',
          height: 230,
          toolbar: {
            show: false
          }
        },
        colors: ['#0d6efd','#748892'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 2
        },
        plotOptions: {
          bar: {
            columnWidth: '45%',
            borderRadius: 4
          }
        },
        grid: {
          strokeDashArray: 4
        },
        xaxis: {
          labels: {
            hideOverlappingLabels: true,
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        }
    };

    const series2 = [
        {
           name: "This month",
          data: [70, 50, 90, 50, 55, 45, 30, 60, 40,  60, 50, 65]
        },{
          name: "Last month",
          data: [ 50, 65, 30, 60, 40, 50, 55, 45, 60, 70, 50, 90]
        }
    ];

    var options_overview_2 : any = {
    chart: {
        type: 'line',
        height: 230,
        toolbar: {
        show: false
        }
    },
    colors: ['#0d6efd','#748892'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 2
    },
    plotOptions: {
        bar: {
        columnWidth: '45%',
        borderRadius: 4
        }
    },
    grid: {
        strokeDashArray: 4
    },
    xaxis: {
        labels: {
        hideOverlappingLabels: true,
        },
        axisBorder: {
        show: false
        },
        axisTicks: {
        show: false
        }
    }
    };
    return (
        <>
            <Col lg={6}>
                <Card>
                    <div className="card-header d-flex align-items-center justify-content-between">
                    <h5>Overview</h5>
                    <Dropdown>
                        <Dropdown.Toggle
                        as="a"
                        className="avtar avtar-xs btn-link-secondary arrow-none"
                        id="dropdown-menu"
                        >
                        <i className="material-icons-two-tone f-18">more_vert</i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu align="end">
                        <Dropdown.Item href="#">View</Dropdown.Item>
                        <Dropdown.Item href="#">Edit</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </div>

                    <Card.Body>
                        <div className="d-sm-flex align-items-center justify-content-between flex-wrap gap-2">
                            <div className="d-flex align-items-center mb-2 mb-sm-0">
                            <h3 className="mb-0 me-1">$ 82.99</h3>
                            <span className="badge bg-success">
                                <i className="ti ti-arrow-narrow-up"></i> 2.6%
                            </span>
                            </div>
                            <Nav variant="pills" className="nav-pills analytics-tab" id="myTab">
                            <Nav.Item>
                                <Nav.Link
                                onClick={() => handleTabClick("daily")}
                                active={activeTab === "daily"}
                                >
                                Daily
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link
                                onClick={() => handleTabClick("monthly")}
                                active={activeTab === "monthly"}
                                >
                                Monthly
                                </Nav.Link>
                            </Nav.Item>
                            </Nav>
                        </div>
                        {activeTab === "daily" && (
                            <div id="overview-chart-1">
                                 <ReactApexChart series={series1} options={options_overview} type="line"  height={230} />
                            </div>
                        )}
                        {activeTab === "monthly" && (
                            <div id="overview-chart-2">
                                <ReactApexChart series={series2} options={options_overview_2} type="line"  height={230} />
                            </div>
                        )}
                        </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default Overview;