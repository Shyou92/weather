import React from 'react'
import styles from "./Popup.module.scss";
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import { Item } from "../../pages/Home/Components/ThisDayInfo/ThisDayInfo";
import { ThisDayItem } from "../../pages/Home/Components/ThisDayInfo/ThisDayItem";

export const Popup = () => {

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
    <>
      <div className={styles.blur}></div>
      <section className={styles.popup}>
        <div className={styles.day}>
          <span className={styles.day__temp}>20°</span>
          <span className={styles.day__name}>Wednesday</span>
          <div className={styles.img}>
            <GlobalSvgSelector id="sunny"/>
          </div>
          <div className={styles.day__time}>Time: <span>21:54</span></div>
          <p className={styles.day__city}>City: <span>Sevastopol</span></p>
        </div>
        <div className={styles.this__day_info_items}>
          {items.map((item: Item) => {
            return <ThisDayItem key={item.icon_id} item={item} />
          })}
        </div>
        <button className={styles.close}>
          <GlobalSvgSelector id="close"/>
        </button>
      </section>
    </>
  )
}
