import React from 'react'
import styles from "./Days.module.scss";
import { Card } from "./Card";
import { Tabs } from './Tabs';

interface Props {
  
}

export interface Day {
  day_name: string,
  day_info: string,
  icon_id: string,
  temp_day: string,
  temp_night: string,
  info: string,
}

export const Days = (props: Props) => {

  const days: Day[] = [
    {
      day_name: 'Today',
      day_info: 'Aug 28',
      icon_id: 'sunny',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Sunny',
    },
    {
      day_name: 'Tomorrow',
      day_info: 'Aug 29',
      icon_id: 'light_rain_sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Light rain and sun',
    },
    {
      day_name: 'Wed',
      day_info: 'Aug 30',
      icon_id: 'light_rain_sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Light rain and sun',
    },
    {
      day_name: 'Thu',
      day_info: 'Aug 31',
      icon_id: 'rainy',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Rain',
    },
    {
      day_name: 'Fri',
      day_info: 'Sept 1',
      icon_id: 'light_rain_sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Light rain and sun',
    },
    {
      day_name: 'Sat',
      day_info: 'Sept 2',
      icon_id: 'sunny',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Sunny',
    },
    {
      day_name: 'Sun',
      day_info: 'Sept 3',
      icon_id: 'sunny',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Sunny',
    },
  ]

  return (
    <>
      <Tabs/>
      <section className={styles.days}>
        {days.map((day: Day) => {
          return <Card key={day.day_name} day={day}/>
        })}
      </section>
    </>
  )
}
