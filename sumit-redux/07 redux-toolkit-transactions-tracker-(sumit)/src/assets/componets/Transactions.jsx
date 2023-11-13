import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFetchTransactions } from "../redux/features/transaction/transactionSlice";
import Transaction from "./Transaction";
import Error from "./ui/Error";
import Loading from "./ui/Loading";

const Transactions = () => {
  const dispatch = useDispatch();
  const { transactions, editing, isLoading, isError, error } = useSelector(
    (state) => state.transactions
  );

  useEffect(() => {
    dispatch(getFetchTransactions());
  }, [dispatch, editing]);

  let content;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <Error error={error} />;
  }
  if (!isLoading && !isError && transactions?.length === 0) {
    content = <div className="col-span-12">No transactions found!</div>;
  }
  if (!isLoading && !isError && transactions?.length > 0) {
    content = transactions?.map((t) => (
      <Transaction key={t.id} transaction={t} />
    ));
  }

  return (
    <div>
      <p className="second_heading">Your Transactions:</p>

      <div className="conatiner_of_list_of_transactions">
        <ul>{content}</ul>
      </div>
    </div>
  );
};

export default Transactions;
