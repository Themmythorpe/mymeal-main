import { NextResponse } from 'next/server'
import stripe from 'stripe';
 
export async function GET() {

    const stripeSecretKey = "sk_test_51IX8WuJC9t2dpLOuKlCVxPX2oNfUAMYA3pVI1AIm7R2CZxXmCnQ4JDKBoggOs9DxdqSJFcEiWZwQ2vFxpZu3Vz9t00sBC1bD4k"; // Replace with your Stripe secret key

    const stripeInstance = new stripe.Stripe(stripeSecretKey, {
        apiVersion: '2020-08-27', // Use the latest Stripe API version
    });

    const intent = await stripeInstance.paymentIntents.create({
        amount: 1000,
        currency: 'usd',
        // Add more options as needed
    });
 
  return NextResponse.json({ clientSecret: intent })
}