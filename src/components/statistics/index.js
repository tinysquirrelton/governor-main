import React, { Component } from "react";
import BigNumber from "bignumber.js/bignumber";
import Web3 from "web3";
import CountUp from "react-countup";
import Spinner from "../../assets/logos/governor-spinner.gif";

import ERC20 from "./ERC20.json";
import {
  ETH_ENDPOINT,
  USDCWETHAddress,
  wETHAddress,
  USDCAddress,
  GDAOAddress,
  GDAOLPAddress,
  LOYALAddress,
  loyaltyMineAddress,
  minesAddress,
  airdropAddress,
  airdropBurnAddress,
  airdropRewardsAddress,
  GDAOTreasuryAddress,
  GDAOMultisigAddress,
  pools,
  tickers,
} from "./constants";
import "./style.scss";

export default class Media extends Component {
  constructor(props) {
    super(props);
    this.web3 = new Web3(new Web3.providers.HttpProvider(ETH_ENDPOINT));
    this.wethContract = null;
    this.usdcContract = null;
    this.gdaoContract = null;
    this.pools = pools;
    this.state = {
      loaded: false,
      volume: 0,
      percentage: 0,
      totsupply: 0,
      circsupply: 0,
      liquidity: 0,
      price: 0,
      rank: 0,
      tvl: 0,
    };
  }

  async componentDidMount() {
    const [usdcContract, wethContract, gdaoContract] = await Promise.all([
      new this.web3.eth.Contract(ERC20.abi, USDCAddress),
      new this.web3.eth.Contract(ERC20.abi, wETHAddress),
      new this.web3.eth.Contract(ERC20.abi, GDAOAddress),
    ]);
    this.usdcContract = usdcContract;
    this.wethContract = wethContract;
    this.gdaoContract = gdaoContract;
    // Get pool contracts
    const poolContracts = await Promise.all(
      tickers.map((t) => {
        if (t !== "LOYAL") {
          return {
            [t]: new this.web3.eth.Contract(ERC20.abi, pools[t]["address"]),
          };
        }
      })
    );
    // Get assign contracts to corresponding pool
    poolContracts.forEach((pc) => {
      if (pc !== undefined) {
        for (const p of Object.keys(pc)) {
          this.pools[p]["contract"] = pc[p];
        }
      }
    });
    // Get Coingecko data
    const coingecko = await fetch(
      "https://api.coingecko.com/api/v3/coins/governor-dao?localization=false&tickers=true&market_data=true&community_data=true&developer_data=false&sparkline=false"
    ).then((res) => res.json());

    const totalSupply = await this.getGdaoTotalSupply();
    const circulatingSupply = await this.getGdaoCirculatingSupply();
    const liquidity = await this.getGdaoLiquidity();
    const price = await this.getGdaoPrice();
    const tvl = await this.getTVLs();
    await this.getAPYs();

    this.setState({
      loaded: true,
      volume: parseFloat(coingecko.market_data.total_volume.usd),
      percentage: parseFloat(coingecko.market_data.price_change_percentage_24h),
      totsupply: parseFloat(totalSupply),
      circsupply: parseFloat(circulatingSupply),
      liquidity: parseFloat(liquidity),
      price: parseFloat(price),
      rank: parseInt(coingecko.market_cap_rank),
      tvl: parseFloat(tvl),
    });
  }

  getWeiToETH(balance) {
    return BigNumber(this.web3.utils.fromWei(balance, "ether")).toNumber();
  }

  async getGdaoTotalSupply() {
    let totalSupply = await this.gdaoContract.methods.totalSupply().call();
    totalSupply = await this.getWeiToETH(totalSupply);
    return totalSupply.toFixed(2);
  }

