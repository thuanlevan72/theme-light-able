import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import Image from "next/image";
import Link from "next/link";
import React, { ReactElement, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Dropzone from "react-dropzone";

const Settings = () => {
  const [selectedFiles, setselectedFiles] = useState([]);
  function handleAcceptedFiles(files: any) {
    files.map((file: any) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setselectedFiles(files);
  }

  /* Formats the size */
  function formatBytes(bytes: any, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }


  const [selectedFiles1, setselectedFiles1] = useState([]);
  function handleAcceptedFiles1(files: any) {
    files.map((file: any) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes1(file.size),
      })
    );
    setselectedFiles1(files);
  }

  /* Formats the size */
  function formatBytes1(bytes: any, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }
  return (
    <>
      <BreadcrumbItem mainTitle="Ui kit" subTitle="Settings" />
      <Row>
        <Col sm={12} className="col-sm-12">
          <Card>
            <div className="card-header">
              <h5>Site setting</h5>
            </div>
            <Card.Body>
              <Row className="form-group">
                <label className="col-form-label col-sm-3 text-sm-end">Site name</label>
                <Col lg={6} sm={7}>
                  <input type="text" className="form-control" placeholder="Enter site name" />
                </Col>
              </Row>
              <Row className="form-group">
                <label className="col-form-label col-sm-3 text-sm-end">Unique ID</label>
                <Col lg={6} sm={7}>
                  <input type="text" className="form-control" placeholder="Enter unique id" />
                </Col>
              </Row>
              <Row className="form-group">
                <label className="col-form-label col-sm-3 text-sm-end">Site Url</label>
                <Col lg={6} sm={7}>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Enter site url" />
                    <button className="btn btn-primary" type="button"><i className="ti ti-copy align-middle"></i> Copy</button>
                  </div>
                </Col>
              </Row>
              <Row className="form-group">
                <label className="col-form-label col-sm-3 text-sm-end">Affiliate ID</label>
                <Col lg={6} sm={7}>
                  <input type="text" className="form-control" placeholder="Enter affiliate id" />
                </Col>
              </Row>
              <Row className="form-group">
                <label className="col-form-label col-sm-3 text-sm-end">Favicon
                  <span className="link-secondary" data-bs-toggle="tooltip" data-bs-html="true" data-bs-title='<span className="mb-2 d-block">Upload a 32 x 32 pixels PNG, JPG or SVG to display in the browser tabs during the website experience.</span><span className="d-block">This element is going to enable your website visitors to get an idea of the content or brand of your site</span>'>
                    <i className="ph-duotone ph-question ms-1"></i>
                  </span>
                </label>
                <Col lg={6} sm={7}>
                  <Dropzone
                    onDrop={acceptedFiles => {
                      handleAcceptedFiles(acceptedFiles);
                    }}
                  >
                    {({ getRootProps }) => (
                      <div className="dropzone dz-clickable">
                        <div className="dz-message needsclick"
                          {...getRootProps()}
                        >
                          <div className="p-4">
                            <h6 className="text-muted">Drop files here to upload.</h6>
                          </div>
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
                  <Link href="#" className="link-primary text-sm">Need help?</Link>
                </Col>
              </Row>
              <Row className="form-group">
                <label className="col-form-label col-sm-3 text-sm-end">Webclip
                  <span className="link-secondary" data-bs-toggle="tooltip" data-bs-html="true" data-bs-title='<span className="mb-2 d-block">Upload a 32 x 32 pixels PNG, JPG or SVG to display in the browser tabs during the website experience.</span><span className="d-block">This element is going to enable your website visitors to get an idea of the content or brand of your site</span>'>
                    <i className="ph-duotone ph-question ms-1"></i>
                  </span>
                </label>
                <Col lg={6} sm={7}>
                  <Dropzone
                    onDrop={acceptedFiles => {
                      handleAcceptedFiles1(acceptedFiles);
                    }}
                  >
                    {({ getRootProps }) => (
                      <div className="dropzone dz-clickable">
                        <div className="dz-message needsclick"
                          {...getRootProps()}
                        >
                          <div className="p-4">
                            <h6 className="text-muted">Drop files here to upload.</h6>
                          </div>
                        </div>
                      </div>
                    )}
                  </Dropzone>
                  <div className="list-unstyled mb-0" id="file-previews">
                    {selectedFiles1.map((f: any, i: number) => {
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
                  <Link href="#" className="link-primary text-smin">Need help?</Link>
                </Col>
              </Row>
              <div className="form-group row mb-0">
                <span className="col-form-label col-sm-3 text-sm-end"></span>
                <Col lg={6} sm={7}>
                  <button className="btn btn-primary me-2">Apply Change</button>
                  <button className="btn btn-outline-secondary">Cancel</button>
                </Col>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

Settings.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
};


export default Settings