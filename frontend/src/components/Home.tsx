import React, {useState, useEffect} from 'react';
import useProducts from '../hooks/useProducts';
import useCart from '../hooks/useCart';
import Cart from './Cart';
import Catalog from './Catalog';
import { Dropdown, DropdownProps, Message, Loader } from 'semantic-ui-react'
import useUser, {users} from '../hooks/useUser';
import { CartItem } from '../../../common/types/CartItem';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [user, setUser] = useUser();
  const {data: products, status: productsStatus} = useProducts();
  const {data: initialCartItems, status: cartStatus} = useCart(user);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Update cartItems once the GET products api call succeeds
  useEffect(() => {
    if(cartItems.length !== initialCartItems.length) {
      setCartItems(initialCartItems);
    }
  }, [initialCartItems])

  // Update the cart when a different user is selected from the dropdown
  useEffect(() => {
    setCartItems(initialCartItems);
  }, [user])

  const onDropdownChange = (_: React.SyntheticEvent, dropdownProps: DropdownProps) => {
    if(dropdownProps.value) {
      const user = users.find(user => user.email === dropdownProps.value )
      if(user) {
        setUser(user);
      }
    }
  }

  const dropdownOptions = users.map(user => ({
    key: user.email,
    text: user.email,
    value: user.email,
  }));
  
  if(cartStatus === "error" || productsStatus === "error") {
    return (
      <Message negative>
        <Message.Header>
          There was an error when trying to fetch your data.
        </Message.Header>
        <p>Please check your connection and refresh the page to try again.</p>
      </Message>
    )
  } else  if(cartStatus === "loading" || productsStatus === "loading" ||
             cartStatus === "idle" || productsStatus === "idle") {
    return (
      <Loader active>Loading</Loader>
    )
  } else return (
    <div>
      <div className={styles.dropdownContainer}>
        <Dropdown
          value={user.email}
          selection
          onChange={onDropdownChange}
          options={dropdownOptions}>
        </Dropdown>
      </div>
      <Cart
        cartItems={cartItems}
        setCartItems={setCartItems}
        user={user}
      />
      <Catalog
        products={products || []}
        cartItems={cartItems}
        setCartItems={setCartItems}
        user={user}
      />
    </div>
  )
}

export default Home;

