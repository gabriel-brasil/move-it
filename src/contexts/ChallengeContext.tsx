import { createContext, useState, ReactNode } from 'react';
import challenges from '../../challenges.json';

// typescript ~ tipagem
interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengeCompleted: number;
  experienceToNextLevel: number;
  activeChallenge: Challenge;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
}

interface ChallengeProviderPropos {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengeProvider({ children }: ChallengeProviderPropos) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengeCompleted, setChallengeCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);



  // CONTEXT FUNCTIONS
  function levelUp() {
    setLevel(level + 1)
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }




  return (
    <ChallengesContext.Provider value={{
      level,
      currentExperience,
      challengeCompleted,
      experienceToNextLevel,
      activeChallenge,
      levelUp,
      startNewChallenge,
      resetChallenge,
    }}>
      {children}
    </ChallengesContext.Provider>
  );


}
