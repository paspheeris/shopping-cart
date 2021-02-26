import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Catalog from '../components/Catalog';
import { CartItem } from '../../../common/types/CartItem';
import {products, users} from './util/helpers';


const setup = (overrides = {}) => {
  return render(
    <Catalog
      products={products}
      setCartItems={() => {} }
      cartItems={[]}
      user={users[0]}
      {...overrides}
    />
  );
}

test('all products are shown', () => {
  setup();
  products.forEach(products => {
    expect(screen.getByText(products.name)).toBeInTheDocument();
  })
});

test('clicking on a product card launches the add to cart modal', () => {
  setup();

  let addToCartButton = screen.queryByRole('button', {name: /add to cart/i});
  expect(addToCartButton).not.toBeInTheDocument();

  const firstCardTextNode = screen.getByText(new RegExp(products[0].name, "i"))
  userEvent.click(firstCardTextNode);
  addToCartButton = screen.getByRole('button', {name: /add to cart/i});
  expect(addToCartButton).toBeInTheDocument();
});
