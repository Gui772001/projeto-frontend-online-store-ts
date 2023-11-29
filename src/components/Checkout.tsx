import { useState } from 'react';

function Checkout() {
  const storedCart = localStorage.getItem('cart');
  const [cartItems, setCartItems] = useState(storedCart ? JSON.parse(storedCart) : []);
  localStorage.setItem('cart', JSON.stringify(cartItems));
  return (
    <div>
      {
        cartItems.map((item:any) => (
          <div key={ item.id }>
            <p>{ item.title}</p>
          </div>
        ))
      }
      <form>
        <label>
          <input
            type="text"
            data-testid="checkout-fullname"
            placeholder="Digite o Nome Completo"
          />
        </label>
        <label>
          <input
            type="email"
            data-testid="checkout-email"
            placeholder="Digite seu e-mail"
          />
        </label>
        <label>
          <input
            type="text"
            data-testid="checkout-cpf"
            placeholder="Digite seu CPF"
          />
        </label>
        <label>
          <input
            type="text"
            data-testid="checkout-phone"
            placeholder="Digite seu telefone"
          />
        </label>
        <label>
          <input
            type="text"
            data-testid="checkout-cep"
            placeholder="Digite seu CEP"
          />
        </label>
        <label>
          <input
            type="text"
            data-testid="checkout-address"
            placeholder="Digite seu endereço"
          />
        </label>
        <label>
          Boleto
          <br />
          <input
            type="radio"
            name="boleto"
            data-testid="ticket-payment"
          />
        </label>
        <br />
        <label>
          Cartão de Crédito
          <br />
          <input
            type="radio"
            name="Visa"
            data-testid="visa-payment"
          />
          {' '}
          Visa
        </label>
        <label>
          <input
            name="MasterCard"
            type="radio"
            data-testid="master-payment"
          />
          {' '}
          MasterCard
        </label>
        <label>
          <input
            name="Elo"
            type="radio"
            data-testid="elo-payment"
          />
          {' '}
          Elo
        </label>
        <button
          type="submit"
          data-testid="checkout-btn"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Checkout;
