import React from "react";
import { useDispatch } from "react-redux";
import deleteImage from "../images/delete.svg";
import editImage from "../images/edit.svg";
import {
  deleteFetchTransactions,
  editActive,
} from "../redux/features/transaction/transactionSlice";
import numberWithCommas from "../utils/numberWithCommas";
// import editActive from "../redux/features/transaction/transactionSlice"

const Transaction = ({ transaction }) => {
  const { id, name, amount, type } = transaction;
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editActive(transaction));
  };
  const handleDelete = () => {
    dispatch(deleteFetchTransactions(id));
  };
  return (
    <li className={`transaction ${type}`}>
      <p>{name}</p>
      <div className="right">
        <p>৳ {numberWithCommas(amount)}</p>
        <button className="link" onClick={handleEdit}>
          <img className="icon" src={editImage} />
        </button>
        <button className="link" onClick={handleDelete}>
          <img className="icon" src={deleteImage} />
        </button>
      </div>
    </li>
  );
};

export default Transaction;
