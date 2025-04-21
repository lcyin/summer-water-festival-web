import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  const [ticketType, setTicketType] = useState('Normal');
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout', { state: { ticketType, quantity } });
  };

  return (
    <>
      <Header />
      <main className="container">
        <h2>Summer Water Festival</h2>
        <p>Date: August 8, 2025, 7 PM - 11 PM | Location: Central District</p>

        <div>
          <label>
            Ticket Type:
            <select value={ticketType} onChange={e => setTicketType(e.target.value)}>
              <option value="Normal">Normal ($30)</option>
              <option value="VIP">VIP ($50)</option>
            </select>
          </label>
          <label>
            Quantity:
            <input type="number" min="1" value={quantity} onChange={e => setQuantity(Number(e.target.value))} />
          </label>
          <p>Availability: Normal (150 left), VIP (50 left)</p>
          <button onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
