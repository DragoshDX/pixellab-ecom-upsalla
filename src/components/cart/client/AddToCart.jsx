import { useCartActions } from '@/hooks/cart';

export const AddToCart = ({ product }) => {
  const { title, id } = product;
  const { addToCart, adding, removeFromCart, removing } = useCartActions();

  const onClick = () => {
    addToCart(id);
  };

  const busy = adding || removing;

  return (
    <button
      type="button"
      className="bg-black text-white uppercase font-medium text-sm py-3 px-6 hover:bg-amber-800 transition-colors"
      disabled={busy}
      title={`Add ${title} to cart`}
      onClick={onClick}
    >
      {busy ? '...loading' : 'Add to Cart'}
    </button>
  );
};
