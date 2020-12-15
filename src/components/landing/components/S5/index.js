import React, { Component } from "react";
import { ArrowUp, ArrowDown, Square, CheckSquare } from "react-feather";
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
    let nq = this.state.quarter + 1;
    let y =
      nq === 5 ? (this.state.year === 2020 ? 2021 : 2020) : this.state.year;
    this.setState({ year: y, quarter: nq === 5 ? 1 : nq });
  };

  setPrevQ = () => {
    let nq = this.state.quarter - 1;
    let y =
      nq === 0 ? (this.state.year === 2020 ? 2021 : 2020) : this.state.year;
    this.setState({ year: y, quarter: nq === 0 ? 4 : nq });
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
                <button className="quarter-btn" onClick={this.setNextQ}>
                  <ArrowUp />
                </button>
                <button className="quarter-btn" onClick={this.setPrevQ}>
                  <ArrowDown />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