  async getGdaoCirculatingSupply() {
    let circulatingSupply = await this.getGdaoTotalSupply();
    let excludeAddresses = [
      loyaltyMineAddress,
      minesAddress,
      airdropAddress,
      airdropBurnAddress,
      airdropRewardsAddress,
      GDAOTreasuryAddress,
      GDAOMultisigAddress,
    ];
    for (const addr of excludeAddresses) {
      let balance = await this.gdaoContract.methods.balanceOf(addr).call();
      balance = await this.getWeiToETH(balance);
      circulatingSupply -= balance;
    }
    return circulatingSupply.toFixed(2);
  }

  async getGdaoLiquidity() {
    let wethInLpWei = await pools["WETH"].contract.methods
      .balanceOf(pools["GDAOLP"].address)
      .call();
    let wethInLp = await this.getWeiToETH(wethInLpWei);

    let tokenInLpWei = await this.gdaoContract.methods
      .balanceOf(pools["GDAOLP"].address)
      .call();
    let tokenInLp = await this.getWeiToETH(tokenInLpWei);
    let gdaoPrice = await this.getGdaoPrice();
    let wethPrice = await this.getPrice(
      pools["WETH"].contract,
      pools["WETH"].lpAddress
    );

    let gdaoLiquidity = wethInLp * wethPrice + tokenInLp * gdaoPrice;
    return gdaoLiquidity.toFixed(2);
  }

  async getPrice(tokenContract, tokenLP) {
    if (this.web3.utils.isAddress(tokenLP)) {
      //get token price in weth
      let wethInLpWei = await this.wethContract.methods
        .balanceOf(tokenLP)
        .call();
      let wethInLp = await this.getWeiToETH(wethInLpWei);

      let tokenInLpWei = await tokenContract.methods.balanceOf(tokenLP).call();
      let tokenInLp;

      if (tokenLP === pools["USDC"]["lpAddress"]) {
        tokenInLp = tokenInLpWei / 10 ** 6;
      } else if (tokenLP === pools["WBTC"]["lpAddress"]) {
        tokenInLpWei = BigNumber(tokenInLpWei).toNumber();
        tokenInLp = tokenInLpWei / 10 ** 8;
      } else {
        tokenInLp = await this.getWeiToETH(tokenInLpWei);
      }

      let tokenPriceInEth; // Price in ETH

      if (tokenLP == pools["WETH"]["lpAddress"]) {
        tokenPriceInEth = 1;
      } else {
        tokenPriceInEth = wethInLp / tokenInLp;
      }

      //get weth price in usdc
      let wethInUsdcLpWei = await this.wethContract.methods
        .balanceOf(USDCWETHAddress)
        .call();
      let wethInUsdcLp = await this.getWeiToETH(wethInUsdcLpWei);
      let usdcInLpMwei = BigNumber(
        await this.usdcContract.methods.balanceOf(USDCWETHAddress).call()
      ).toNumber();
      let usdcInLp = usdcInLpMwei / 10 ** 6;
      let wethPrice = usdcInLp / wethInUsdcLp; // Price of WETH in USDC

      let price = 1;

      if (tokenLP != pools["USDC"]["lpAddress"]) {
        price = tokenPriceInEth * wethPrice;
      }

      return price; // Price of Token in USDC
    }
  }

  async getGdaoPrice() {
    let price = await this.getPrice(this.gdaoContract, GDAOLPAddress);
    return price.toFixed(2);
  }

