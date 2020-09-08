import React from "react";
import { Row, Col, Image, Button, Container } from "react-bootstrap";

function LandingPage() {
  return (
    <Container>
      <Row className="my-auto text-center">
        <Col lg={{ order: 2 }} className="text-center">
          <Image
            src={require("../../images/game_title.png")}
            alt="O Embaixador"
            fluid
          />
          <p>
            I'm baby hammock viral woke pinterest bushwick, tacos polaroid
            succulents air plant beard bicycle rights fam four loko glossier
            small batch. Roof party godard taiyaki sustainable craft beer. Deep
            v godard live-edge, DIY microdosing pork belly stumptown locavore
            chartreuse typewriter. Truffaut sartorial pug iceland plaid bushwick
            trust fund, heirloom pabst mumblecore master cleanse synth wayfarers
            tattooed. Poke affogato bitters literally.
          </p>
          <Row className="text-center pt-5">
            <Col>
              <Button href="#">Spotify</Button>
            </Col>
            <Col>
              <Button href="#">Deezer</Button>
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
    </Container>
  );
}

export default LandingPage;
