import React, { Component } from "react";
import Header from "./components/header/header.js";
import Main from "./main.js";
import Footer from "./components/footer/footer.js";
import bg from "./images/background_01.png";

document.body.classList.add("d-flex");
document.body.classList.add("flex-column");
document.body.classList.add("h-100");

class App extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100%",
          width: "100%",
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
