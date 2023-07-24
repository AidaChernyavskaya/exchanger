import ExchangeRate from "../../pages/ExchangeRate";
import CurrencyExchange from "../../pages/CurrencyExchange";

export const routes = [
    {path: '/rate', element: <ExchangeRate/>},
    {path: '/exchange', element: <CurrencyExchange/>}
]