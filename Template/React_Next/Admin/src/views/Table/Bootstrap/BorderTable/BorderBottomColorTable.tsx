import React from 'react';
import { Card, Table } from 'react-bootstrap';

const BorderBottomColorTable = () => {
  return (
    <Card>
      <Card.Header>
        <h5>Border Bottom Color</h5>
      </Card.Header>
      <Card.Body className="table-border-style">
        <div className="table-responsive">
          <Table>
            <thead>
              <tr className="border-bottom-danger">
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-bottom-primary">
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr className="border-bottom-warning">
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
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BorderBottomColorTable;
