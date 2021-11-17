// hooks
import { useState } from 'react';

export default function TransactionForm() {
  //state
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, amount });
  };
  return (
    <>
      <h3>Add a Transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Transaction name:</span>
          <input required onChange={(e) => setName(e.target.value)} value={name} type='text' />
        </label>
        <label>
          <span>Amount (€):(</span>
          <input
            required
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            type='number'
          />
        </label>
        <button>Add Transaction</button>
      </form>
    </>
  );
}
