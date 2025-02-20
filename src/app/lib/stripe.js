// /lib/stripe.js
import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16', // Use the latest API version
  typescript: false,
});

export const SUBSCRIPTION_PRICE_ID = 'price_H5ggYwtDq4fbrJ'; // Replace with your actual price ID