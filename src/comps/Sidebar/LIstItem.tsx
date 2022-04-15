import React from "react";
import styles from "../../styles/ListItem.module.css"

interface HeadingProps {
  value: string
  icon: any
}

export default function ListItem ({value, icon}: HeadingProps) {
  return(
    <div className={styles.list_item}>
      <img className={styles.icon} src={icon}/>
      <p className={styles.text}> {value}</p>
    </div>
  )
}