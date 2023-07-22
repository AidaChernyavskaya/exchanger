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

    // static async getCurrencyName (currency) {
    //     const response = await axios.post(`https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/currency`, {
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json",
    //             "Authorization": "Token " + process.env.REACT_APP_DADATA_KEY
    //         },
    //         body: JSON.stringify({query: currency})
    //     })
    // }
}