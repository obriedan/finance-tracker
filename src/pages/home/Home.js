//hooks
import { useAuthContext } from '../../hooks/useAuthContext';
import { useCollection } from '../../hooks/useCollection';
//styles
import styles from './Home.module.css';
//components
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';

export default function Home() {
  const { documents, error } = useCollection('transactions');

  const { user } = useAuthContext();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {error && <p className='error'>{error}</p>}
        {documents && <TransactionList transactions={documents} />}
      </div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
}
