import React, { Component } from "react";
import { ChevronDown } from "react-feather";
import { bio } from "./bio";
import "./style.scss";

export default class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowing: null,
    };
  }
  openMember = (id) => {
    console.log(id);
    if (this.state.isShowing === id) {
      this.setState({ isShowing: null });
    } else {
      this.setState({ isShowing: id });
    }
  };

  render() {
    return (
      <div className="team-gradient-bg">
        <div className="max-width-container">
          <div className="team-container">
            <div className="team-content">
              <h1>Team</h1>
              <div className="team-members">
                {bio.map((b) => (
                  <div
                    key={b.id}
                    className={`team-member${
                      this.state.isShowing === b.id ? " active" : ""
                    }`}
                  >
                    <div className="member-upper">
                      <div className="member-photo">
                        <img src={b.photo} alt="" draggable={false} />
                      </div>
                      <div className="member-info">
                        <div className="member-alias">{b.alias}</div>
                        <div className="member-name">{b.name}</div>
                        <div className="member-role">{b.role}</div>
                      </div>
                      <div
                        className="member-expand"
                        onClick={() => this.openMember(b.id)}
                      >
                        <ChevronDown />
                      </div>
                    </div>
                    {this.state.isShowing === b.id && (
                      <div className="member-lower">
                        <div className="member-bio">{b.bio}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
