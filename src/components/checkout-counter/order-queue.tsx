import React, { useState, useEffect } from 'react';

import { wait } from '@utils/promise-helpers';
import PhysicalFood from './physical-food';

const DEBUG = false;

export default ({ cart, claim }: {
  cart: any,
  claim: any
}) => {
  const [items, setItems] = useState<any>([]);

  useEffect(() => {
    async function processOrder() {
      if (!claim) {
        return;
      }
  
      for await (let value of orderSequence(cart)) {
        setItems((prevItems: any) => [...prevItems, value]);
        await wait(600); // Ensure wait is properly awaited
      }
    }
    
    processOrder();
  }, [claim]);

  return items;
}

function* orderSequence(cart: any) {
  const items = Object.values(cart).flatMap(({ name, quantity, physics }: any) =>
    Array.from({ length: quantity }, (_, i) => (
      <PhysicalFood key={`${name}_${i}`} debug={DEBUG} {...physics} />
    ))
  );

  for (let i = 0; i <= items.length; i++) {
    yield items[i];
  }
}
