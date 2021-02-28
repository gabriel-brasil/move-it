import { profile } from 'console';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/43327653?s=460&u=9c9b501d7c948e219d9e7aab46b3d32bcb9d69c4&v=4" alt="Gabriel Brasil" />
      <div>
        <strong>Gabriel Brasil</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
          </p>
      </div>
    </div>
  );
}