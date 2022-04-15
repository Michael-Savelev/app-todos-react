import React from "react";
import styles from "../../styles/Profile.module.css";
import chart from "../../img/chart.svg"
export default function Chart () {
  return(
    <div className={styles.wrap}>
      <h1 className={styles.heading}>График успеваемости</h1>
      <img src={chart}/>
    </div>
  )
}