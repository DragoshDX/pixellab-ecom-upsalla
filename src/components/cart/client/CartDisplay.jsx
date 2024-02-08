import { cartContext } from '@/contexts';
import { useContext } from 'react';
import { CartLineItem } from '.';

export const CartDisplay = () => {
  const { cartProducts } = useContext(cartContext);

  // insert loader style as homework

  return (
    <table>
      <thead>
        <th></th>
        <th></th>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
      </thead>

      <tbody>
        {cartProducts.map((cartProduct) => {
          return (
            <CartLineItem
              key={cartProduct.productId}
              product={cartProduct}
            ></CartLineItem>
          );
        })}
      </tbody>
    </table>
  );
};
