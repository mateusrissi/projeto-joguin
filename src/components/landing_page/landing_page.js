import React from "react";
import { Row, Col, Image, Button, Container } from "react-bootstrap";
import { IconContext } from "react-icons";
import { RiSpotifyLine } from "react-icons/ri";
import { SiDeezer } from "react-icons/si";

function LandingPage() {
  return (
    <main className="flex-shrink-0">
      <Container className="h-100 flex-fill">
        <Row className="text-center text-white">
          <Col lg={{ order: 1 }} className="text-center">
            <Image
              src={require("../../images/game_title.png")}
              alt="O Embaixador"
              fluid
            />
            <h2>THE LEGACY</h2>
            <p>
              I'm baby hammock viral woke pinterest bushwick, tacos polaroid
              succulents air plant beard bicycle rights fam four loko glossier
              small batch. Roof party godard taiyaki sustainable craft beer.
              Deep v godard live-edge, DIY microdosing pork belly stumptown
              locavore chartreuse typewriter. Truffaut sartorial pug iceland
              plaid bushwick trust fund, heirloom pabst mumblecore master
              cleanse synth wayfarers tattooed. Poke affogato bitters literally.
            </p>
            <Row className="text-center pt-5">
              <Col xs={12} md={6} className="pb-3 pb-md-0">
                <IconContext.Provider
                  value={{ size: "1.5em", style: { verticalAlign: "middle" } }}
                >
                  <div>
                    <Button
                      variant="light"
                      size="lg"
                      href="#"
                      id="btn-deezer"
                      block
                    >
                      <SiDeezer /> Deezer
                    </Button>
                  </div>
                </IconContext.Provider>
              </Col>
              <Col xs={12} md={6} py-xs-3>
                <IconContext.Provider
                  value={{ size: "1.5em", style: { verticalAlign: "middle" } }}
                >
                  <div>
                    <Button
                      variant="success"
                      size="lg"
                      href="#"
                      id="btn-spotify"
                      block
                    >
                      <RiSpotifyLine /> Spotify
                    </Button>
                  </div>
                </IconContext.Provider>
              </Col>
            </Row>
          </Col>
          <Col lg={{ order: 2, offset: 2 }} className="h-100">
            <Image
              src={require("../../images/warrior.png")}
              alt="warrior image"
              fluid
            />
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default LandingPage;
