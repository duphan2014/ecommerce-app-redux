// src/components/Cart.tsx
import React from 'react';
//import { useCart } from '../context/CartContext';
import './Cart.css';
import { useSelector , useDispatch } from 'react-redux';
import { RootState } from './store';
import { removeFromCart } from './cartSlice';
import type { AppDispatch } from './store';

const Cart: React.FC = () => {
    //const { cart, removeFromCart } = useCart();
    const cart = useSelector((state: RootState) => state.cart.cart);
    //const dispatch = useDispatch;
    const dispatch: AppDispatch = useDispatch();

    return (
        <div>
            <h1>Giỏ hàng của bạn</h1>
            <div className='flex-class'>
                {cart.length === 0 ? (
                    <p>Giỏ hàng trống</p>
                ) : (
                    cart.map(product => (
                        <div key={product.id}>
                        <h2>{product.name}</h2>
                        <p>Giá: ${product.price}</p>
                        <p>Số lượng: {product.quantity}</p>
                        <button onClick={() => dispatch(removeFromCart(product.id))}>Xoá</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default Cart;