import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProduct] = useState(first10);
    const [cart, setCart] = useState([]);//useState mane hoilo 2 ta element er ekta array. ekta vaiable ar oi variable set korar jnno ekta function 

    const handleAddProduct = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);//cart er new value set korai setCart namer ei function er kaaj 
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(pd => <Product
                        handleAddProduct = {handleAddProduct}
                         product={pd}>
                         </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;