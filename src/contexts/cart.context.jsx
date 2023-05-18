import { createContext, useEffect, useState } from "react";
// increase item quantity
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
// decrease item quantity
const removeCartItem = (cartItems, cartItemToRemove) => {
    // check through CartItems if cartItem want to decrease exist
    const existCartItem = cartItems.find(
        (cartItem) => cartItem.id == cartItemToRemove.id 
        );
    // if quantity of this cartItem want to decrease quantity = 1
    // use filter to remove it from CartItems
    if(existCartItem.quantity == 1){
        return cartItems.filter(cartItem => cartItem.id !== existCartItem.id);
    }    
    // if quantity of this cartItem is greater than 1
    // decease the quantity by 1
    if(existCartItem){
        return cartItems.map((cartItem) => 
            cartItem.quantity > 0 && cartItem.id == cartItemToRemove.id
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem    
        );
    }
    
}
// remove item from cart
const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems : [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0,
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity , 0);
        setCartCount(newCartCount);
    })

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity) , 0);
        setCartTotal(newCartTotal);
    })

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove))
    }
    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear))
    }
   
    const value = {
        isCartOpen,
        setIsCartOpen, 
        cartItems, 
        addItemToCart, 
        removeItemFromCart, 
        cartCount,
        clearItemFromCart,
        cartTotal,
    };
    
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
