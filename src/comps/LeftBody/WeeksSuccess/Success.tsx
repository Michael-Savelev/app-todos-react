import React from "react";
import styles from "../../../styles/Success.module.css"
import {SuccessProps} from "../../../types/interfaces";

const Success: React.FC<SuccessProps> = ({heading, value}) => {
  return(
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>{heading}</h1>
      <div className={styles.circle}>
        <span className={styles.value}>{value}</span>
      </div>
    </div>
  )
}

export default Success