import React from "react";
import LandingPage from "./components/landing_page/landing_page.js";
import Game from "./components/game/game.js";
import Quests from "./components/quests/quests.js";
import ErrorPage from "./components/error_page/error_page.js";

import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";

const Main = () => (
  <main>
    <Container fluid className="my-5 pb-3">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/quests" component={Quests} />
        <Route component={ErrorPage} />
      </Switch>
    </Container>
  </main>
);

export default Main;
