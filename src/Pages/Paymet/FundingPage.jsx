
import WrappedStripeForm from './StripeForm';

const FundingPage = () => {
  const handlePayment = async (token) => {
    // Send the token to your server for payment processing
    try {
      const response = await fetch('http://localhost:5000/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      if (response.ok) {
        console.log('Payment successful');
        // Refresh the funding history or update state accordingly
      } else {
        console.error('Payment failed');
      }
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  };

  return (
    <div>
      <h1>Fund the Organization</h1>
      <WrappedStripeForm handlePayment={handlePayment} />
      {/* Display Funding History Table below */}
    </div>
  );
};

export default FundingPage;
