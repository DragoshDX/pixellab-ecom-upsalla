import { cartContext } from '@/contexts';
import { useContext } from 'react';

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
            <tr key={cartProduct.productId}>
              <td>
                {cartProduct.quantity} {cartProduct.productId}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
