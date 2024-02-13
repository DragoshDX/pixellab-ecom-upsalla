import { useAddToCart } from '@/hooks/cart/useAddToCart';

export const AddToCart = ({ product }) => {
  const { title, id } = product;
  const { addToCart, loading } = useAddToCart();

  const onClick = () => {
    addToCart(id);
  };

  return (
    <button
      type="button"
      className="bg-black text-white uppercase font-medium text-sm py-3 px-6 hover:bg-amber-800 transition-colors"
      disabled={loading}
      title={`Add ${title} to cart`}
      onClick={onClick}
    >
      {loading ? '...loading' : 'Add to Cart'}
    </button>
  );
};
