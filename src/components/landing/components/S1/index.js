import React, { Component } from "react";
import { Copy, ExternalLink } from "react-feather";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import "./style.scss";
import Dextools from "../../../../assets/logos/dextools.png";
import Coingecko from "../../../../assets/logos/coingecko.webp";
import Uniswap from "../../../../assets/logos/uniswap.png";
import Aragon from "../../../../assets/logos/aragon.png";
import PhoenixBG from "../../../../assets/logos/governor-bg.svg";

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
                <h1>As a service.</h1>
                <h2>
                  Effective solutions ensuring proper governance for blockchain
                  projects of all sizes
                </h2>
                <div className="cta-btn-container">
                  <button
                    className="cta-btn"
                    onClick={() =>
                      window.open(
                        "https://app.uniswap.org/#/swap?outputCurrency=0x515d7e9d75e2b76db60f8a051cd890eba23286bc",
                        "_blank"
                      )
                    }
                  >
                    Buy GDAO
                  </button>

                  <button
                    onClick={() =>
                      window.open("https://stake.governordao.org/")
                    }
                    className="cta-btn dark"
                  >
                    Earn LOYAL
                  </button>

                  <div className="cta-btn-subtitle-container">
                    <div
                      className="cta-btn-subtitle"
                      onClick={() =>
                        window.open(
                          "https://etherscan.io/token/0x515d7e9d75e2b76db60f8a051cd890eba23286bc",
                          "_blank"
                        )
                      }
                    >
                      GDAO Contract <ExternalLink />
                    </div>
                    <CopyToClipboard
                      text={"0x515d7e9d75e2b76db60f8a051cd890eba23286bc"}
                      onCopy={() =>
                        toast.success("GDAO Contract address copied!")
                      }
                    >
                      <div className="cta-btn-subtitle">
                        0x...6bc <Copy />
                      </div>
                    </CopyToClipboard>
                  </div>
                </div>
              </div>
              {this.props.state.isLarge && (
                <div className="right">
                  <Image source={PhoenixBG} className="phoenix-r" />
                </div>
              )}
            </div>
            <div className="logo-container">
              <a
                href="https://www.dextools.io/app/uniswap/pair-explorer/0x4d184bf6f805ee839517164d301f0c4e5d25c374"
                target="_blank"
                rel="noreferrer"
              >
                <Image source={Dextools} className="logo-logo light" />
              </a>
              <a
                href="https://www.coingecko.com/en/coins/governor-dao"
                target="_blank"
                rel="noreferrer"
              >
                <Image source={Coingecko} className="logo-logo" />
              </a>
              <a
                href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x515d7e9d75e2b76db60f8a051cd890eba23286bc"
                target="_blank"
                rel="noreferrer"
              >
                <Image source={Uniswap} className="logo-logo lighter" />
              </a>
              <a href="https://aragon.org/" target="_blank" rel="noreferrer">
                <Image source={Aragon} className="logo-logo" />
              </a>
            </div>
            {!this.props.state.isLarge && (
              <Image source={PhoenixBG} className="phoenix-bg" />
            )}
          </div>
        </div>
      </div>
    );
  }
}
