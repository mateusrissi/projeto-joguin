import React from "react";
import { Row, Col, Alert } from "react-bootstrap";

function ErrorPage() {
  return (
    <Row>
      <Col>
        <h1 className="subtitle">About Me</h1>
        <Alert variant="danger">
          <div>
              <h1>ERROR 404 - NOT FOUND</h1>
          </div>
        </Alert>
      </Col>
    </Row>
  );
}

export default ErrorPage;
