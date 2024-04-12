import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { Card, Button, Row, Col } from 'react-bootstrap';
import Dropzone from "react-dropzone";

const FormDropzone = () => {
    const [selectedFiles, setselectedFiles] = useState<any>([]);

    function handleAcceptedFiles(files: any) {
        files.map((file: any) =>
            Object.assign(file, {
                preview: URL.createObjectURL(file),
            })
        );
        setselectedFiles(files);
    }

    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>File Upload</h5>
                </Card.Header>
                <Card.Body>
                    <Dropzone
                        onDrop={acceptedFiles => {
                            handleAcceptedFiles(acceptedFiles);
                        }}
                    >
                        {({ getRootProps }) => (
                            <div className="dropzone dz-clickable text-center ">
                                <div className="dz-message needsclick"
                                    {...getRootProps()}
                                >
                                    <div className="mb-3">
                                        <i className="display-4 text-muted ri-upload-cloud-2-fill" />
                                    </div>
                                    <p className="my-4">Drop files here to upload</p>
                                </div>
                            </div>
                        )}
                    </Dropzone>
                    <div className="list-unstyled mb-0" id="file-previews">
                        {selectedFiles.map((f: any, i: number) => {
                            return (
                                <Card
                                    className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                    key={i + "-file"}
                                >
                                    <div className="p-2">
                                        <Row className="align-items-center">
                                            <Col className="col-auto">
                                                <Image
                                                    height="80"
                                                    width="100"
                                                    className="avatar-sm rounded bg-light"
                                                    alt={f.name}
                                                    src={f.preview}
                                                />
                                            </Col>
                                            <Col>
                                                <Link href="#" className="text-muted font-weight-bold" >
                                                    {f.name}
                                                </Link>
                                                <p className="mb-0">
                                                    <strong>{f.formattedSize}</strong>
                                                </p>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                    <div className="text-center m-t-20">
                        <Button variant="primary">Upload Now</Button>
                    </div>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default FormDropzone;