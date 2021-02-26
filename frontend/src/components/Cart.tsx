import React, {Dispatch, SetStateAction} from 'react';
import { Button, Header, Icon, Segment, Modal, Image, Loader } from 'semantic-ui-react'
import { CartItem } from '../../../common/types/CartItem';
import { User } from '../../../common/types/User';
import apiClient from '../util/apiClient';
import styles from '../styles/Cart.module.css';

const Cart = (props: {
  cartItems: CartItem[],
  setCartItems: Dispatch<SetStateAction<CartItem[]>>,
  user: User,
}) => {

  const clearCart = () => {
    props.setCartItems([]);
    apiClient.delete(`/cart?userId=${props.user.id}`)
  }

  // Helper for cartItem identity
  const itemsMatch = (item1: CartItem, item2: CartItem) => {
    return item1.product.id === item2.product.id &&
           item1.variant.id === item2.variant.id
  }

  const deleteCartItem = (itemToDelete: CartItem) => {
    props.setCartItems(props.cartItems.filter(cartItem => !itemsMatch(cartItem, itemToDelete)));

    apiClient.delete(`/cart?userId=${props.user.id}&productId=${itemToDelete.product.id}&variantId=${itemToDelete.variant.id}`)
  }

  const updateQuantity = (itemToUpdate: CartItem, change: number) => {
    props.setCartItems(props.cartItems.map(cartItem => {
      if(itemsMatch(itemToUpdate, cartItem)) {
        return {
          ...cartItem,
          quantity: cartItem.quantity + change,
        }
      } else return cartItem;
    }))

    const matchingItem = props.cartItems.find(cartItem => itemsMatch(cartItem, itemToUpdate));
    if(matchingItem) {
      apiClient.patch('/cart', {
        userId: props.user.id,
        productId: matchingItem.product.id,
        variantId: matchingItem.variant.id,
        quantity: matchingItem.quantity + change,
      })
    }
  }

  const cartSubtotal = props.cartItems.reduce(( accum, cartItem ) => {
    return accum + ( parseInt(cartItem.product.price, 10) * cartItem.quantity);
  }, 0)

  if(!props.cartItems || props.cartItems.length === 0) {
    return (
      <Segment placeholder={true}>
        <Header icon>
          <h1>Cart</h1>
          <Icon name='cart' />
          Your cart is currently empty.
          <br />
          Select an item from the catalog to get started.
        </Header>
      </Segment>
    )
  }

  return (
    <Segment placeholder={true}>
      <h1>Cart</h1>
      <div className={styles.cartItemsContainer}>
        {props.cartItems.map(( cartItem, index ) => (
          <div
            className={styles.cartRow}
            key={index}
          >
            <div className={styles.flexRow}>
              <Image src={cartItem.product.image} ui={false} />
              <div className={styles.nameVariantContainer}>
                <div>{cartItem.product.name}</div>
                <div className={styles.variantName}>{cartItem.variant.name}</div>
              </div>
            </div>
            <div className={styles.quantityPriceContainer}>
              <div className={styles.centeredFlexRow}>
                <Button
                  icon
                  circular
                  disabled={cartItem.quantity <= 0}
                  onClick={() => updateQuantity(cartItem, -1) }
                >
                  <Icon name='minus' />
                </Button>
                <div className={styles.cartItemQuantity}>{cartItem.quantity}</div>
                <Button
                  disabled={cartItem.quantity >= cartItem.variant.quantity}
                  icon
                  circular
                  onClick={() => updateQuantity(cartItem, 1) }
                >
                  <Icon name='plus' />
                </Button>
              </div>
              <div className={styles.priceContainer}>
                { cartItem.quantity === 0
                  ? ( <Button
                        style={{marginRight: 0,}}
                        disabled={cartItem.quantity >= cartItem.variant.quantity}
                        icon
                        circular
                        color="red"
                        onClick={() => deleteCartItem(cartItem) }
                      >

                    <Icon name='delete' />
                  </Button>)
                  : <p>${parseInt(cartItem.product.price, 10) * cartItem.quantity}</p>
                }
              </div>
            </div>
          </div>

        ))}
        <div className={`${styles.cartRow} ${styles.subtotalContainer}`}>
          <div>
            <h3>Subtotal</h3>
          </div>
          <div>
            <h3 data-testid="subtotal">
              {`$${cartSubtotal}`
              }
            </h3>
          </div>
        </div>
      </div>
      <Modal
        trigger={<Button size="huge" positive>Checkout</Button>}
        header='Todo'
        content='This is where the checkout flow would be started.'
        actions={[
          {key: 'clearCart', content: 'Clear Cart', negative: true, onClick: clearCart},
          { key: 'done', content: 'Done', positive: true,},
        ]}
      />
    </Segment>
  )
}

export default Cart;
