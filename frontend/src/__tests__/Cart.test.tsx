import React, {useState} from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import mockProducts from '../../../common/mockData/product.json';
import mockVariants from '../../../common/mockData/variant.json';
import mockUsers from '../../../common/mockData/user.json';
import userEvent from '@testing-library/user-event'
import Cart from '../components/Cart';

import {cartItems, users} from './util/helpers';


const setup = (overrides = {}) => {
  return render(
    <Cart
      cartItems={cartItems}
      setCartItems={() => {} }
      user={users[0]}
      {...overrides}
    />
  );
}

test('the correct subtotal price is displayed', () => {
  setup();
  const calculatedSubtotal = cartItems.reduce((accum, cartItem) => {
    return accum + (parseInt(cartItem.product.price, 10) * cartItem.quantity);
  }, 0);
  const displayedSubtotal = screen.getByTestId('subtotal').textContent.trim();
  expect(displayedSubtotal).toBe(`$${calculatedSubtotal}`);
});

