import React, { createContext, useState, ReactNode } from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

interface CartContextType{
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<Product[]>([]);

    // Hàm để thêm sản phẩm vào giỏ hàng
    const addToCart = (product: Product) => {
        setCart(prevCart => {
            const existingProduct = prevCart.find(p => p.id === product.id);
            if (existingProduct) {
                return prevCart.map(p =>
                    p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (id: number) => {
        setCart(prevCart => prevCart.filter(p => p.id !== id));
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
};

// Custom hook to use CartContext easily
export const useCart = () => {
    const context = React.useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used inside CartProvider');
    }
    return context;
}
