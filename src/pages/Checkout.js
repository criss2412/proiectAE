import React from 'react'
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "../components/CheckoutForm";

const Checkout = () => {
    const stripePromise = loadStripe('pk_test_51Jj2SPCvu5JfFUZ4Bmi8NV2L5ZO9qpwdaNcaN4wzCYlk3vxBwh0kNX1m6prlCNmH6IWJksZexsE3pkmlj3hCUGy8006vSK5WTz');

    return (
        <section className="checkout-wrapper">
            <AmplifyAuthenticator>
                <Elements stripe={stripePromise}>
                    <section>
                        <h2>Sunteti gata de Checkout?</h2>
                        <CheckoutForm />
                    </section>
                </Elements>
            </AmplifyAuthenticator>
        </section>
    )
}

export default Checkout
