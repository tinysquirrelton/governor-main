import React, { Component } from "react";
import { ArrowUp, ArrowDown, Square, CheckSquare } from "react-feather";
import "./style.scss";

const q1 = [
  { done: true, text: "Eat poop from garbagetruck" },
  { done: true, text: "Read a book by its cover" },
  { done: true, text: "Give private keys to stranger on tg" },
  { done: false, text: "Smoke weed once" },
  { done: false, text: "Eat 2 meals a day" },
];

const q2 = [
  { done: true, text: "Buy coffee" },
  { done: true, text: "Finalize Django backend" },
  { done: true, text: "Init new DB model" },
  { done: false, text: "Produce FAKE data for testing" },
  { done: false, text: "Shit on laptop" },
];

const q3 = [
  { done: true, text: "Buy groceries and pay with GDAO" },
  { done: true, text: "Buy groceries naked and get discount" },
  { done: true, text: "Go to sleep" },
  { done: false, text: "Try to sleep" },
  { done: false, text: "Fall asleep" },
];

const q4 = [
  { done: true, text: "Sell all Kusama for DogeCoin" },
  { done: true, text: "Sell all DogeCoin much nice" },
  { done: true, text: "Resist sleep" },
  { done: false, text: "Go to sleep" },
  { done: false, text: "Fall asleep" },
];

const y1 = [q1, q2, q3, q4];
const y2 = [q2, q4, q3, q1];
const ys = [y1, y2];

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
                  onClick={() => this.setState({ year: 2020 })}
                >
                  2020
                </button>
                <button
                  className={`year-btn${
                    this.state.year === 2021 ? " active" : ""
                  }`}
                  onClick={() => this.setState({ year: 2021 })}
                >
                  2021
                </button>
              </div>
              <div className="quarter-container">
                <div className="year-item">{this.state.year}</div>
                <div className="quarter-item">Q{this.state.quarter}</div>
              </div>
              <div className="schedules-container">
                {ys[this.state.year === 2020 ? 0 : 1][
                  this.state.quarter - 1
                ]?.map((q, index) => (
                  <div key={index} className="schedule-item">
                    <div>{q.done ? <CheckSquare /> : <Square />} </div>
                    <div className="text">{q.text}</div>
                  </div>
                ))}
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
