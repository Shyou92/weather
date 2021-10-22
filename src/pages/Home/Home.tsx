import React from 'react';
import styles from "./Home.module.scss";
import { ThisDay } from './Components/ThisDay/ThisDay';
import { ThisDayInfo } from "./Components/ThisDayInfo/ThisDayInfo";

interface Props {
  
}

export const Home = (props: Props) => {
  return (
    <div className={styles.home}>
      <div className={styles.wrapper}>
        <ThisDay />
        <ThisDayInfo />
      </div>
    </div>
  )
}
