import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getBitcoin } from '../actions/index';


const Coin = (props) => {

    const { coin, isFetching, error } = props

    useEffect(() => {
        props.getBitcoin();
       }, [])
     
       if (error) {
         return <h2>We got an error: {error}</h2>;
       }
     
       if (isFetching) {
         return <h2>Fetching Bitcoin Data</h2>;
       }
     
       const handleClick = () => {
           props.getBitcoin();
         
       }

    return(
        <div>
            <p>Symbol: {coin.symbol}</p>
            <p>Price: {coin.price}</p>
            <p>Total Market Cap: {coin.marketCap}</p>
            <button onClick={handleClick}>Update</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      coin: state.coin,
      isFetching: state.isFetching,
      error: state.error
    };
  };
  
export default connect(mapStateToProps, {getBitcoin})(Coin);
