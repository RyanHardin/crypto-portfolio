import axios from "axios";

const icons = "https://rest.coinapi.io/v1/assets/icons/small";
const currency = "https://rest.coinapi.io/v1/assets";

export const fetchCurrencyList = async () => {
  const fetchCurrency = await axios.get(currency).catch((error) => console.log(error));
  const fetchIcons = await axios.get(icons).catch((error) => console.log(error));
  const merge = fetchCurrency.data.map((x) =>
    Object.assign(
      x,
      fetchIcons.data.find((y) => y.asset_id == x.asset_id),
    ),
  );

  return merge.filter((item) => item.name != undefined && item.url != undefined);
};
