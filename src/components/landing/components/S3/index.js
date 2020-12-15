import React, { Component } from "react";
import Card from "./card";
import "./style.scss";
import Consulting from "../../../../assets/misc/consulting.svg";
import Lab from "../../../../assets/misc/lab.png";
import Vote from "../../../../assets/misc/vote.svg";

const tris = [
  {
    image: Consulting,
    title: "Pre-deployment Consulting",
    text:
      "By decentralizing project ownership, founders and core team members retain less legal liability and have a more open framework to experiment with. This also alleviates the security risk of centralized keyholders.",
  },
  {
    image: Vote,
    title: "Voting Bootstrap",
    text:
      "Token holders benefit immediately from their good behavior, as their participation positively impacts the value of their investments.",
  },
  {
    image: Lab,
    title: "Unrug-as-a-Service",
    text:
      "Ownership of capital raised, pre-launch or otherwise, can be attributed to token holders. This eliminates the possibility of founders running off with the cash.",
  },
];

export default class S3 extends Component {
  render() {
    return (
      <div className="s3-gradient-bg">
        <svg
          id="tri-separator"
          className="dark"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="100%"
          height="100"
          viewBox="0 0 100 102"
          preserveAspectRatio="none"
        >
          {this.props.state.isSmall && <path d="M0 0 L50 33 L100 0 Z" />}
          {this.props.state.isMedium && <path d="M0 0 L50 55 L100 0 Z" />}
          {this.props.state.isLarge && <path d="M0 0 L60 50 L100 0 Z" />}
        </svg>
        <div className="max-width-container">
          <div className="s3">
            <h1>Governance-as-a-Service (GaaS)</h1>
            <h2>We are a role model in community governance done right.</h2>
            <div className="tri-container">
              {tris.map((tri, index) => (
                <Card
                  key={index}
                  image={tri.image}
                  title={tri.title}
                  text={tri.text}
                />
              ))}
            </div>
            <h2 className="mb">
              Our protocol offers several services as part of the
              Governance-as-a-Service (GaaS) sandbox for any project to ensure
              their governance model works out of the box.
            </h2>
          </div>
        </div>
        <svg
          id="tri-separator"
          className="gray rotate"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="100%"
          height="100"
          viewBox="0 0 100 102"
          preserveAspectRatio="none"
        >
          {this.props.state.isSmall && <path d="M0 0 L50 33 L100 0 Z" />}
          {this.props.state.isMedium && <path d="M0 0 L50 55 L100 0 Z" />}
          {this.props.state.isLarge && <path d="M0 0 L60 50 L100 0 Z" />}
        </svg>
      </div>
    );
  }
}
