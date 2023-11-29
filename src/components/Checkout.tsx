import { useState } from 'react';

function Checkout() {
  const storedCart = localStorage.getItem('cart');
  const [cartItems, setCartItems] = useState(storedCart ? JSON.parse(storedCart) : []);
  localStorage.setItem('cart', JSON.stringify(cartItems));
  const [formData, setFormData] = useState({
    Nome: '',
    email: '',
    cpf: '',
    telefone: '',
    cep: '',
    endereço: '',
    metadodepagamento: '',
  });

  const handleChange = (event :React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const email = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
  const validadeEmail = email.test(formData.email);
  const validaNomecompleto = formData.Nome.length > 0;
  const validadecpf = formData.cpf.length > 0;
  const metadodepagamento = formData.metadodepagamento.length > 0;
  const validadeTelefone = formData.telefone.length > 0;
  const validecep = formData.cep.length > 0;
  const validaeendereco = formData.endereço.length > 0;

  const validateForm = (validaNomecompleto && validadeEmail && validadecpf
    && validadeTelefone && metadodepagamento && validecep && validaeendereco);
  const mensagem1 = 'Campos inválidos';
  const mensagem2 = 'Seu carrinho está vazio';
  const clearLocalStorage = () => {
    if (cartItems.length > 0) {
      localStorage.clear();
    }
  };
  return (
    <div>
      {cartItems.length > 0 ? (
        <div>
          {
        cartItems.map((item:any) => (
          <div key={ item.id }>
            <p>{ item.title}</p>
          </div>
        ))
      }

          <label>
            Nome Completo
            <input
              value={ formData.Nome }
              type="text"
              data-testid="checkout-fullname"
              placeholder="Digite o Nome Completo"
              onChange={ handleChange }
              name="Nome"
            />
          </label>
          <label>
            Email
            <input
              value={ formData.email }
              type="email"
              data-testid="checkout-email"
              placeholder="Digite seu e-mail"
              onChange={ handleChange }
              name="email"
            />
          </label>
          <label>
            Cpf
            <input
              value={ formData.cpf }
              type="text"
              data-testid="checkout-cpf"
              placeholder="Digite seu CPF"
              onChange={ handleChange }
              name="cpf"
            />
          </label>
          <label>
            Telefone
            <input
              value={ formData.telefone }
              type="text"
              data-testid="checkout-phone"
              placeholder="Digite seu telefone"
              onChange={ handleChange }
              name="telefone"
            />
          </label>
          <label>
            Cep
            <input
              type="text"
              value={ formData.cep }
              data-testid="checkout-cep"
              placeholder="Digite seu CEP"
              onChange={ handleChange }
              name="cep"
            />
          </label>
          <label>
            Endereço
            <input
              value={ formData.endereço }
              type="text"
              data-testid="checkout-address"
              placeholder="Digite seu endereço"
              onChange={ handleChange }
              name="endereço"
            />
          </label>
          <label>
            Boleto
            <br />
            <input
              type="radio"
              name="boleto"
              checked={ formData.metadodepagamento === 'boleto' }
              onChange={ () => setFormData({ ...formData,
                metadodepagamento: 'boleto' }) }
              data-testid="ticket-payment"
            />
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="Visa"
              data-testid="visa-payment"
              checked={ formData.metadodepagamento === 'Visa' }
              onChange={ () => setFormData({ ...formData, metadodepagamento: 'Visa' }) }
            />
            {' '}
            Visa
          </label>
          <label>
            <input
              name="MasterCard"
              type="radio"
              data-testid="master-payment"
              checked={ formData.metadodepagamento === 'MasterCard' }
              onChange={ () => setFormData({ ...formData,
                metadodepagamento: 'MasterCard' }) }
            />
            {' '}
            MasterCard
          </label>
          <label>
            <input
              name="Elo"
              type="radio"
              data-testid="elo-payment"
              checked={ formData.metadodepagamento === 'Elo' }
              onChange={ () => setFormData({ ...formData,
                metadodepagamento: 'Elo' }) }
            />
            {' '}
            Elo
          </label>
          <button
            type="submit"
            data-testid="checkout-btn"
            onClick={ clearLocalStorage }
          >
            Enviar
          </button>
          {validateForm === false ? (
            <p data-testid="error-msg">{mensagem1}</p>
          ) : (
            <h1 />
          )}
        </div>
      ) : (
        <div>
          <p>{mensagem2}</p>
        </div>
      )}
    </div>
  );
}

export default Checkout;
