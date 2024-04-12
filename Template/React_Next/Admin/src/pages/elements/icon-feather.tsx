import React, { ReactElement, useEffect } from "react";
import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import { Card, Col, Row } from "react-bootstrap";
import { icon_list } from "@common/JsonData/index";

import ClipboardJS from 'clipboard';
import feather from 'feather-icons';

const IconFeather = () => {
  useEffect(() => {
    // Create and append icon blocks
    icon_list.forEach((icon: any) => {
      const icon_block = document.createElement('div');
      icon_block.setAttribute('class', 'i-block');
      icon_block.setAttribute('data-clipboard-text', icon);
      icon_block.setAttribute('data-bs-toggle', 'tooltip');
      icon_block.setAttribute('data-filter', icon);
      icon_block.setAttribute('title', icon);

      const icon_main = document.createElement('i');
      icon_main.setAttribute('data-feather', icon);
      icon_block.appendChild(icon_main);

      document.querySelector('#icon-wrapper')?.appendChild(icon_block);
    });

    feather.replace();

    // Initialize ClipboardJS
    const clipboard = new ClipboardJS('.i-block');

    // Handle successful clipboard copy
    clipboard.on('success', (e: any) => {
      const targetElement = e.trigger as HTMLElement;
      const icon_badge = document.createElement('span');
      icon_badge.setAttribute('class', 'ic-badge badge bg-success');
      icon_badge.innerHTML = 'copied';
      targetElement.appendChild(icon_badge);

      setTimeout(() => {
        targetElement.children[1]?.remove();
      }, 3000);
    });

    // Handle clipboard copy error
    clipboard.on('error', (e: any) => {
      const targetElement = e.trigger as HTMLElement;
      const icon_badge = document.createElement('span');
      icon_badge.setAttribute('class', 'ic-badge badge bg-danger');
      icon_badge.innerHTML = 'Error';
      targetElement.appendChild(icon_badge);

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
      <BreadcrumbItem mainTitle="Icons" subTitle="Feather Icon" />
      <Row>
        <Col sm={12}>
          <Card>
            <div className="card-header">
              <h5>Feather Icon</h5>
              <p>Use an SVG icon in your React component using <code>&lt;i data-feather=&quot;&lt;&lt; Copied code &gt;&gt;&quot;&gt;</code></p>
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

IconFeather.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
};

export default IconFeather;