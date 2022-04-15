import React from "react";
import styles from "../../styles/Profile.module.css";
import avatar from "../../img/avatar.png"
export default function Profile () {
  return(
    <div className={styles.wrap}>
      <h1 className={styles.heading}>Профиль</h1>
      <div className={styles.block}>
        <img className={styles.avatar} src={avatar} />
        <div className={styles.info}>
          <li>Михаил Савельев</li>
          <li>25 лет</li>
          <li>Выполнено задач: 357</li>
          <li>Популярный раздел: Работа</li>
        </div>
      </div>
    </div>
  )
}