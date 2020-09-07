import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";

function LandingPage() {
  return (
    <Row>
      <Col lg={{ order: 2 }} className="my-auto text-center">
        <h1>O EMBAIXADOR</h1>
        <p>
          I'm baby hammock viral woke pinterest bushwick, tacos polaroid
          succulents air plant beard bicycle rights fam four loko glossier small
          batch. Roof party godard taiyaki sustainable craft beer. Deep v godard
          live-edge, DIY microdosing pork belly stumptown locavore chartreuse
          typewriter. Truffaut sartorial pug iceland plaid bushwick trust fund,
          heirloom pabst mumblecore master cleanse synth wayfarers tattooed.
          Poke affogato bitters literally.
        </p>
        <hr />
        <Row className="text-center">
          <Col>
            <Button href="#">Spotify</Button>
          </Col>
          <Col>
            <Button href="#">Deezer</Button>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <Button href="#">Youtube</Button>
          </Col>
          <Col>
            <Button href="#">Spotify</Button>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <Button href="#">Spotify</Button>
          </Col>
          <Col>
            <Button href="#">Spotify</Button>
          </Col>
        </Row>
      </Col>
      <Col lg={{ order: 1 }}>
        <Image
          src={require("../../images/warrior.png")}
          alt="warrior image"
          fluid
        />
      </Col>
    </Row>
  );
}

export default LandingPage;
