import React from 'react';
import styles from "./Header.module.scss";
import{ GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import Select from 'react-select'

interface Props {
  
}

export const Header = (props: Props) => {

  const options = [
    { value: 'homeCity', label: 'Sevastopol' },
    { value: 'dreamCity', label: 'Saint-Petersburg' },
    { value: 'capitalCity', label: 'Moscow' }
  ];

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: "rgba(71, 147, 255, 0.2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: "100",
      cursor: "pointer",
    })
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
        <div className={styles.change_theme}>
          <GlobalSvgSelector id="change-theme"/>
        </div>
        <Select defaultValue={options[0]} styles={colorStyles} options={options} />
      </div>
    </header>
  )
}
