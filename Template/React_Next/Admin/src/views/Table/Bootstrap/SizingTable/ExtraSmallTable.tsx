import React from 'react';
import { Card, Table } from 'react-bootstrap';

const ExtraSmallTable = () => {
  return (
    <Card>
      <Card.Header>
        <h5>Extra Small Table</h5>
      </Card.Header>
      <Card.Body>
        <div className="table-responsive">
          <Table size="xs">
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
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ExtraSmallTable;
