import React from "react";
import styles from "../../styles/Profile.module.css";
import avatar from "../../img/avatar.png"
export default function Day () {
  return(
    <div className={styles.wrap}>
      <h1 className={styles.heading}>Факт дня</h1>
        <div className={styles.info}>
          <p>Человек, который просыпается в 6 утра, по статистике, закрывает все задачи к 18:00 вечера.</p>
          <p>Попробуем также 🤔?</p>
        </div>
    </div>
  )
}