import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Component/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheakOut from "./CheakOut";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
const Payment = () => {
    return (
        <div>
             <SectionTitle
                subHeading={"payment get way"}
                heading={"Payemnt sction"}>
            </SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheakOut></CheakOut>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;