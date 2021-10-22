import React from 'react';
import styles from "./ThisDayInfo.module.scss";
import Cloud from "../../../../assets/images/Cloud.png";
import { ThisDayItem } from './ThisDayItem';

interface Props {
  
}

export interface Item {
  icon_id: string,
  name: string,
  value: string,
}

export const ThisDayInfo = (props: Props) => {

  const items = [
    {
      icon_id: "temp",
      name: "Temperature",
      value: "20° - feels like 17°",
    },
    {
      icon_id: "pressure",
      name: "Pressure",
      value: "765 mm Hg - Normal",
    },
    {
      icon_id: "precipitations",
      name: "Precipitations",
      value: "No precipitation",
    },
    {
      icon_id: "wind",
      name: "Wind",
      value: "3 m / s south-west - light wind",
    },
  ];

  return (
    <section className={styles.this__day_info}>
      <div className={styles.this__day_info_items}>
        {items.map((item: Item) => {
          return <ThisDayItem key={item.icon_id} item={item} />
        })}
      </div>
      <img className={styles.cloud__img} src={Cloud} alt="cloud" />
    </section>
  )
}
