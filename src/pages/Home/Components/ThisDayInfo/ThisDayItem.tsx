import React from 'react'
import { Item } from './ThisDayInfo'
import styles from "./ThisDayInfo.module.scss";
import { IndicatorSvgSelector } from "../../../../assets/icons/indicators/IndicatorSvgSelector";

interface Props {
  item: Item,
}

export const ThisDayItem = ({ item }: Props) => {

  const { icon_id, name, value } = item;

  return (
    <section className={styles.item}>
      <div className={styles.indicator}>
        <IndicatorSvgSelector id={icon_id}/>
      </div>
      <p className={styles.indicator__name}>
        {name}
      </p>
      <p className={styles.indicator__value}>
        {value}
      </p>
    </section>
  )
}