  async getEachAPY(tokenContract, tokenLP) {
    if (this.web3.utils.isAddress(tokenLP)) {
      let bB;
      const gdaoPrice = await this.getGdaoPrice();
      let xBy;
      if (tokenContract === pools["GDAOLP"].contract) {
        xBy = 40000000;
      } else if (tokenContract === pools["WETH"].contract) {
        xBy = 10000;
      } else {
        xBy = 20000000;
      }

      let b = await tokenContract.methods.balanceOf(minesAddress).call();

      if (
        tokenContract === pools["USDC"].contract ||
        tokenContract === pools["WBTC"].contract
      ) {
        b = BigNumber(b).toNumber();
      }
      if (tokenContract === pools["USDC"].contract) {
        bB = b / 10 ** 6;
      } else if (tokenContract === pools["WBTC"].contract) {
        bB = b / 10 ** 8;
      } else {
        bB = await this.getWeiToETH(b);
      }

      let price = 0;

      if (tokenContract === pools["GDAOLP"].contract) {
        let wethPrice = await this.getPrice(
          pools["WETH"]["contract"],
          pools["WETH"]["lpAddress"]
        );

        let gdaoInLp = await this.gdaoContract.methods
          .balanceOf(GDAOLPAddress)
          .call();

        gdaoInLp = await this.getWeiToETH(gdaoInLp);
        let wethInLp = await pools["WETH"]["contract"].methods
          .balanceOf(GDAOLPAddress)
          .call();

        wethInLp = await this.getWeiToETH(wethInLp);

        let gdaoValue = new BigNumber(gdaoInLp * gdaoPrice)
          .decimalPlaces(2)
          .toNumber();
        let wethValue = new BigNumber(wethInLp * wethPrice)
          .decimalPlaces(2)
          .toNumber();

        let LPTokenSupply = await pools["GDAOLP"].contract.methods
          .totalSupply()
          .call();
        LPTokenSupply = await this.getWeiToETH(LPTokenSupply);

        price = (gdaoValue + wethValue) / LPTokenSupply;
      } else {
        price = await this.getPrice(tokenContract, tokenLP);
      }

      let n = gdaoPrice * xBy;
      let d = price * bB;
      let apy = n / d;

      return apy;
    }
  }

  async getEachTVL(index) {
    if (index == "GDAOLP") {
      let gdaoPrice = await this.getGdaoPrice();
      let wethPrice = await this.getPrice(
        pools["WETH"]["contract"],
        pools["WETH"]["lpAddress"]
      );

      let gdaoInLp = await this.gdaoContract.methods
        .balanceOf(GDAOLPAddress)
        .call();

      gdaoInLp = await this.getWeiToETH(gdaoInLp);
      let wethInLp = await pools["WETH"]["contract"].methods
        .balanceOf(GDAOLPAddress)
        .call();

      wethInLp = await this.getWeiToETH(wethInLp);

      let gdaoValue = new BigNumber(gdaoInLp * gdaoPrice)
        .decimalPlaces(2)
        .toNumber();
      let wethValue = new BigNumber(wethInLp * wethPrice)
        .decimalPlaces(2)
        .toNumber();

      let lpValue = gdaoValue + wethValue;

      let lpTotalSupply = await pools[index]["contract"].methods
        .totalSupply()
        .call();
      lpTotalSupply = await this.getWeiToETH(lpTotalSupply);
      let tokenBalance = await pools[index]["contract"].methods
        .balanceOf(minesAddress)
        .call();
      tokenBalance = await this.getWeiToETH(tokenBalance);

      let tokenTVL = (tokenBalance / lpTotalSupply) * lpValue;
      pools[index]["tvl"] = tokenTVL;

      return tokenTVL;
    } else if (index == "LOYAL") {
      let price = await this.getGdaoPrice();

      let tokenBalance = await this.gdaoContract.methods
        .balanceOf(loyaltyMineAddress)
        .call();

      tokenBalance = await this.getWeiToETH(tokenBalance);

      let tokenTVL = new BigNumber(tokenBalance * price)
        .decimalPlaces(2)
        .toNumber();
      pools[index]["tvl"] = tokenTVL;

      return tokenTVL;
    } else {
      let price = await this.getPrice(
        pools[index]["contract"],
        pools[index]["lpAddress"]
      );

      let tokenBalance = await pools[index]["contract"].methods
        .balanceOf(minesAddress)
        .call();

      if (index == "WBTC") {
        tokenBalance = BigNumber(tokenBalance).toNumber();
        tokenBalance = tokenBalance / 10 ** 8;
      } else if (index == "USDC") {
        tokenBalance = BigNumber(tokenBalance).toNumber();
        tokenBalance = tokenBalance / 10 ** 6;
        price = 1;
      } else {
        tokenBalance = await this.getWeiToETH(tokenBalance);
      }

      let tokenTVL = new BigNumber(tokenBalance * price)
        .decimalPlaces(2)
        .toNumber();
      pools[index]["tvl"] = tokenTVL;

      return tokenTVL;
    }
  }

