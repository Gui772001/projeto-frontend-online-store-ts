import { useState } from 'react';

function CardCart({ index, item }:any) {
  const [quantity, setQuantity] = useState(1);
  const storedCart = localStorage.getItem('cart');
  const [cartItems] = useState(storedCart ? JSON.parse(storedCart) : []);
  localStorage.setItem('cart', JSON.stringify(cartItems));

  const addQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const remQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  return (
    <div key={ index }>
      <p data-testid="shopping-cart-product-name">{item.title}</p>
      <p data-testid="shopping-cart-product-quantity">

        <button
          type="button"
          onClick={ remQuantity }
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        {' '}
        {quantity}
        <button
          type="button"
          onClick={ addQuantity }
          data-testid="product-increase-quantity"
        >
          +
        </button>

      </p>
    </div>
  );
}
export default CardCart;
