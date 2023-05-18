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
const removeCartItem = (cartItems, cartItemToRemove) => {
    const existCartItem = cartItems.find(
        (cartItem) => cartItem.id == cartItemToRemove.id 
        );
    if(existCartItem.quantity == 1){
        return cartItems.filter(cartItem => cartItem.id !== existCartItem.id);
    }    
    if(existCartItem){
        return cartItems.map((cartItem) => 
            cartItem.quantity > 0 && cartItem.id == cartItemToRemove.id
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem    
        );
    }
    
}
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems : [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
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
    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove))
    }
   
    const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, removeItemFromCart, cartCount};
    
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
