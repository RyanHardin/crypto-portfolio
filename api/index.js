import axios from "axios";

export const fetchCurrencyList = async () => {
  const response = await axios.get("https://rest.coinapi.io/v1/exchanges");
  return response.data;
};

export const fetchIcons = async (id) => {
  const response = await axios.get("https://rest.coinapi.io/v1/exchanges/icons/small");
  return response.data;
};
