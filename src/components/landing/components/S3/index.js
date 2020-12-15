import React, { Component } from "react";
import Card from "./card";
import "./style.scss";
import Consulting from "../../../../assets/misc/consulting.svg";
import Lab from "../../../../assets/misc/lab.png";
import Vote from "../../../../assets/misc/vote.svg";

const tris = [
  {
    image: Vote,
    title: "Voting Bootstrap",
    text:
      "The mature, engaged Governor community participate as active voters on third-party projects. This ensures that voting quorums are met and long-term interests are upheld from launch onwards.",
  },
  {
    image: Consulting,
    title: "Pre-Deployment Consulting",
    text:
      "Utilization of Governor resources and smart contracts to best equip third-party projects to launch with a sound framework in place.",
  },

  {
    image: Lab,
    title: "Unrug-as-a-Service",
    text:
      "Governor rose from the community of the biggest exitscam of the year. Other communities that were rugged leverage our framework to rebuild their own project for themselves.",
  },
];

export default class S3 extends Component {
  render() {
    return (
      <div className="s3-gradient-bg">
        <div id="gaas" className="max-width-container">
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
      </div>
    );
  }
}
