import React, { useEffect } from 'react';
import styles from "./Home.module.scss";
import { ThisDay } from './Components/ThisDay/ThisDay';
import { ThisDayInfo } from "./Components/ThisDayInfo/ThisDayInfo";
import { Days } from './Days/Days';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
import { selectCurrentWeatherData } from '../../store/selectors';

interface Props {
  
}

export const Home = (props: Props) => {
  const dispatch = useCustomDispatch();

  const { weather } = useCustomSelector(
    (selectCurrentWeatherData)
  );

  useEffect(() => {
    dispatch(fetchCurrentWeather('sevastopol'))
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.wrapper}>
        <ThisDay weather={weather}/>
        <ThisDayInfo />
      </div>

      <Days/>
    </div>
  )
}
