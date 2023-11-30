import React, { useState } from 'react';
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import useAuth from '../../Hooks/UseAuth';
import Container from '../../Shared/Container';

const StripeForm = ({ handlePayment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error,setError] =useState('')
  const [transaction,setTransaction] = useState('')
  const [clientSecret,setClientSecret] = useState()
  const {user} = useAuth()
  const handleSubmit =async (event) =>{
    event.preventDefault()
    if(!stripe || !elements){
        return
    }
    const card =elements.getElement(CardElement)

    if(card === null){
        return
    }
    const {error ,paymentMethod} = await stripe.createPaymentMethod({
        type:'card',
        card
    })
    if(error){
        console.log('payment error',error)
        setError(error.message)
    }
    else{
        console.log('payment method',paymentMethod)
        setError('')
    }
    // confirm payment
    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
        card : card,
        billing_details:{
          email: user?.email,
          name: user?.displayName
        }
      }
    })
    if(confirmError){
      console.log('confirm error')
    }
    else{
      console.log('payment intent',paymentIntent)
      if(paymentIntent.status === 'succeeded'){
        console.log('transaction id',paymentIntent.id)
        setTransaction(paymentIntent.id)

        // save payment database
        const payment ={
          email : user.email,
          transaction : paymentIntent.id,
        
        }
      const res = await axios.post('http://localhost:5000/payments',payment)
      console.log('payment saved',res.data)


      }
    }
}

  return (
  <div className='my-32'>
      <Container>
      <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
    </Container>
  </div>
  );
};

// Wrap StripeForm with the Elements provider
const WrappedStripeForm = ({ handlePayment }) => {
  const stripePromise = loadStripe('pk_test_51OECK7HxUHd38VBICAWB2gDC0r1XmJJgeQmwsFkaSoZjsoJPNeIww4JZvMOOCGQBCRq1bmnTqdNjuzedeHlyUQOo00C9H15YAr');
  return (
    <Elements stripe={stripePromise}>
      <StripeForm handlePayment={handlePayment} />
    </Elements>
  );
};

export default WrappedStripeForm;
