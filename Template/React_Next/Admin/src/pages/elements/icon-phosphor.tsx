import React, { ReactElement, useEffect } from "react";
import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import { Card, Col, Row } from "react-bootstrap";
import { icon_list_phosphor } from "@common/JsonData/index";

import ClipboardJS from 'clipboard';

const IconPhosphor = () => {
  useEffect(() => {
    // Create and append icon blocks
    icon_list_phosphor.forEach((icon: any) => {
      const iconBlock = document.createElement('div');
      iconBlock.setAttribute('class', 'i-block');
      iconBlock.setAttribute('data-clipboard-text', `ph-duotone ${icon}`);
      iconBlock.setAttribute('data-bs-toggle', 'tooltip');
      iconBlock.setAttribute('data-filter', icon);
      iconBlock.setAttribute('title', `ph-duotone ${icon}`);

      const iconMain = document.createElement('i');
      iconMain.setAttribute('class', `ph-duotone ${icon}`);
      iconBlock.appendChild(iconMain);

      document.querySelector('#icon-wrapper')?.appendChild(iconBlock);
    });

    // Initialize ClipboardJS
    const clipboard = new ClipboardJS('.i-block');

    // Handle successful clipboard copy
    clipboard.on('success', (e) => {
      const targetElement = e.trigger as HTMLElement;
      const iconBadge = document.createElement('span');
      iconBadge.setAttribute('class', 'ic-badge badge bg-success');
      iconBadge.innerHTML = 'copied';
      targetElement.appendChild(iconBadge);

      setTimeout(() => {
        targetElement.children[1]?.remove();
      }, 3000);
    });

    // Handle clipboard copy error
    clipboard.on('error', (e) => {
      const targetElement = e.trigger as HTMLElement;
      const iconBadge = document.createElement('span');
      iconBadge.setAttribute('class', 'ic-badge badge bg-danger');
      iconBadge.innerHTML = 'Error';
      targetElement.appendChild(iconBadge);

      setTimeout(() => {
        targetElement.children[1]?.remove();
      }, 3000);
    });

    // Handle icon search
    document.querySelector<HTMLInputElement>('#icon-search')?.addEventListener('keyup', () => {
      const searchInput = (document.querySelector<HTMLInputElement>('#icon-search')?.value || '').toLowerCase();
      const iconBlocks = document.querySelectorAll('.i-main .i-block');

      iconBlocks.forEach((block: any) => {
        const dataFilter = block.getAttribute('data-filter');
        if (dataFilter) {
          const filterText = dataFilter.toLowerCase();
          const index = filterText.indexOf(searchInput);
          if (index !== -1) {
            block.style.display = 'inline-flex';
          } else {
            block.style.display = 'none';
          }
        }
      });
    });
  }, []);

  return (
    <>
      <BreadcrumbItem mainTitle="Icons" subTitle="Phosphor Icons" />
      <Row>
        <Col sm={12}>
          <Card>
            <div className="card-header">
              <h5>Phosphor</h5>
              <p>Use an Icon in your React component using <code>&lt;i className=&quot;&lt;&lt; Copied code &gt;&gt;&quot;&gt;</code></p>
            </div>
            <Card.Body className="text-center">
              <Row className="justify-content-center">
                <Col sm={6}>
                  <input type="text" id="icon-search" className="form-control mb-4" placeholder="search . . " />
                </Col>
              </Row>
              <div className="i-main" id="icon-wrapper"></div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

IconPhosphor.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
};

export default IconPhosphor;