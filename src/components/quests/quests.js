import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function Quests() {
  return (
    <Container className="border">
      <Row>
        <Col>
          <div class="card text-left">
            <img class="card-img-top" src="//#region " alt="" />
            <div class="card-body">
              <h4 class="card-title">Title</h4>
              <p class="card-text">Body</p>
            </div>
          </div>
        </Col>
        <Col>
          <div class="card text-left">
            <img class="card-img-top" src="//#region " alt="" />
            <div class="card-body">
              <h4 class="card-title">Title</h4>
              <p class="card-text">Body</p>
            </div>
          </div>
        </Col>
        <Col>
          <div class="card text-left">
            <img class="card-img-top" src="//#region " alt="" />
            <div class="card-body">
              <h4 class="card-title">Title</h4>
              <p class="card-text">Body</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Quests;
