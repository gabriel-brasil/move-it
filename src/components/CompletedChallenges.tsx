import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenge() {
  return (
    <div className={styles.completedChallangeContainer}>
      <span>Desafios Completos</span>
      <span>5</span>
    </div>
  )
}