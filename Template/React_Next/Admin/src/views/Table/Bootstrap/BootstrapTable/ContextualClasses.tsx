import React from 'react';
import { Card, Table } from 'react-bootstrap';

const ContextualClassesTable = () => {
  return (
    <Card>
      <Card.Header>
        <h5>Contextual Classes</h5>
        <span className="d-block m-t-5">
          For Make row Contextual add Contextual class like <code>.table-success</code> in <code>tr tag</code> and For cell add
          Contextual class in <code>td or th tag</code>.
        </span>
      </Card.Header>
      <Card.Body className="table-border-style">
        <div className="table-responsive">
          <Table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-active">
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
              <tr className="table-success">
                <td>3</td>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr className="table-warning">
                <td>5</td>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr className="table-danger">
                <td>7</td>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr className="table-info">
                <td>9</td>
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

export default ContextualClassesTable;
