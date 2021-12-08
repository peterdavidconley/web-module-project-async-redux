import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getBitcoin } from '../actions/index';
import '../App.css';

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
        <div className='Coin'>
            <br />
            <p>Symbol: {coin.symbol}</p>
            <p>Price: ${coin.price}</p>
            <p>Total Market Cap: ${coin.marketCap}</p>
            <br />
            <button onClick={handleClick}>Update</button>
            <br />
            <br />
            <p>Source: <a href='https://api.coinstats.app/public/v1/coins/bitcoin?currency=USD'>https://api.coinstats.app/public/v1/coins/bitcoin?currency=USD</a></p>
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
