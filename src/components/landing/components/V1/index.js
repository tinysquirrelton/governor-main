import React, { Component } from "react";
import ReactPlayer from "react-player";
import "./style.scss";
import DAOVideo from "../../../../assets/video/what_is_a_dao.mp4";

export default class V1 extends Component {
  render() {
    return (
      <div className="max-width-container">
        <div className="v1">
          <h1>What is a DAO?</h1>
          <div
            className="cta-litepaper"
            onClick={() =>
              window.open(
                process.env.PUBLIC_URL + "/papers/GDAO-Litepaper.pdf",
                "_blank"
              )
            }
          >
            Read our Litepaper
          </div>
          <div className="dao-player-container">
            <ReactPlayer
              className="dao-player-content"
              url={DAOVideo}
              controls
              width={"100%"}
              height={"100%"}
            />
          </div>
        </div>
      </div>
    );
  }
}
