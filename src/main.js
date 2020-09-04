import React from "react";
import Game from "./components/game/game.js";
import Quests from "./components/quests/quests.js";
import ErrorPage from "./components/error_page/error_page.js";

import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom'

const Main = () => (
  <main>
    <Container fluid>
      <Switch>
        <Route exact path='/game' component={Game}/>
        <Route path='/quests' component={Quests}/>
        <Route component={ErrorPage}/>
      </Switch>
    </Container>
  </main>  
);

export default Main;
