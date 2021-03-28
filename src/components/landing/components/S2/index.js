import React, { Component } from "react";
import "./style.scss";
import GlobeBG from "../../../../assets/misc/globe.svg";
import Founder from "../../../../assets/misc/founder.svg";
import Equity from "../../../../assets/misc/equity.svg";
import Holders from "../../../../assets/misc/holders.svg";
import Ease from "../../../../assets/misc/ease.svg";

const puns = [
  {
    image: Founder,
    title: "Reduced founder liability",
    text:
      "By decentralizing project ownership, founders and core team members retain less legal liability and have a more open framework to experiment with. This also alleviates the security risk of centralized keyholders.",
  },
  {
    image: Holders,
    title: "Aligned token holder interests",
    text:
      "Token holders benefit immediately from their good behavior, as their participation positively impacts the value of their investments.",
  },
  {
    image: Equity,
    title: "Equity retained from initial raise",
    text:
      "Ownership of capital raised, pre-launch or otherwise, can be attributed to token holders. This eliminates the possibility of founders running off with the cash.",
  },
  {
    image: Ease,
    title: "Ease of contribution",
    text:
      "Governance rights make it straightforward for any tokenholder to contribute meaningfully to the project they support. No on-boarding or firewall to keep out would-be contributors!",
  },
];

export default class S2 extends Component {
  render() {
    const Image = ({ source, className }) => (
      <img src={source} className={className} alt="" draggable={false} />
    );
    const Pun = ({ image, title, text }) => (
      <div className="pun-container">
        <img className="pun-image" src={image} alt="" draggable={false} />
        <div className="pun-title">{title}</div>
        <div className="pun-text">{text}</div>
      </div>
    );

    return (
      <div className="max-width-container">
        <div className="s2">
          <div className="partnership">
            <div className="video-wrapper">
              <iframe
                title="governorXfinnovant"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/lWGU563LCdI"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <h2>GDAO x Finnovant Strategic Partnership</h2>
          </div>

          <br />
          <br />

          <h1>Decentralized Governance (DAOs)</h1>
          <h2>
            By delegating ownership decisions to token holders, blockchain
            projects open an <span>entirely new</span> set of incentives for
            participation.
          </h2>
          {!this.props.state.isLarge ? (
            <div className="puns-container">
              {puns.map((pun, index) => (
                <Pun
                  key={index}
                  image={pun.image}
                  title={pun.title}
                  text={pun.text}
                />
              ))}
              <Image source={GlobeBG} className="globe-bg" />
            </div>
          ) : (
            <div className="puns-container">
              <div className="upper">
                <Pun title={puns[0].title} text={puns[0].text} />
                <Pun title={puns[1].title} text={puns[1].text} />
              </div>
              <Image source={GlobeBG} className="globe-bg" />
              <div className="lower">
                <Pun title={puns[3].title} text={puns[3].text} />
                <Pun title={puns[2].title} text={puns[2].text} />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
