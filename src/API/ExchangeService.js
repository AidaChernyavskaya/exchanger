import axios from "axios";

export default class ExchangeService {
    static async getExchangeRate (source) {
        const response = await axios.get(`https://api.apilayer.com/currency_data/live`, {
            headers: {
                apikey: process.env.REACT_APP_APIKEY
            },
            params: {
                source: source
            }
        });
        return response.data;
    }

    static async getCurrencyExchange (amount, from, to) {
        const response = await axios.get(`https://api.apilayer.com/currency_data/convert`, {
            headers: {
                apikey: process.env.REACT_APP_APIKEY
            },
            params: {
                amount: amount,
                from: from,
                to: to
            }
        });
        return response.data;
    }
}