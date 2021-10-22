import React from 'react';
import styles from "./Days.module.scss";

interface Props {
  
}

interface Tab {
  value: string,
}

export const Tabs = (props: Props) => {

  const tabs: Tab[] = [
    {
      value: "This week",
    },
    {
      value: "10 days",
    },
    {
      value: "Month",
    }
  ]

  return (
    <section className={styles.tabs}>
      <div className={styles.tabs__wrapper}>
        {tabs.map((tab) => {
          return <section className={styles.tab} key={tab.value}>{tab.value}</section>;
        })}
      </div>

      <button type="button" className={styles.cancel}>Cancel</button>
    </section>
  )
}
