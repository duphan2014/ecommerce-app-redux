import React from 'react';
import './ProductList.css';
import Counter from './Counter';
//import { useCart } from '../context/CartContext';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';

interface Product {
    id: number;
    name: string;
    price: number;
}

const products: Product[] = [
    { id: 1, name: 'Áo thun', price: 200000 },
    { id: 2, name: 'Quần jeans', price: 500000 },
    { id: 3, name: 'Giày thể thao', price: 800000 },
]

const ProductList: React.FC = () => {
    //const { addToCart } = useCart();
    const dispatch = useDispatch();

    const handleAddToCart = (product: Product) => {
        dispatch(addToCart({...product, quantity: 1}));
    }

    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product-item">
                    <h2>{product.name}</h2>
                    <p>Giá: ${product.price} VND</p>
                    <p><Counter /></p>
                    <button onClick={() => handleAddToCart(product)}>Thêm vào giỏ hàng</button>
                </div>
            ))}
        </div>
    );
}

export default ProductList;