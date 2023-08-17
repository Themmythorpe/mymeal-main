import stripe from 'stripe';

const stripeSecretKey = "sk_test_51IX8WuJC9t2dpLOuKlCVxPX2oNfUAMYA3pVI1AIm7R2CZxXmCnQ4JDKBoggOs9DxdqSJFcEiWZwQ2vFxpZu3Vz9t00sBC1bD4k"; // Replace with your Stripe secret key

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Create a PaymentIntent or SetupIntent on the server
      const stripeInstance = new stripe.Stripe(stripeSecretKey, {
        apiVersion: '2020-08-27', // Use the latest Stripe API version
      });

      const intent = await stripeInstance.paymentIntents.create({
        amount: 1000,
        currency: 'usd',
        // Add more options as needed
      });

      // Return the client secret as a response
      res.status(200).json({ clientSecret: intent.client_secret });
    } catch (error) {
      console.error('Error creating PaymentIntent:', error);
      res.status(500).json({ error: 'Unable to create PaymentIntent' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
