import axios from "axios";

export const fetchCurrencyList = async () => {
  const response = await axios.get("https://rest.coinapi.io/v1/exchanges");
  return response;
};
