import React from 'react';
const Cart = (props) => {
    const cart= props.cart;
    const totalPopulation=cart.reduce((sum,totalPopulation)=>sum+totalPopulation,0)
    return (
        <div>
            <h1>this is cart</h1>
            <p>total cart :{cart.length}</p>
            <p>total population:{totalPopulation}</p>
        </div>
    );
};

export default Cart;