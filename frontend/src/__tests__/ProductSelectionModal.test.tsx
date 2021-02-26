import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import mockProducts from '../../../common/mockData/product.json';
import mockVariants from '../../../common/mockData/variant.json';
import mockUsers from '../../../common/mockData/user.json';
import userEvent from '@testing-library/user-event'
import ProductSelectionModal from '../components/ProductSelectionModal';
import { CartItem } from '../../../common/types/CartItem';

const selectedProduct = {
  ...mockProducts[0],
  price: `${mockProducts[0].price}`,
  id: 1,
  variants: mockVariants.map(( variant, index ) => ({
    name: variant.name,
    quantity: (index + 1) * 5,
    id: index + 1,
  }) )
};

const setup = (overrides = {}) => {
  return render(
    <ProductSelectionModal
      selectedProduct={selectedProduct}
      onClose={() => {}}
      setCartItems={() => {} }
      cartItems={[]}
      user={mockUsers[0]}
      {...overrides}
    />
  );
}

test('the correct product name is displayed', () => {
  setup();
  expect(screen.getByText(new RegExp(selectedProduct.name, "i"))).toBeInTheDocument();
});

test('selecting different variants correctly shows the quantity in stock for each', () => {
  setup();
  const variantOneStockText = `Items in stock: ${selectedProduct.variants[0].quantity}`
  expect(screen.getByText(new RegExp(variantOneStockText, "i"))).toBeInTheDocument();

  const dropdown = screen.getByRole('listbox');
  dropdown.focus();
  fireEvent.keyDown(dropdown, {key: 'ArrowDown', code: 40});

  const variantTwoStockText = `Items in stock: ${selectedProduct.variants[1].quantity}`
  expect(screen.getByText(new RegExp(variantTwoStockText, "i"))).toBeInTheDocument();
})

test('the same variant cannot be added to the cart twice', () => {
  const cartItems: CartItem[] = [{
    product: selectedProduct,
    variant: selectedProduct.variants[0],
    quantity: 1,
  }]
  setup({
    cartItems
  });
  const button = screen.getByRole('button', {name: /item in cart/i});
  expect(button).toBeDisabled();

})
