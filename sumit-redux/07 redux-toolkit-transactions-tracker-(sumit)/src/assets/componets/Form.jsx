import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFetchTransactions,
  editFetchTransactions,
  editInActive,
} from "../redux/features/transaction/transactionSlice";

const Form = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [editMode, setEditMode] = useState(false);

  const dispatch = useDispatch();
  const { transactions, editing, isLoading, isError } = useSelector(
    (state) => state.transactions
  );

  const resetForm = () => {
    setName("");
    setType("");
    setAmount("");
  };

  useEffect(() => {
    const { id, name, amount, type } = editing || {};
    if (id) {
      setName(name);
      setType(type);
      setAmount(amount);
      setEditMode(true);
    } else {
      resetForm();
      setEditMode(false);
    }
  }, [editing]);

  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(addFetchTransactions({ name, type, amount: Number(amount) }));
    resetForm();
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      editFetchTransactions({
        id: editing?.id,
        data: {
          name: name,
          amount: Number(amount),
          type: type,
        },
      })
    );
    resetForm();
    setEditMode(false);
    dispatch(editInActive());
  };

  return (
    <div className="form">
      <h3>Add new transaction</h3>

      <form onSubmit={editMode ? handleUpdate : handleCreate}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            required
            name="transaction_name"
            placeholder="My Salary"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group radio">
          <label>Type</label>
          <div className="radio_group">
            <input
              type="radio"
              required
              value="income"
              name="transaction_type"
              checked={type === "income"}
              onChange={() => setType("income")}
            />
            <label>Income</label>
          </div>
          <div className="radio_group">
            <input
              type="radio"
              value="expense"
              name="transaction_type"
              placeholder="Expense"
              checked={type === "expense"}
              onChange={() => setType("expense")}
            />
            <label htmlFor="transaction_type">Expense</label>
          </div>
        </div>

        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            required
            placeholder="Enter amount"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button disabled={isLoading} className="btn" type="submit">
          {editMode ? "Update" : "Add"} Transaction
        </button>
      </form>

      {!isLoading && isError && (
        <p className="error">There was an error occurred</p>
      )}

      {editMode && (
        <button className="btn cancel_edit" onClick={() => setEditMode(false)}>
          Cancel Edit
        </button>
      )}
    </div>
  );
};

export default Form;
