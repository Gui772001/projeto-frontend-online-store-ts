import { useState } from 'react';
import { Link } from 'react-router-dom';
import CardCart from '../CardCart';

function Cart() {
  const storedCart = localStorage.getItem('cart');
  const [cartItems, setCartItems] = useState(storedCart ? JSON.parse(storedCart) : []);
  localStorage.setItem('cart', JSON.stringify(cartItems));

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
            <>
              <CardCart key={ index } item={ item } index={ index } />
              <button
                data-testid="remove-product"
                onClick={ () => removerIte(index) }
              >
                Remover

              </button>

            </>
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
