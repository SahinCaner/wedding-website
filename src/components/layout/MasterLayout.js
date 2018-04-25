import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Counter from "../counter/Counter";

export class MasterLayout extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        {this.props.children}
        <Counter />
        <Footer />
      </div>
    );
  }
}

export default MasterLayout;
