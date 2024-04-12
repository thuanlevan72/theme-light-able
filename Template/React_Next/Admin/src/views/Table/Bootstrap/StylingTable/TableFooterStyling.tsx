import React from 'react';
import { Card, Table } from 'react-bootstrap';

const TableFooterStyling = () => {
  return (
    <Card>
      <Card.Header>
        <h5>Table Footer Styling</h5>
        <span className="d-block m-t-5">use class <code>table-info</code> inside tfoot element</span>
      </Card.Header>
      <Card.Body className="table-border-style">
        <div className="table-responsive">
          <Table className="table-styling">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="table-info">
                <td>#</td>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tfoot>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TableFooterStyling;
