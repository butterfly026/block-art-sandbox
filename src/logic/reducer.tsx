//#region Actions
const LOAD = 'state/LOAD';
const ADD_TO_CART = 'state/ADD_TO_CART';
const REMOVE_FROM_CART = 'state/REMOVE_FROM_CART';
//#endregion

interface LoadAction {
  type?: 'state/LOAD';
  payload?: any; // Replace DataType with the actual type of your data
}

interface AddToCartAction {
  type?: 'state/ADD_TO_CART';
  payload?: { itemName: string };
}

interface RemoveFromCartAction {
  type?: 'state/REMOVE_FROM_CART';
  payload?: { itemName: string };
}

export type StateAction = LoadAction | AddToCartAction | RemoveFromCartAction;
export const initialState = { inventory: {}, cart: {}, error: null };

//#region Reducer
export function reducer(state: StateAction, action: StateAction) {
  switch (action.type) {
    case LOAD:
      return handleLoad(action);
    case ADD_TO_CART:
      return handleAddToCart(state, action);
    case REMOVE_FROM_CART:
      return handleRemoveFromCart(state, action);
    default:
      return state;
  }
}
//#endregion

//#region Action Creators
export function load(data: any) {
  return { type: LOAD, data };
}

export function addToCart(name: any) {
  return { type: ADD_TO_CART, name };
}

export function removeFromCart(name: any) {
  return { type: REMOVE_FROM_CART, name };
}
//#endregion

//#region Action Logic
function handleLoad({ data }: any) {
  return {
    error: null,
    cart: {},
    inventory: data.reduce((map: any, item: any) => {
      map[item.name] = {
        name: item.name,
        unitPrice: item.unitPrice,
        units: item.units,
        view: {
          ...item.view,
        },
      };
      return map;
    }, {}),
  };
}

function handleAddToCart(state: any, { name }: any) {
  const inventoryItem = state.inventory[name];
  const cartItem = state.cart[name] || {
    name,
    unitPrice: inventoryItem.unitPrice,
    quantity: 0,
    physics: {
      model: inventoryItem.view.model,
      ...inventoryItem.view.physics,
    },
  };

  // Check if there is still stock available
  if (inventoryItem.units === 0) {
    return {
      // Copy over everything
      ...state,

      // Add error message
      error: {
        text: `${name} is out of stock.`,
      },
    };
  }

  return {
    error: null,
    inventory: {
      // Copy over unmodified items
      ...state.inventory,

      // Overwrite specific item
      [name]: {
        // Copy over unmodified properties
        ...inventoryItem,

        // Commit the stock update
        units: inventoryItem.units - 1,
      },
    },
    cart: {
      // Copy over unmodified items
      ...state.cart,

      // Overwrite specific item
      [name]: {
        // Copy over unmodified properties
        ...cartItem,

        // Commit the changes
        quantity: cartItem.quantity + 1,
      },
    },
  };
}

function handleRemoveFromCart(state: any, { name }: any) {
  const inventoryItem = state.inventory[name];
  const cartItem = state.cart[name];

  if (!cartItem) {
    return {
      // Copy over everything
      ...state,

      // Add error message
      error: {
        text: `${name} is not in the cart.`,
      },
    };
  }

  if (cartItem.quantity === 1) {
    const { [name]: value, ...otherCartItems } = state.cart;
    return {
      error: null,
      inventory: {
        // Copy over unmodified items
        ...state.inventory,

        // Overwrite specific item
        [name]: {
          // Copy over unmodified properties
          ...inventoryItem,

          // Commit the stock update
          units: inventoryItem.units + 1,
        },
      },
      cart: {
        ...otherCartItems,
      },
    };
  }

  return {
    error: null,
    inventory: {
      // Copy over unmodified items
      ...state.inventory,

      // Overwrite specific item
      [name]: {
        // Copy over unmodified properties
        ...inventoryItem,

        // Commit the stock update
        units: inventoryItem.units + 1,
      },
    },
    cart: {
      // Copy over unmodified items
      ...state.cart,

      // Overwrite specific item
      [name]: {
        // Copy over unmodified properties
        ...cartItem,

        // Commit the changes
        quantity: cartItem.quantity - 1,
      },
    },
  };
}
//#endregion
