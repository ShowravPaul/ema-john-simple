import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let totalPrice = cart.reduce((total, element) => total += element.price , 0);// normal for loop diyeo hobe

    let shipping = 0;
    if(totalPrice>50){
        shipping = 0;
    }
    else if(totalPrice>20){
        shipping = 3;
    }
    else if(totalPrice>0){
        shipping = 5;
    }

    const tax = Math.round(totalPrice * 0.1);

    totalPrice += shipping + tax;

    const formatNumber = (num) =>{ // precision thik korar jnno decimal er pore 2 ta digit er jnno maybe! string thake then .Number diye number e convert kora lage!
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Item ordered: {cart.length}</p>
            <p>Product Price: {totalPrice}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Tax + VAT: {tax}</small></p>
            <p><b>Total Price: {totalPrice}</b></p>
        </div>
    );
};

export default Cart;