import { useState } from 'react';
import { Link } from 'react-router-dom';

function Cart() {
  const storedCart = localStorage.getItem('cart');
  const [cartItems, setCartItems] = useState(storedCart ? JSON.parse(storedCart) : []);
  localStorage.setItem('cart', JSON.stringify(cartItems));

  const [quantity, setQuantity] = useState<number>(1);
  const addQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const remQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  const removerIte = (index: number) => {
    const novaLista = [...cartItems];
    novaLista.splice(index, 1);
    setCartItems(novaLista);
    localStorage.setItem('cart', JSON.stringify(novaLista));
  };
  return (
    <div>
      {cartItems.length > 0 ? (
        <div>
          <h2>Seu Carrinho de Compras</h2>
          {cartItems.map((item: any, index: any) => (
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

                <button
                  data-testid="remove-product"
                  onClick={ () => removerIte(index) }
                >
                  Remover

                </button>
              </p>
            </div>
          ))}
          <Link to="/checkout" data-testid="checkout-products">
            <button>Finalizar Compra</button>
          </Link>
        </div>
      ) : (
        <div>
          <h1>🛒 Carrinho de compras</h1>
          <div>
            <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
