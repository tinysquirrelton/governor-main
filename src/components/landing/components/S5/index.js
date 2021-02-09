import React, { Component, Fragment } from "react";
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
                <div key={`R${index}`} className="year-container">
                  <div className="year-title">{year}</div>

                  {Object.keys(roadmap[year]).map((quarter, index) => (
                    <Fragment key={`RI${index}`}>
                      <div
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
                            <div key={`T${index}`} className="quarter-item">
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
                    </Fragment>
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
