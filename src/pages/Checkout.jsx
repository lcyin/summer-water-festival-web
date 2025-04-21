import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Checkout = () => {
  const { state } = useLocation();
  const { ticketType, quantity } = state || { ticketType: 'Normal', quantity: 1 };
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const price = ticketType === 'VIP' ? 50 : 30;
  const total = price * quantity;

  const handlePayment = () => {
    // Simulate payment logic here
    navigate('/confirmation', { state: { email } });
  };

  return (
    <>
      <Header />
      <main className="container">
        <h2>Checkout</h2>
        <div className="order-summary">
          <p>Ticket: {ticketType}</p>
          <p>Quantity: {quantity}</p>
          <p>Total: ${total.toFixed(2)}</p>
        </div>
        <div className="payment-form">
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          {/* Replace with Stripe CardElement */}
          <input placeholder="Card Number" />
          <input placeholder="Expiry Date" />
          <input placeholder="CVC" />
          <button onClick={handlePayment}>Pay Now</button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Checkout;
