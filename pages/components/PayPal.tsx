import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

interface Props {
  "currency"?: any;
  "amount"?:any
}

export default function PayPal(props: Props): JSX.Element {

  const {currency, amount} = props
  const options = {
    "client-id":
      "AWJ-DLH5hobVNYjhkFWihZZaSrN_IiVYmlkg5KyVazdt2AkWEdrwDSlnMLitGeC5N1EGER_P1rFIyC6W",
    "currency": "USD",
    "intent": "capture",
    "buyer-country": "US", // this is needed only for sandbox testing
  };
  return (
    <div>
        <PayPalScriptProvider options={options}>
              <PayPalButtons
                style={{ layout: "vertical" }}
                createOrder={(data, actions) => {
                  return actions.order
                    .create({
                      purchase_units: [
                        {
                          amount: {
                            currency_code: currency,
                            value: amount,
                          },
                        },
                      ],
                    })
                    .then((orderId) => {
                      // Your code here after create the order
                      return orderId;
                    });
                }}
                onApprove={function (data, actions) {
                  return actions.order.capture().then(function () {
                    // Your code here after capture the order
                  });
                }}
              />
            </PayPalScriptProvider>
      </div>



  );
};

