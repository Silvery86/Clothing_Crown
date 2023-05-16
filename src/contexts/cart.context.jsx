import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    // look through cartItems array to check if productToAdd item are exist or not and will return boolean result
    const existCartItem = cartItems.find(
        (cartItem) => cartItem.id == productToAdd.id 
        );
    
   
    // if productToAdd item exist in cartItems array then will inscrese quantity of this item to 1
    if(existCartItem){
        return cartItems.map((cartItem) => 
            cartItem.id == productToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        );
    }

    
   
    return [...cartItems, {...productToAdd, quantity : 1}];
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems : [],
    addItemToCart: () => {},
    cartCount: 0,
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity , 0);
        setCartCount(newCartCount);
    })

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }
   
    const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount};
    
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
