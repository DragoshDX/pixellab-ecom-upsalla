import { useProducts } from '@/hooks';

export const CartLineItem = ({ product }) => {
  const { quantity, productId } = product;
  const { products, loading } = useProducts();

  if (loading) {
    return <></>;
  }

  const catalogProduct = products.find((product) => {
    return productId === product.id;
  });

  if (!catalogProduct) {
    return <></>;
  }

  const { title, price } = catalogProduct;

  return (
    <tr>
      <td>{/* add a remove all button */}</td>

      <td>{/* insert image */}</td>

      <td>
        <h1>{title}</h1>
      </td>

      <td>{price}</td>

      <td>{quantity}</td>

      <td>{price * quantity}</td>
    </tr>
  );
};
