import React, { Component } from "react";
import S1 from "./components/S1";
import S2 from "./components/S2";
import S3 from "./components/S3";
import S4 from "./components/S4";
import S5 from "./components/S5";

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSmall: null,
      isMedium: null,
      isLarge: null,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.onResize.bind(this));
    this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize());
  }

  onResize = () => {
    this.setState({
      isLarge: window.innerWidth >= 992,
      isMedium: window.innerWidth >= 768 && window.innerWidth < 992,
      isSmall: window.innerWidth < 768,
    });
  };

  render() {
    return (
      <>
        <S1 state={this.state} />
        <S2 state={this.state} />
        <S3 state={this.state} />
        <S4 state={this.state} />
        <S5 state={this.state} />
      </>
    );
  }
}
