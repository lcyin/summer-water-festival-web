import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Confirmation = () => {
  const { state } = useLocation();
  const email = state?.email || 'your email';
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main className="container">
        <h2>Purchase Successful!</h2>
        <p>Thank you for your purchase. Your ticket has been sent to {email}.</p>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </main>
      <Footer />
    </>
  );
};

export default Confirmation;
