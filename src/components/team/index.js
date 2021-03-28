import React, { Component } from "react";
import "./style.scss";

export default class Team extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="team-gradient-bg">
        <div className="max-width-container">
          <div className="team-container">
            <div className="team-content">
              <h1>Team (coming soon)</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
