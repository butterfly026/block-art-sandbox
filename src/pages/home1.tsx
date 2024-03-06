import "../assets/styles/App.css"
import React, { useState, useReducer, useEffect } from 'react';

import Gallery from '@components/gallery';
import Cart from '@components/cart';
import StatusMessage from '@components/status-message';
import CheckoutCounter from '@components/checkout-counter';

import data from '@data/items';
import * as reducer from '@logic/reducer';

import TitleBar from "../components/layout/header";

function App() {
  const [checkooutOpen, setCheckoutOpen] = useState(false);
  const [itemState, itemDispatch] = useReducer(reducer.reducer, reducer.initialState);

  const handleCheckout = () => {
    setCheckoutOpen(true);
  };

  const handleExitCheckout = () => {
    setCheckoutOpen(false);
    // Reset everything
    itemDispatch(reducer.load(data) as reducer.StateAction);
  };

  const handleAddUnitToCart = (itemName: any) => {
    itemDispatch(reducer.addToCart(itemName) as reducer.StateAction);
  };

  const handleRemoveUnitFromCart = (itemName: any) => {
    itemDispatch(reducer.removeFromCart(itemName) as reducer.StateAction);
  };

  // Initialize data
  useEffect(() => {
    itemDispatch(reducer.load(data) as reducer.StateAction);
  }, []);

  const { inventory, cart, error } = itemState;
  return (    
    <div className="App">
      <TitleBar></TitleBar>
      <header className="App-header" style={{paddingTop: '45px'}}>
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
