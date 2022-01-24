import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_live_51KL8EHSIcdFEP5ExADz4tFiSmiTbZWN6nPUYOR3py4lbt9VjSBrKlL3D8VWhSvhvoSg9MhuAEKSaSlgdwkSWwOXz00pKPw1cnw"
    );
  }
  return stripePromise;
};

const buttonStyles = {
  fontSize: "13px",
  textAlign: "center",
  color: "#000",
  padding: "12px 60px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "rgb(255, 178, 56)",
  borderRadius: "6px",
  letterSpacing: "1.5px",
};

const buttonDisabledStyles = {
  opacity: "0.5",
  cursor: "not-allowed",
};

const Checkout = () => {
  // let sku='prod_L1L9CNQ3KXYizv'
  const [loading, setLoading] = useState(false);

  const redirectToCheckout = async (event) => {
    event.preventDefault();
    setLoading(true);

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      
      lineItems: [{ price: "price_1KLJ5zSIcdFEP5ExnB6pOmgo", quantity: 1 }],
      successUrl: "https://www.breakneck.in",
      cancelUrl: "https://www.breakneck.in",
      
    });

    if (error) {
      console.warn("Error:", error);
      setLoading(false);
    }
  };

  return (
    <button
      disabled={loading}
      style={
        loading ? { ...buttonStyles, ...buttonDisabledStyles } : buttonStyles
      }
      onClick={redirectToCheckout}
    >
      BUY MY BOOK
    </button>
  );
};

export default Checkout;
