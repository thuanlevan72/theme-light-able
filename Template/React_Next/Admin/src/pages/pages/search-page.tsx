import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import React, { ReactElement, useState } from "react";
import { Row, Col, Card } from 'react-bootstrap';
const data = [
    { id: 1, name: "Australia", keyword: 61424 },
    { id: 2, name: "India", keyword: 76975 },
    { id: 3, name: "Russia", keyword: 97586 },
    { id: 4, name: "London", keyword: 19675 },
    { id: 5, name: "Dubai", keyword: 60614 },
    { id: 1, name: "Australia", keyword: 61424 },
    { id: 2, name: "India", keyword: 76975 },
    { id: 3, name: "Russia", keyword: 97586 },
    { id: 4, name: "London", keyword: 19675 },
    { id: 5, name: "Dubai", keyword: 60614 },
    { id: 1, name: "Australia", keyword: 61424 },
    { id: 2, name: "India", keyword: 76975 },
    { id: 3, name: "Russia", keyword: 97586 },
    { id: 4, name: "London", keyword: 19675 },
    { id: 5, name: "Dubai", keyword: 60614 },
    { id: 1, name: "Australia", keyword: 61424 },
    { id: 2, name: "India", keyword: 76975 },
    { id: 3, name: "Russia", keyword: 97586 },
    { id: 4, name: "London", keyword: 19675 },
    { id: 5, name: "Dubai", keyword: 60614 },
    { id: 1, name: "Australia", keyword: 61424 },
    { id: 2, name: "India", keyword: 76975 },
    { id: 3, name: "Russia", keyword: 97586 },
    { id: 4, name: "London", keyword: 19675 },
    { id: 5, name: "Dubai", keyword: 60614 },
    { id: 1, name: "Australia", keyword: 61424 },
    { id: 2, name: "India", keyword: 76975 },
    { id: 3, name: "Russia", keyword: 97586 },
    { id: 4, name: "London", keyword: 19675 },
    { id: 5, name: "Dubai", keyword: 60614 },
]

const SearchPage = () => {
    const [searchpageData, setSearchPageData] = useState(data);

    const handleSearch = (element: any) => {
        // Implement your search logic here, e.g., filtering the data based on the search term and selected option.
        // For now, we'll just log the search term and selected option.
        //i.name.toString() === element.toString()
        if (element) {
            setSearchPageData(data?.filter((i: any) => i.name.toLowerCase() === element.toLowerCase()))
        } else {
            setSearchPageData(data)
        }
    };

    return (
        <>
            <BreadcrumbItem mainTitle="Pages" subTitle="Search Page" />
            <Row>
                <Col sm={12}>
                    <Card>
                        <div className="card-header">
                            <Row className="g-3 align-items-center">
                                <Col>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="ti ti-search"></i></span>
                                        <input type="text" className="form-control" placeholder="Search a Keyword" onChange={(event: any) => handleSearch(event.target.value)} />
                                        <select className="form-select" id="inputGroupSelect04" defaultValue="Choose...">
                                            <option disabled>Choose...</option>
                                            <option value="1">India</option>
                                            <option value="2">UK</option>
                                            <option value="3">USA</option>
                                        </select>
                                    </div>
                                </Col>
                                <div className="col-sm-auto">
                                    <div className="d-grid d-sm-inline-block">
                                        <button className="btn btn-primary" type="button">Search</button>
                                    </div>
                                </div>
                            </Row>
                        </div>
                        <Card.Body>
                            <Row className="align-items-center justify-content-between">
                                <div className="col-sm-auto">
                                    <h5>Recently Searched</h5>
                                </div>
                                <div className="col-sm-auto">
                                    <select className="form-select" defaultValue="Filter">
                                        <option>Filter </option>
                                        <option>Hits: High To Low</option>
                                        <option>Hits: Low To High</option>
                                        <option>Popularity</option>
                                        <option>Fresh Arrivals</option>
                                    </select>
                                </div>
                            </Row>
                            <hr className="my-4" />
                            <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
                                {
                                    (searchpageData || [])?.map((item: any, key: number) => (
                                        <Col key={key}>
                                            <Card className="p-3 d-flex flex-row align-items-center justify-content-between shadow-none border border-secondary-subtle mb-0">
                                                <h6 className="mb-0">{item.name}</h6>
                                                <p className="text-sm text-muted mb-0"><i className="ti ti-world me-1"></i>{item.keyword}</p>
                                            </Card>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

SearchPage.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};


export default SearchPage