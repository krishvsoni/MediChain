const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Create a payment intent
async function createPaymentIntent(amount, currency) {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: currency,
    });
    return paymentIntent.client_secret;
  } catch (error) {
    console.error('Error creating payment intent:', error);
    throw error;
  }
}

// Usage example
const amount = 1000; // $10.00
const currency = 'usd';

createPaymentIntent(amount, currency)
  .then(clientSecret => {
    console.log('Client secret:', clientSecret);
    // Further processing or response handling
  })
  .catch(error => {
    // Handle errors
  });