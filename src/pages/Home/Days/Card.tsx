import React from 'react';
import styles from "./Days.module.scss";
import { Day } from "./Days";
import { GlobalSvgSelector } from '../../../assets/icons/global/GlobalSvgSelector';

interface Props {
  day: Day
}

export const Card = ({ day }: Props) => {

  const { day_name, day_info, icon_id, temp_day, temp_night, info } = day

  return (
    <section className={styles.card}>
      <h2 className={styles.day}>{day_name}</h2>
      <span className={styles.day_info}>{day_info}</span>
      <div className={styles.img}>
        <GlobalSvgSelector id={icon_id}/>
      </div>
      <h3 className={styles.temp__day}>{temp_day}</h3>
      <span className={styles.temp__night}>{temp_night}</span>
      <span className={styles.day__info}>{info}</span>
    </section>
  )
}
