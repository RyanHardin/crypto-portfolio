import axios from "axios";

const icons = "https://rest.coinapi.io/v1/assets/icons/small";
const currency = "https://rest.coinapi.io/v1/assets";

export const fetchCurrencyList = async () => {
  return await axios
    .all([axios.get(currency), axios.get(icons)])
    .then((res) =>
      res[0].data.map((coin) =>
        Object.assign(
          coin,
          res[1].data.find((symbol) => symbol.asset_id === coin.asset_id),
        ),
      ),
    )
    .then((list) => list.filter((obj) => obj.name != undefined && obj.url != undefined))
    .catch((error) => console.log(error));
};

export const fetchCoins = async () => {
  let coins = [];
  await axios.get("https://min-api.cryptocompare.com/data/all/coinlist?summary=true").then((response) => {
    Object.keys(response.data.Data).forEach(function (key) {
      coins.push(response.data.Data[key]);
    });
  });
  return coins;
};
