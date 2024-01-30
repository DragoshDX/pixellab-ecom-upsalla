import { useProducts } from '@/hooks';
import { ProductTile } from '.';
import { css } from '@emotion/css';

export const ProductGrid = () => {
  const { products, loading, error } = useProducts();
  const itemsPerRow = 2;

  const gridCssClass = css`
    display: grid;
    row-gap: 32px;

    @media (min-width: 1024px) {
      grid-template-columns: repeat(${itemsPerRow}, 1fr);
    }
  `;

  if (loading) {
    return <div className="container mx-auto px-4">...loading</div>;
  }

  if (error.trim().length > 0) {
    return <div className="container mx-auto px-4">{error}</div>;
  }

  return (
    <ul className={gridCssClass}>
      {products.map((product) => {
        const { id } = product;

        return (
          <li key={id}>
            <ProductTile product={product}></ProductTile>
          </li>
        );
      })}
    </ul>
  );
};
