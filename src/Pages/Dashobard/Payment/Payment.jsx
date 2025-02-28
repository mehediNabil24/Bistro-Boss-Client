
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
// Todo
const stripePromise = loadStripe(import.meta.env.VITE_stripe_publish_key)

const Payment = () => {
    return (
        <div>
            <SectionTitle heading={"Payment"} subheading={"Please Pay to Eat"}></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
            
        </div>
    );
};

export default Payment;