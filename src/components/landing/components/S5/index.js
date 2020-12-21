import React, { Component } from "react";
import { ArrowRight, ArrowLeft, Square, CheckSquare } from "react-feather";
import { roadmap } from "./items";
import "./style.scss";

export default class S5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: 2020,
      quarter: 4,
    };
  }

  setNextQ = () => {
    let y;
    let q;
    if (this.state.quarter === 4) {
      if (this.state.year === 2021) {
        q = 4;
        y = 2020;
      } else {
        q = 1;
        y = 2021;
      }
    } else {
      q = this.state.quarter + 1;
      y = this.state.year;
    }
    this.setState({ year: y, quarter: q });
  };

  setPrevQ = () => {
    let y;
    let q;
    if (this.state.quarter === 4 && this.state.year === 2020) {
      q = 4;
      y = 2021;
    } else if (this.state.quarter === 1 && this.state.year === 2021) {
      q = 4;
      y = 2020;
    } else {
      q = this.state.quarter - 1;
      y = this.state.year;
    }
    this.setState({ year: y, quarter: q });
  };

  render() {
    return (
      <div className="s5-gradient-bg">
        <div className="max-width-container">
          <div className="s5">
            <h1>Governor Roadmap</h1>
            <div className="roadmap-container">
              <div className="year-container">
                <button
                  className={`year-btn${
                    this.state.year === 2020 ? " active" : ""
                  }`}
                  onClick={() => this.setState({ year: 2020, quarter: 4 })}
                >
                  2020
                </button>
                <button
                  className={`year-btn${
                    this.state.year === 2021 ? " active" : ""
                  }`}
                  onClick={() => this.setState({ year: 2021, quarter: 1 })}
                >
                  2021
                </button>
              </div>
              <div className="quarter-container">
                <div className="year-item">{this.state.year}</div>
                <div className="quarter-item">Q{this.state.quarter}</div>
              </div>
              <div className="schedules-container">
                {roadmap[this.state.year][this.state.quarter].map(
                  (q, index) => (
                    <div key={index} className="schedule-item">
                      <div>{q.done ? <CheckSquare /> : <Square />} </div>
                      <div className="text">{q.text}</div>
                    </div>
                  )
                )}
              </div>
              <div className="button-container">
                <button className="quarter-btn" onClick={this.setPrevQ}>
                  <ArrowLeft />
                </button>
                <button className="quarter-btn" onClick={this.setNextQ}>
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
