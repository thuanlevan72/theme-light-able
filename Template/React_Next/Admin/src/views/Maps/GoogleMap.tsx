import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const mapStyles = {
    width: '518px',
    height: '400px',
};
const LoadingContainer = () => <div>Loading...</div>

const GoogleMap = (props: any) => {
    return (
        <React.Fragment>
            <Row>
                <Col md={6} sm={12}>
                    <Card>
                        <Card.Header>
                            <h5>Markers</h5>
                        </Card.Header>
                        <Card.Body>
                            <div id="world-map-markers" className="set-map jvm-container" style={{ height: " 400px", backgroundColor: "transparent" }}>
                                <Map
                                    google={props.google}
                                    // zoom={8}
                                    style={mapStyles}
                                    initialCenter={{ lat: 34.134117, lng: -118.321495 }}
                                />
                                {/* <Marker position={{ lat: 48.00, lng: -122.00 }} />
                                    <Marker position={{ lat: 34.134117, lng: -118.321495 }} />
                                    <Marker position={{ lat: 32.995049, lng: -111.536324 }} />
                                    <Marker position={{ lat: 37.383064, lng: -109.071236 }} />
                                    <Marker position={{ lat: 39.877586, lng: -79.640617 }} /> */}
                                {/* </Map> */}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} sm={12}>
                    <Card>
                        <Card.Header>
                            <h5>Overlays</h5>
                        </Card.Header>
                        <Card.Body >
                            <div id="world-map-markers" className="set-map jvm-container" style={{ height: " 400px", backgroundColor: "transparent" }}>
                                <Map
                                    google={props.google}
                                    // zoom={8}
                                    style={mapStyles}
                                    initialCenter={{ lat: 54.5260, lng: 15.2551 }}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={6} sm={12}>
                    <Card >
                        <Card.Header>
                            <h5>Street View Panoramas</h5>
                        </Card.Header>
                        <Card.Body>
                            <div id="world-map-markers" className="set-map jvm-container" style={{ height: " 400px", backgroundColor: "transparent" }}>
                                <Map
                                    google={props.google}
                                    // zoom={8}
                                    style={mapStyles}
                                    initialCenter={{ lat: 8.7832, lng: 34.5085 }}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} sm={12}>
                    <Card>
                        <Card.Header>
                            <h5>Map Types</h5>
                        </Card.Header>

                        <div className="card-body">
                            <div id="world-map-markers" className="set-map jvm-container" style={{ height: " 400px", backgroundColor: "transparent" }}>
                                <Map
                                    google={props.google}
                                    // zoom={8}
                                    style={mapStyles}
                                    initialCenter={{ lat: 19.0760, lng: 72.8777 }}
                                />
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default (
    GoogleApiWrapper({
        apiKey: "AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE",
        LoadingContainer: LoadingContainer,
        // v: "3",
    })(GoogleMap)
)