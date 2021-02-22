import Logo from "../../assets/logos/governor-plain.png";
import WBTC from "../../assets/coins/wbtc.png";
import WETH from "../../assets/coins/weth.png";
import USDC from "../../assets/coins/usdc.png";
import UNI from "../../assets/coins/uni.png";
import YFI from "../../assets/coins/yfi.png";
import SNX from "../../assets/coins/snx.png";
import AAVE from "../../assets/coins/aave.png";
import LINK from "../../assets/coins/link.png";

export const ETH_ENDPOINT =
  "https://mainnet.infura.io/v3/e35323bc24d243c6a971cefcaaa55953";

export const USDCWETHAddress = "0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc";

export const wETHAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
export const USDCAddress = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";

export const GDAOAddress = "0x515d7E9D75E2b76DB60F8a051Cd890eBa23286Bc";
export const GDAOLPAddress = "0x4D184bf6F805Ee839517164D301f0C4e5d25c374";

export const LOYALAddress = "0xeda4f23957d2f819c22761c4d6d6157bd3fe0724";

export const loyaltyMineAddress = "0xda58927f4065f1d02a6ea850c2aac49d7362a643";
export const minesAddress = "0x4dac3e07316d2a31baabb252d89663dee8f76f09";
export const airdropAddress = "0x7ea0f8bb2f01c197985c285e193dd5b8a69836c0";
export const airdropBurnAddress = "0x925b1f1bd3c28ea9f03fc00b8e069ef738ff740d";
export const airdropRewardsAddress =
  "0xee6ac0ae56497c3479e858f0e9d59f5d8f8f89ea";
export const GDAOTreasuryAddress = "0xfdb3fd250698d9430949854e0fc4753c1ac42c55";
export const GDAOMultisigAddress = "0x5ab8e3a7bc8be9efdd0943ab65221bdf240518c3";

export const tickers = [
  "LOYAL",
  "GDAOLP",
  "WBTC",
  "WETH",
  "LINK",
  "USDC",
  "AAVE",
  "SNX",
  "UNI",
  "YFI",
];

export var pools = {
  LOYAL: {
    tvl: 0,
  },
  GDAOLP: {
    logo: Logo,
    address: "0x4D184bf6F805Ee839517164D301f0C4e5d25c374",
    lpAddress: "0x4D184bf6F805Ee839517164D301f0C4e5d25c374",
    contract: null,
    tvl: 0,
    apy: 0,
  },
  WBTC: {
    logo: WBTC,
    address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    lpAddress: "0xBb2b8038a1640196FbE3e38816F3e67Cba72D940",
    contract: null,
    tvl: 0,
    apy: 0,
  },
  WETH: {
    logo: WETH,
    address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    lpAddress: "0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc",
    contract: null,
    tvl: 0,
    apy: 0,
  },
  LINK: {
    logo: LINK,
    address: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
    lpAddress: "0xa2107FA5B38d9bbd2C461D6EDf11B11A50F6b974",
    contract: null,
    tvl: 0,
    apy: 0,
  },
  USDC: {
    logo: USDC,
    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    lpAddress: "0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc",
    contract: null,
    tvl: 0,
    apy: 0,
  },
  AAVE: {
    logo: AAVE,
    address: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
    lpAddress: "0xDFC14d2Af169B0D36C4EFF567Ada9b2E0CAE044f",
    contract: null,
    tvl: 0,
    apy: 0,
  },
  SNX: {
    logo: SNX,
    address: "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
    lpAddress: "0x43AE24960e5534731Fc831386c07755A2dc33D47",
    contract: null,
    tvl: 0,
    apy: 0,
  },
  UNI: {
    logo: UNI,
    address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
    lpAddress: "0xd3d2E2692501A5c9Ca623199D38826e513033a17",
    contract: null,
    tvl: 0,
    apy: 0,
  },
  YFI: {
    logo: YFI,
    address: "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
    lpAddress: "0x2fDbAdf3C4D5A8666Bc06645B8358ab803996E28",
    contract: null,
    tvl: 0,
    apy: 0,
  },
};
