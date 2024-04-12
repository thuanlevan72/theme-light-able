import React, { useRef } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Layout from "@layout/index";
import BreadcrumbItem from "@common/BreadcrumbItem";

const Loading = () => {
  const elemRef = useRef<HTMLDivElement | null>(null);
  let fadeInInterval: NodeJS.Timeout | null = null;
  let fadeOutInterval: NodeJS.Timeout | null = null;

  const handleLoaderClick = () => {
    const control = (document as Document).querySelector<HTMLButtonElement>('#show-loader');
    const elem = elemRef.current;

    if (control && elem && !elem.classList.contains('is-active')) {
      if (fadeInInterval) clearInterval(fadeInInterval);
      if (fadeOutInterval) clearInterval(fadeOutInterval);

      const fadeIn = (timing: number) => {
        let newValue = 0;
        elem.style.display = 'flex';
        elem.style.opacity = '0';
        fadeInInterval = setInterval(() => {
          if (newValue < 1) {
            newValue += 0.01;
          } else if (newValue === 1) {
            clearInterval(fadeInInterval!);
          }
          elem.style.opacity = newValue.toFixed(2);
        }, timing);
      };

      const fadeOut = (timing: number) => {
        let newValue = 1;
        elem.style.opacity = '1';
        fadeOutInterval = setInterval(() => {
          if (newValue > 0) {
            newValue -= 0.01;
          } else if (newValue < 0) {
            elem.style.opacity = '0';
            elem.style.display = 'none';
            if (fadeOutInterval) clearInterval(fadeOutInterval);
          }
          elem.style.opacity = newValue.toFixed(2);
        }, timing);
      };

      fadeIn(3);
      setTimeout(() => {
        if (fadeInInterval) clearInterval(fadeInInterval);
        if (fadeOutInterval) clearInterval(fadeOutInterval);
        fadeOut(3);
      }, 4000);
    }
  };

  return (
    <>
     <BreadcrumbItem mainTitle="Ui kit" subTitle="Loading" />
      <Row>
        <Col sm={12}>
          <Card>
            <Card.Body>
              <div className="form-group row mb-0">
                <label className="col-form-label col-lg-3 col-sm-12 text-lg-end">Loader</label>
                <Col lg={6} md={9} sm={12}>
                  <button id="show-loader" className="btn btn-primary" onClick={handleLoaderClick}>Loading</button>
                  <p className="text-muted mt-3 mb-0">Click the button above to open the loader</p>
                </Col>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className={`loader ${elemRef.current?.classList.contains('is-active') ? 'is-active' : ''}`} ref={elemRef}>
        <div className="p-4 text-center">
          <div className="custom-loader"></div>
          <h2 className="my-3 f-w-400">Loading..</h2>
          <p className="mb-0">Please wait while we get your information from the web</p>
        </div>
      </div>
    </>
  );
};

Loading.getLayout = (page: React.ReactElement) => {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default Loading;
