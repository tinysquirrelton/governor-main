import React, { Component } from "react";
import BigNumber from "bignumber.js/bignumber";
import CountUp from "react-countup";
import "./style.scss";

export default class V1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      supply: 0,
      mcap: 0,
    };
  }

  async componentDidMount() {
    const [price, supply] = await Promise.all([
      fetch("api.governordao.org/gdao/price").then((response) => {
        return response.json();
      }),
      fetch("https://api.governordao.org/gdao/circulatingSupply").then(
        (response) => {
          return response.json();
        }
      ),
    ]);
    this.setState({ price: price, supply: supply });
  }

  render() {
    return (
      <div className="max-width-container">
        <div className="v1">
          <div className="stats-item">
            <div className="stats-unit">Price</div>
            <div className="stats-value">
              $<CountUp decimals={2} separator={","} end={100.231} />
            </div>
          </div>
          <div className="stats-item">
            <div className="stats-unit">Circulating supply</div>
            <div className="stats-value">
              <CountUp decimals={2} separator={","} end={121546460} />
            </div>
          </div>
          <div className="stats-item">
            <div className="stats-unit">Market Cap.</div>
            <div className="stats-value">
              <CountUp decimals={2} separator={","} end={121546460} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
