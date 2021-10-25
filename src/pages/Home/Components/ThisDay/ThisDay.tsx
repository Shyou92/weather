import React from 'react'
import styles from "./ThisDay.module.scss";
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";
import { Weather } from '../../../../store/types';

interface Props {
  weather: Weather;
}

export const ThisDay = ({ weather }: Props) => {
  return (
    <section className={styles.this__day}>
      <div className={styles.top__block}>
        <div className={styles.top__block_wrapper}>
          <p className={styles.this__temp}>{Math.floor(weather.main.temp)}°</p>
          <p className={styles.this__day_name}>Today</p>
        </div>
        <GlobalSvgSelector id="sun"/>
      </div>
      <div className={styles.bottom__block}>
        <div className={styles.this__time}>Time: <span>21:54</span></div>
        <p className={styles.this__city}>City: <span>Sevastopol</span></p>
      </div>
    </section>
  )
}
