import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const Coin = (props) => {

    const {} = props

    return(
        <div>
            <h3>Bitcoin {/*Add variable, remove hard code */}</h3>
            <p>Symbol: {/* */}</p>
            <p>Price: {/* */}</p>
            <p>Total Market Cap: {/* */}</p>
            <button>Update</button>
        </div>
    )
}

export default Coin