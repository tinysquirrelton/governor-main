import React, { Component } from "react";
import "./style.scss";

export default class Stats extends Component {
  render() {
    return (
      <div className="stats-section-container">
        <div className="stats-card">
          <div className="stats-upper">GDAO</div>
          <div className="stats-content">
            <div className="stats-label">Price</div>
            <div className="stats-value">$1.5</div>
          </div>
        </div>
        <div className="stats-card">
          <div className="stats-upper">GDAO</div>
          <div className="stats-content">
            <div className="stats-label">Circulating supply</div>
            <div className="stats-value">859,231</div>
          </div>
        </div>
      </div>
    );
  }
}
