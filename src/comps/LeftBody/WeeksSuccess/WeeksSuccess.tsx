import React from "react";
import styles from "../../../styles/WeeksSuccess.module.css"
import Success from "./Success";
import {IAllTodos, ISuccess} from "../../../types/interfaces";

const WeeksSuccess: React.FC<ISuccess> = (props) => {
  const arrCounter = props.arrayCounters
  return(
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Успехи за неделю</h1>
      <div className={styles.li}>
        <Success
          heading="Создано"
          value={arrCounter[0]}
        />
        <Success
          heading="Завершено"
          value={arrCounter[1]}
        />
        <Success
          heading="Удалено"
          value={arrCounter[2]}
        />
      </div>
    </div>
  )
}

export default WeeksSuccess