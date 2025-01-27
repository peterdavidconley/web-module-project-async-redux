import { FETCH_START, FETCH_FAIL, FETCH_SUCCESS } from '../actions/index';

const initialState = {
    
"coin": {
        "id": "bitcoin",
        "icon": "https://static.coinstats.app/coins/Bitcoin6l39t.png",
        "name": "Bitcoin",
        "symbol": "BTC",
        "rank": 1,
        "price": 50727.330274100466,
        "priceBtc": 1,
        "volume": 36721400765.30378,
        "marketCap": 958514769008.4764,
        "availableSupply": 18895431,
        "totalSupply": 21000000,
        "priceChange1h": 0.58,
        "priceChange1d": 0.64,
        "priceChange1w": -10.67,
        "websiteUrl": "http://www.bitcoin.org",
        "twitterUrl": "https://twitter.com/bitcoin",
        "exp": ["https://blockchair.com/bitcoin/", "https://btc.com/", "https://btc.tokenview.com/"]
        },
  "isFetching": false,
  "error": ''
 }

export const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case(FETCH_START):
        return({
          ...state,
          person: {},
          isFetching: true,
          error: ''
        })
        case(FETCH_SUCCESS):
        return({
          ...state,
          person: action.payload,
          isFetching: false,
          error: '',
          
        })
        case(FETCH_FAIL): 
        return ({
          ...state,
          person: {},
          isFetching: false,
          error: action.payload,
        })
        default:
          return state;
      }
   
}