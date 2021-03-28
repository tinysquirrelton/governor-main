import React, { Component } from "react";
import "./style.scss";

const contracts = [
  {
    title: "Airdrop",
    description:
      "Contains the GDAO tokens pending a claim by the eligible claimants.",
    link:
      "https://etherscan.io/address/0x7ea0f8bb2f01c197985c285e193dd5b8a69836c0#code",
  },
  {
    title: "Burn Address",
    description: "Stores the GDAO tokens that are burned on a bi-weekly basis.",
    link:
      "https://etherscan.io/address/0x925b1f1bd3c28ea9f03fc00b8e069ef738ff740d#code",
  },
  {
    title: "GDAO ERC-20",
    description:
      "The official token for Governor DAO, which represents your voting power and stake in the Treasury.",
    link:
      "https://etherscan.io/address/0x515d7E9D75E2b76DB60F8a051Cd890eBa23286Bc#code",
  },
  {
    title: "Governator",
    description:
      "Enables you to swap any ERC-20 for its UNI-V2 pair with ETH. Sends 2% of each transaction to the Governor Treasury as a tax.",
    link:
      "https://etherscan.io/address/0x09e16ad071f4f80c02856275116cc772ba74b62c#code",
  },
  {
    title: "Liquidity Mine",
    description:
      "Official Liquidity Mine for GovernorDAO. Slow drip, fair distribution of 1.2M GDAO governance tokens.",
    link:
      "https://etherscan.io/address/0x4dac3e07316d2a31baabb252d89663dee8f76f09#code",
  },
  {
    title: "Loyalty Mine",
    description:
      "Single asset staking (SAS) DApp designed to enable users to deposit GDAO to be rewarded LOYAL tokens.",
    link:
      "https://etherscan.io/address/0xda58927f4065f1d02a6ea850c2aac49d7362a643#code",
  },
  {
    title: "Loyalty Token",
    description:
      "Non-transferrable ERC20 designed as a reward for staking GDAO in the Loyalty Mine. May be used in exchange for privledged NFTs or a share of unclaimed GDAO from the airdrop.",
    link:
      "https://etherscan.io/address/0xeda4f23957d2f819c22761c4d6d6157bd3fe0724#code",
  },
  {
    title: "Swap",
    description:
      "Swap one predetermined token for another (1:1), used for GDAO sLP to LP conversion.",
    link:
      "https://etherscan.io/address/0xcc23ef76b46ed576caa5a1481f4400d2543f8006#code",
  },
  {
    title: "SynLPToken (sLP)",
    description:
      "The synthetic LP token representing the actual GDAO-ETH LP token it has claim to through the Swapico contract.",
    link:
      "https://etherscan.io/address/0xcced3780fba37761646962b2997d40b94de33954#code",
  },
  {
    title: "Treasury",
    description:
      "Treasury contract, which is a multisignatory smart contract containing our Treasury, which belongs to the Governor DAO Community",
    link:
      "https://etherscan.io/address/0x5ab8e3a7bc8be9efdd0943ab65221bdf240518c3#code",
  },
  {
    title: "UNI-V2 GDAO-ETH LP",
    description:
      "The Uniswap LP token that represents the GDAO and ETHLiquidity providers recieve thier proportionate share of the trading fees generated from trades in the pool. This token receieves a 4x boost on GDAO yield when staked in the mine.",
    link:
      "https://etherscan.io/token/0x4d184bf6f805ee839517164d301f0c4e5d25c374?a=#code",
  },
];

export default class Contracts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Contract = ({ title, description, link }) => (
      <div className="contract-card">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <a href={link} target="_blank" rel="noreferrer" className="link">
          Show contract
        </a>
      </div>
    );

    return (
      <div className="contracts-gradient-bg">
        <div className="max-width-container">
          <div className="contracts-container">
            <div className="contracts-content">
              <h1>Contracts</h1>
              {contracts.map((c, index) => (
                <Contract
                  key={index}
                  title={c.title}
                  description={c.description}
                  link={c.link}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
