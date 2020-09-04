import React from "react";
import { Row, Col, Alert } from "react-bootstrap";

function Quests() {
  return (
    <Row>
      <Col>
        <h1 className="subtitle">About Me</h1>
        <Alert variant="primary">
          <div>
            <p>
              <b>Lorem</b>
            </p>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut laborevoluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum."
            </p>
            <br />
            <p>
              <b>Ipsum</b>
            </p>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut laborevoluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum."
            </p>
          </div>
        </Alert>
      </Col>
    </Row>
  );
}

export default Quests;
