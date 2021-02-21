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
    const [p, s] = await Promise.all([
      fetch("https://api.governordao.org/gdao/price").then((response) => {
        return response.json();
      }),
      fetch("https://api.governordao.org/gdao/circulatingSupply").then(
        (response) => {
          return response.json();
        }
      ),
    ]);
    const price = BigNumber(p[0].price).toNumber();
    const supply = BigNumber(s[0].circulatingSupply).toNumber();
    this.setState({
      price: price,
      supply: supply,
      mcap: price * supply,
    });
  }

  render() {
    return (
      <div className="max-width-container">
        <div className="v1">
          <div className="stats-item">
            <div className="stats-unit">Price</div>
            <div className="stats-value">
              $<CountUp decimals={2} separator={","} end={this.state.price} />
            </div>
          </div>
          <div className="stats-item">
            <div className="stats-unit">Circulating supply</div>
            <div className="stats-value">
              <CountUp decimals={2} separator={","} end={this.state.supply} />
            </div>
          </div>
          <div className="stats-item">
            <div className="stats-unit">Market Cap.</div>
            <div className="stats-value">
              <CountUp decimals={2} separator={","} end={this.state.mcap} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
