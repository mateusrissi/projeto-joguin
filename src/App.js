import React, { Component } from "react";
import Header from "./components/header/header.js";
import Main from "./main.js";
import Footer from "./components/footer/footer.js";
import test from "./images/background.png";

class App extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${test})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
