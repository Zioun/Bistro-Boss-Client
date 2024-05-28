import React from "react";
import SectionTitle from "../../components/SectionTitle";
import CheckOut from "./CheckOut";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  return (
    <div>
      <SectionTitle
        subHading={"---Please Pay to Eat---"}
        hading={"Payment"}
      ></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
            <CheckOut></CheckOut>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
