import React, {useState, Dispatch, SetStateAction} from 'react';
import { Product } from '../../../common/types/Product';
import { User } from '../../../common/types/User';
import { CartItem } from '../../../common/types/CartItem';
import { Card, Image } from 'semantic-ui-react'
import ProductSelectionModal from './ProductSelectionModal';


const Catalog = (props: {
  products: Product[],
  setCartItems: Dispatch<SetStateAction<CartItem[]>>,
  cartItems: CartItem[],
  user: User,
}) => {
  const [ productModal, setProductModal ] = useState<Product | null>(null);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <h1>Catalog</h1>
      <Card.Group
        style={{
          padding: '1rem',
          maxWidth: '1400px',
        }}
        stackable
        centered
        itemsPerRow={4}>
      {props.products.map(( product, index ) => (
          <Card
            key={index}
            onClick={() => setProductModal(product)}
          >
            <Image src={product.image} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{product.name}</Card.Header>
              <Card.Content>${product.price}</Card.Content>
            </Card.Content>
          </Card>
      ))}
      </Card.Group>
      { productModal &&
        <ProductSelectionModal
          selectedProduct={productModal}
          onClose={() => setProductModal(null)}
          cartItems={props.cartItems}
        setCartItems={props.setCartItems}
        user={props.user}
        />
      }
    </div>
  )
}

export default Catalog;
