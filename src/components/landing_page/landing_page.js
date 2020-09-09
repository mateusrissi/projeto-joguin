import React from "react";
import { Row, Col, Image, Button, Container } from "react-bootstrap";
import { IconContext } from "react-icons";
import { RiSpotifyLine } from "react-icons/ri";
import { SiDeezer } from "react-icons/si";

function LandingPage() {
  return (
    <Container>
      <Row className="my-auto text-center">
        <Col lg={{ order: 1 }} className="text-center">
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
              <IconContext.Provider value={{ size: "1.5em", style: { verticalAlign: 'middle' } }}>
                <div>
                  <Button variant="light" size="lg" href="#" id="btn-deezer">
                    <SiDeezer /> Deezer
                  </Button>
                </div>
              </IconContext.Provider>
            </Col>
            <Col>
              <IconContext.Provider value={{ size: "1.5em", style: { verticalAlign: 'middle' } }}>
                <div>
                  <Button variant="success" size="lg" href="#" id="btn-spotify">
                    <RiSpotifyLine /> Spotify
                  </Button>
                </div>
              </IconContext.Provider>
            </Col>
          </Row>
        </Col>
        <Col lg={{ order: 2 }}>
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
