import React, { Component } from "react";
import "./style.scss";
import DexTools from "../../../../assets/logos/dextools.png";
import CoinGecko from "../../../../assets/logos/coingecko.webp";
import UniSwap from "../../../../assets/logos/uniswap.png";
import PhoenixBG from "../../../../assets/logos/governor-bg.png";
import TextureBG from "../../../../assets/texture/texture-bg.png";

export default class S1 extends Component {
  render() {
    const Image = ({ source, className }) => (
      <img src={source} className={className} alt="" draggable={false} />
    );

    return (
      <div className="s1-gradient-bg">
        <div className="max-width-container">
          <div className="s1">
            <div className="cta-container">
              <div className="left">
                <h1>Governance.</h1>
                <h1>As a Service.</h1>
                <h2>
                  Effective solutions ensuring proper governance for blockhain
                  projects of all sizes
                </h2>
                <div className="cta-btn-container">
                  <button className="cta-btn">Explore GaaS</button>
                  <button className="cta-btn dark">Farm GDAO</button>
                </div>
              </div>
              {this.props.state.isLarge && (
                <div className="right">
                  <Image source={PhoenixBG} className="phoenix-r" />
                </div>
              )}
            </div>
            <div className="logo-container">
              <Image source={DexTools} className="logo-logo light" />
              <Image source={CoinGecko} className="logo-logo" />
              <Image source={UniSwap} className="logo-logo lighter" />
            </div>
            {!this.props.state.isLarge && (
              <Image source={PhoenixBG} className="phoenix-bg" />
            )}
            <Image source={TextureBG} className="texture-bg sm" />
            <Image source={TextureBG} className="texture-bg lg" />
          </div>
        </div>
      </div>
    );
  }
}
