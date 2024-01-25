import { useEffect, useState } from 'react';
import { ProductTile } from '.';
import { css } from '@emotion/css';

let cache = [];

export const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const itemsPerRow = 2;

  useEffect(() => {
    if (cache.length === 0) {
      // fetch returns a promise
      fetch('https://fakestoreapi.com/products')
        .then((response) => {
          // respinse.json() returns a promise
          return response.json();
        })
        .then((products) => {
          cache = products;
          setProducts(products);
        });
    } else {
      setProducts(cache);
    }
  }, []);

  const gridCssClass = css`
    display: grid;
    row-gap: 32px;

    @media (min-width: 1024px) {
      grid-template-columns: repeat(${itemsPerRow}, 1fr);
    }
  `;

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
