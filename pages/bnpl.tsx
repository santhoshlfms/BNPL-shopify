import type { NextPage } from "next";
import Head from "./components/Head";
import PayPal from "./components/PayPal"
import DataMissing from "./components/DataMissing"

const BNPL: NextPage = () => {
  const currency = "USD";
  const amount = "23.00";

  const initialOptions = {
    "client-id":
      "AWJ-DLH5hobVNYjhkFWihZZaSrN_IiVYmlkg5KyVazdt2AkWEdrwDSlnMLitGeC5N1EGER_P1rFIyC6W",
    currency: "USD",
    intent: "capture",
    "buyer-country": "US", // this is needed only for sandbox testing
  };

  return (
    <div className="hold-transition lockscreen">
      <Head />
      <div>
        <div className="lockscreen-wrapper">
          <div className="lockscreen-name"> PayPal payment options</div>
          {/***Render only when we have all needed data points as per Shopify 
           * If not render Not availale options <DataMissing />
           */}
          <div className="lockscreen-item">
            <PayPal initialOptions={initialOptions} currency={"USD"} amount={"23.00"}/>
           </div>
        </div>
      </div>
    </div>
  );
};

export default BNPL;
