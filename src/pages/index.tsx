import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { CompletedChallenge } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";

import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengeProvider } from '../contexts/ChallengeContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengeCompleted: number;
}

export default function Home(props: HomeProps) {

  console.log(props);


  return (
    <ChallengeProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengeCompleted={props.challengeCompleted}

    >
      <div className={styles.container}>

        <Head>
          <title>Move It ~ Início</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenge />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengeProvider>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {


  const { level, currentExperience, challengeCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengeCompleted: Number(challengeCompleted)
    }
  }
}
