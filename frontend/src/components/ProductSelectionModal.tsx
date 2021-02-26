import React, {useState, useEffect, Dispatch, SetStateAction} from 'react';
import { Product } from '../../../common/types/Product';
import { Variant } from '../../../common/types/Variant';
import { User } from '../../../common/types/User';
import { CartItem } from '../../../common/types/CartItem';
import { Card, Grid, Image, Modal, Header, Button, Dropdown, DropdownProps } from 'semantic-ui-react'
import useCart from '../hooks/useCart';
import useUser from '../hooks/useUser';
import apiClient from '../util/apiClient';

const ProductSelectionModal = (props: {
  selectedProduct: Product,
  onClose: () => void,
  setCartItems: Dispatch<SetStateAction<CartItem[]>>,
  cartItems: CartItem[],
  user: User,
}) => {
  const [ selectedVariant, setSelectedVariant ] = useState<Variant>(props.selectedProduct.variants[0]);
  const [variantIsInCart, setVariantIsInCart] = useState(false);

  useEffect(() => {
    const matchingCartItem = props.cartItems.find(cartItem => {
      return cartItem.product.id === props.selectedProduct.id &&
             cartItem.variant.id === selectedVariant.id;
    })
      setVariantIsInCart(matchingCartItem !== undefined);
  }, [selectedVariant, props.cartItems])

  const dropdownOnChange = (_: React.SyntheticEvent, d: DropdownProps) => {
    const matchingVariant = props.selectedProduct.variants.find(variant => variant.name === d.value );
    if(matchingVariant) {
      setSelectedVariant(matchingVariant);
    }
  }

  const dropdownOptions = props.selectedProduct.variants
                               .filter(variant => variant.quantity > 0 )
                               .map(variant => ({
                                 key: variant.name,
                                 text: variant.name,
                                 value: variant.name,
                               }) )

  return (
    <Modal
      style={{maxHeight: '700px'}}
      onClose={props.onClose}
      open={props.selectedProduct !== null }
    >
      <Modal.Header>{props.selectedProduct.name}</Modal.Header>
      <Modal.Content image>
        <Image
          style={{height: 'intrinsic'}}
          size='large' src={props.selectedProduct.image} />
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '1rem',
          justifyContent: 'space-between',
        }}>
          <p>
            {props.selectedProduct.description}
          </p>
          <div>
            <Dropdown
              value={selectedVariant.name}
              selection
              onChange={dropdownOnChange}
              options={dropdownOptions}
            >
            </Dropdown>
          </div>
          <p>Items in stock: {selectedVariant.quantity}</p>
          <p>${props.selectedProduct.price}</p>
        </div>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={props.onClose}>
          Close
        </Button>
        <Button
        disabled={variantIsInCart}
          content={variantIsInCart
                 ? "Item in cart"
                 : "Add to cart"
          }
          onClick={() => {
            props.setCartItems(props.cartItems.concat({
              product: props.selectedProduct,
              variant: selectedVariant,
              quantity: 1,
            }))
            apiClient.post(`/cart`, {
              userId: props.user.id,
              productId: props.selectedProduct.id,
              variantId: selectedVariant.id,
              quantity: 1,
            })
            props.onClose()
          }}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
  
}

export default ProductSelectionModal;
