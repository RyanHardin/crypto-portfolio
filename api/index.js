import axios from "axios";

export const fetchCoins = async () => {
  let coins = [];
  await axios.get("https://min-api.cryptocompare.com/data/all/coinlist?summary=true").then((response) => {
    Object.keys(response.data.Data).forEach(function (key) {
      coins.push(response.data.Data[key]);
    });
  });
  return coins;
};

export const getTopCoins = async () => {
  let coins = [];
  await axios.get("https://min-api.cryptocompare.com/data/all/coinlist").then((response) => {
    Object.keys(response.data.Data).forEach(function (key) {
      coins.push(response.data.Data[key]);
    });
  });

  return coins
    .filter((item) => Number(item["SortOrder"]) < 16)
    .sort(function (a, b) {
      var x = a["SortOrder"];
      var y = b["SortOrder"];
      return x < y ? -1 : x > y ? 1 : 0;
    });
};
