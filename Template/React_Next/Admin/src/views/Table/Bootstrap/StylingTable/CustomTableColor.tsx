import React from 'react';
import { Card, Table } from 'react-bootstrap';

const CustomTableColor = () => {
  return (
    <Card>
      <Card.Header>
        <h5>Custom Table Color</h5>
        <span className="d-block m-t-5">use class <code>table-*</code> inside table element</span>
      </Card.Header>
      <Card.Body className="table-border-style">
        <div className="table-responsive">
          <Table className="table table-styling table-primary">
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
              <tr>
                <td>3</td>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Mark</td>
                <td>Thornton</td>
                <td>@facebook</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CustomTableColor;
