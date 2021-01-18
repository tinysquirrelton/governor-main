import React, { Component } from "react";
import { Minus, Check, ChevronDown, ChevronUp } from "react-feather";
import { roadmap } from "./items";
import "./style.scss";

export default class S5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: "20211",
    };
  }

  handleExpand = (id) => {
    if (id !== this.state.expanded) {
      this.setState({ expanded: id });
    } else {
      this.setState({ expanded: null });
    }
  };

  render() {
    return (
      <div className="s5-gradient-bg">
        <div className="max-width-container">
          <div className="s5">
            <h1>Governor Roadmap</h1>

            <div className="roadmap-container">
              {Object.keys(roadmap).map((year, index) => (
                <div key={index} className="year-container">
                  <div className="year-title">{year}</div>

                  {Object.keys(roadmap[year]).map((quarter, index) => (
                    <>
                      <div
                        key={index}
                        className={`quarter-container${
                          this.state.expanded === `${year}${quarter}`
                            ? " expanded"
                            : ""
                        }`}
                      >
                        <div className="quarter-title">
                          {`Q${quarter}`}
                          <span>{year}</span>
                        </div>

                        {Object.keys(roadmap[year][quarter]).map(
                          (task, index) => (
                            <div key={index} className="quarter-item">
                              <div className="quarter-item-done">
                                {roadmap[year][quarter][task]?.done === true ? (
                                  <Check />
                                ) : (
                                  <Minus />
                                )}
                              </div>
                              <div className="quarter-item-text">
                                {roadmap[year][quarter][task]?.text}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                      <div
                        className="quarter-expander"
                        onClick={() => this.handleExpand(`${year}${quarter}`)}
                      >
                        {this.state.expanded === `${year}${quarter}` ? (
                          <ChevronUp />
                        ) : (
                          <ChevronDown />
                        )}
                      </div>
                    </>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
