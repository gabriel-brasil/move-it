import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenge() {
  const { challengeCompleted } = useContext(ChallengesContext);

  return (
    <div className={styles.completedChallangeContainer}>
      <span>Desafios Completos</span>
      <span>{challengeCompleted}</span>
    </div>
  )
}