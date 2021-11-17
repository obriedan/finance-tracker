// hooks
import { useState, useEffect } from 'react';
import { useFirestore } from '../../hooks/useFirestore';

export default function TransactionForm({ uid }) {
  //state
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const { addDocument, response } = useFirestore('transactions');

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({ uid, name, amount });
  };

  useEffect(() => {
    if (response.success) {
      setName('');
      setAmount('');
    }
  }, [response.success]);
  return (
    <>
      <h3>Add a Transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Transaction name:</span>
          <input required onChange={(e) => setName(e.target.value)} value={name} type='text' />
        </label>
        <label>
          <span>Amount (€):</span>
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
