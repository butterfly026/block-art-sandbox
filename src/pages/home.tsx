import "../assets/styles/App.css"
import React, { useState, useReducer, useEffect } from 'react';

import Gallery from '@components/gallery';
import Cart from '@components/cart';
import StatusMessage from '@components/status-message';
import CheckoutCounter from '@components/checkout-counter';

import data from '@data/items';
import * as food from '@logic/food';

import TitleBar from "../components/layout/header";

function App() {
  const [checkooutOpen, setCheckoutOpen] = useState(false);
  const [foodState, foodDispatch] = useReducer(food.reducer, food.initialState);

  const handleCheckout = () => {
    setCheckoutOpen(true);
  };

  const handleExitCheckout = () => {
    setCheckoutOpen(false);
    // Reset everything
    foodDispatch(food.load(data) as food.FoodAction);
  };

  const handleAddUnitToCart = (itemName: any) => {
    foodDispatch(food.addToCart(itemName) as food.FoodAction);
  };

  const handleRemoveUnitFromCart = (itemName: any) => {
    foodDispatch(food.removeFromCart(itemName) as food.FoodAction);
  };

  // Initialize data
  useEffect(() => {
    foodDispatch(food.load(data) as food.FoodAction);
  }, []);

  const { inventory, cart, error } = foodState;
  return (    
    <div className="App">
      <TitleBar></TitleBar>
      <header className="App-header">
      <Gallery
        inventory={inventory}
        cart={cart}
        onItemAddToCart={handleAddUnitToCart}
      />
      <Cart
        items={cart}
        onCheckout={handleCheckout}
        onAddUnit={handleAddUnitToCart}
        onRemoveUnit={handleRemoveUnitFromCart}
      />
      <CheckoutCounter
        cart={cart}
        open={checkooutOpen}
        onExit={handleExitCheckout}
      />

      <StatusMessage msg={error} />
      </header>
    </div>
  );
}

export default App;
