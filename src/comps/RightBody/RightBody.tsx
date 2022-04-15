import React from "react";
import styles from "../../styles/RightBody.module.css"
import Profile from "./Profile";
import Day from "./Day";
import Chart from "./Сhart";

export default function RightBody () {
  return(
    <div className={styles.wrapper}>
      <Profile />
      <Day/>
      <Chart />
    </div>
  )
}