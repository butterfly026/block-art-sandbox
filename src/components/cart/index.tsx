import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Fab from '@material-ui/core/Fab';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import CartContents from './cart-contents';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default ({ items, onCheckout, onAddUnit, onRemoveUnit }: any) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCheckout = () => {
    setOpen(false);
    onCheckout();
  };

  const { rows, totalQuantity } = toRows(items);

  const fab =
    totalQuantity > 0 ? (
      <Fab
        className={classes.fab}
        variant='extended'
        color='primary'
        onClick={handleClickOpen}
      >
        <ShoppingCartIcon className={classes.extendedIcon} />
        {`View Cart (${totalQuantity})`}
      </Fab>
    ) : null;

  return (
    <>
      {fab}
      <CartContents
        rows={rows}
        open={open}
        onClose={handleClose}
        onCheckout={handleCheckout}
        onAddUnit={onAddUnit}
        onRemoveUnit={onRemoveUnit}
      />
    </>
  );
}

function toRows(items: any) {
  const keys = Object.keys(items);
  const rows: any = [];
  const totalQuantity = keys.reduce((acc, key) => {
    const item = items[key];
    rows.push(item);
    return acc + item.quantity;
  }, 0);

  return {
    rows,
    totalQuantity,
  };
}
