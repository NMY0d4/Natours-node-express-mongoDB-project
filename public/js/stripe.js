/* eslint-disable */
import axios from 'axios';
const stripe = Stripe(
  'pk_test_51LYSBdGQIU1otRZSKvwVauyfaBQ99K7Xr2sDh4ywJGd38TldEHLb8p9yz263TUHqbwg5uXYH0NSWnmn3E6ZqooMh00FWfsLqUO'
);

export const bookTour = async (tourId) => {
  // 1) Get checkout session from API
  const session = await axios(
    'http://localhost:3000/api/v1/bookings/checkout-session/${tourId}'
  );

  console.log();

  // 2) Create checkout form + charge credit card
};
