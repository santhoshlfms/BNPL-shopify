import React from "react";
import ReactDOM from "react-dom";
import type { NextPage } from "next";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

interface Props {
  initialOptions?: any;
  title?: string;
}

const PayPal: NextPage = (props: Props) => {
  const {currency, amount} = props
  return (
    <div>
        <PayPalScriptProvider options={props.initialOptions}>
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

export default PayPal;
