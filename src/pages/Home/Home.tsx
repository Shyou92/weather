import React from 'react';
import styles from "./Home.module.scss";
import { ThisDay } from './Components/ThisDay/ThisDay';

interface Props {
  
}

export const Home = (props: Props) => {
  return (
    <div className={styles.home}>
      <ThisDay/>
    </div>
  )
}
