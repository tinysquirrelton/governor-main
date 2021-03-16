import React, { Component } from "react";
import "./style.scss";

import Lock from "../../../../assets/misc/lock.svg";
import Hodler from "../../../../assets/misc/hodler.svg";
import Trader from "../../../../assets/misc/trader.svg";
import Specification from "../../../../assets/misc/specification.svg";

const boxes = [
  {
    image: Specification,
    text: "Poor pre-launch specifications leading to failed governance",
  },
  {
    image: Hodler,
    text: "Apathetic token holders don’t care to participate",
  },
  {
    image: Lock,
    text:
      "Governance framework doesn’t translate well with low token circulation",
  },
  {
    image: Trader,
    text: "Short term speculators are misaligned stakeholders",
  },
];

export default class S4 extends Component {
  render() {
    const Box = ({ image, text }) => (
      <div className="box-container">
        <div className="upper">
          <img src={image} className="box-image" alt="" draggable={false} />
        </div>
        <div className="lower">
          <div className="text">{text}</div>
        </div>
      </div>
    );
    return (
      <div className="s4-gradient-bg">
        <div className="max-width-container">
          <div className="s4">
            <h1>Why do DAOs need GaaS?</h1>
            <h2>
              No community-led project, DAO or otherwise, has gotten the
              governance formula quite right.
            </h2>
            <div className="title-separator" />
            <h3>
              If decentralized governance is gone about incorrectly, the entire
              project is placed in jeopardy.
            </h3>
            <div className="boxes-container">
              {boxes.map((box, index) => (
                <Box key={index} image={box.image} text={box.text} />
              ))}
            </div>
          </div>
        </div>
        {/* <img
          src={TextureBG}
          className="texture-bg sm"
          alt=""
          draggable={false}
        /> */}
        <svg
          id="tri-separator"
          className="darker rotate"
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
