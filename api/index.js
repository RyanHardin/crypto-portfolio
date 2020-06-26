import axios from "axios";

const icons = "https://rest.coinapi.io/v1/exchanges/icons/small";
const currency = "https://rest.coinapi.io/v1/exchanges";

export const fetchCurrencyList = async () => {
  const fetchCurrency = await axios.get(currency);
  const fetchIcons = await axios.get(icons);
  return fetchCurrency.data.map((x) =>
    Object.assign(
      x,
      fetchIcons.data.find((y) => y.exchange_id == x.exchange_id),
    ),
  );
};
