import React, { Component } from "react";
import "./style.scss";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: null,
    };
  }
  render() {
    return (
      <div
        className={`card-container${
          this.state.isExpanded ? " expanded" : " not-expanded"
        }`}
      >
        <div className="card">
          <img src={this.props.image} className="card-image" />
          <div className="card-text">
            <span>{this.props.title}</span>
            {this.props.text}
          </div>
        </div>
        <div className="card-title">{this.props.title}</div>
        <div
          className="card-subtitle"
          onClick={() => {
            this.setState((prevState) => ({
              isExpanded: !prevState.isExpanded,
            }));
          }}
        >
          {this.state.isExpanded ? "Close" : "Learn more"}
        </div>
      </div>
    );
  }
}
