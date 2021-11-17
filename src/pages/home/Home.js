//hooks
import { useAuthContext } from '../../hooks/useAuthContext';
import { useCollection } from '../../hooks/useCollection';
//styles
import styles from './Home.module.css';
//components
import TransactionForm from './TransactionForm';

export default function Home() {
  const { documents, error } = useCollection('transactions');

  const { user } = useAuthContext();
  return (
    <div className={styles.container}>
      <div className={styles.content}>content</div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
}
