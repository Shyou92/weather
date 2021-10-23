import React, { useEffect } from 'react';
import styles from "./Header.module.scss";
import{ GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import Select from 'react-select'
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../context/ThemeContext';

interface Props {
  
}

export const Header = (props: Props) => {
  const theme = useTheme();

  const options = [
    { value: 'homeCity', label: 'Sevastopol' },
    { value: 'dreamCity', label: 'Saint-Petersburg' },
    { value: 'capitalCity', label: 'Moscow' }
  ];

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: theme.theme === Theme.DARK ? "#4f4f4f" : "rgba(71, 147, 255, 0.2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: "100",
      cursor: "pointer",
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? "#fff" : "#000",
    }),
  }

  function changeTheme () {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <GlobalSvgSelector id="header-logo"/>
        </div>
        <p className={styles.title}>Weather Forecast</p>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.change_theme} onClick={changeTheme}>
          <GlobalSvgSelector id="change-theme"/>
        </div>
        <Select defaultValue={options[0]} styles={colorStyles} options={options} />
      </div>
    </header>
  )
}