  async getTVLs() {
    const [
      LOYAL,
      GDAOLP,
      WBTC,
      WETH,
      LINK,
      USDC,
      AAVE,
      SNX,
      UNI,
      YFI,
    ] = await Promise.all(
      tickers.map(async (t) => {
        let tvl = await this.getEachTVL(t);
        this.pools[t].tvl = tvl;
        return tvl;
      })
    );
    return LOYAL + GDAOLP + WBTC + WETH + LINK + USDC + AAVE + SNX + UNI + YFI;
  }

  async getAPYs() {
    await Promise.all(
      tickers.map(async (t) => {
        if (t !== "LOYAL") {
          let apy = await this.getEachAPY(
            this.pools[t].contract,
            this.pools[t].lpAddress
          );
          this.pools[t].apy = apy;
        }
      })
    );
  }

  render() {
    return (
      <div className="statistics-gradient-bg">
        {this.state.loaded === false && (
          <img src={Spinner} className="statistics-spinner" />
        )}
        <div className="max-width-container">
          {this.state.loaded === true && (
            <div className="statistics-container">
              <div className="statistics-content">
                <h1>Statistics</h1>
                <h2>Governor (GDAO)</h2>
                <div className="statistics-item">
                  <div className="title">Rank</div>
                  <div className="value">
                    <CountUp separator={","} end={this.state.rank} />
                  </div>
                </div>
                <div className="statistics-item">
                  <div className="title">Price</div>
                  <div className="value">
                    $
                    <CountUp
                      decimals={2}
                      separator={","}
                      end={this.state.price}
                    />
                  </div>
                </div>
                <div className="statistics-item">
                  <div className="title">24h price change</div>
                  <div
                    className={`value ${
                      this.state.percentage >= 0 ? "positive" : "negative"
                    }`}
                  >
                    <CountUp
                      decimals={2}
                      separator={","}
                      end={this.state.percentage}
                    />
                    %
                  </div>
                </div>
                <div className="statistics-item">
                  <div className="title">24h price volume</div>
                  <div className="value">
                    $
                    <CountUp
                      decimals={2}
                      separator={","}
                      end={this.state.volume}
                    />
                  </div>
                </div>
                <div className="statistics-item">
                  <div className="title">Liquidity</div>
                  <div className="value">
                    $
                    <CountUp
                      decimals={2}
                      separator={","}
                      end={this.state.liquidity}
                    />
                  </div>
                </div>
                <div className="statistics-item">
                  <div className="title">Cirulating supply</div>
                  <div className="value">
                    <CountUp separator={","} end={this.state.circsupply} />/
                    {this.state.totsupply}
                  </div>
                </div>
                <h2>Total Value Locked</h2>
                <div className="tvl-item">
                  <div className="title">Mines + LOYAL Staking</div>
                  <div className="value">
                    $<CountUp separator={","} end={this.state.tvl} />
                  </div>
                </div>
                <h2>Liquidity Mine</h2>
                {Object.keys(this.pools).map(
                  (p, index) =>
                    p !== "LOYAL" && (
                      <div key={index} className="pool-item">
                        <img
                          src={this.pools[p].logo}
                          alt=""
                          draggable={false}
                        />
                        <div className="pool-ticker">{p}</div>
                        <div className="pool-content">
                          <div className="pool-stats">
                            <span className="unit">TVL: </span>$
                            <CountUp separator={","} end={this.pools[p].tvl} />
                          </div>
                          <div className="pool-stats">
                            <span className="unit">APY: </span>
                            <CountUp separator={","} end={this.pools[p].apy} />%
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
