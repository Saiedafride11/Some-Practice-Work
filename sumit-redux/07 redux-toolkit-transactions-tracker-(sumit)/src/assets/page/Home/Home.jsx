import React from "react";
import Balance from "../../componets/Balance";
import Form from "../../componets/Form";
import Transactions from "../../componets/Transactions";

const Home = () => {
  return (
    <div className="main">
      <div className="container">
        <Balance />
        <Form />
        <Transactions />
      </div>
    </div>
  );
};

export default Home;
