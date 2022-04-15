import React from "react";
import styles from "../../styles/Heading.module.css"
interface HeadingProps {
  value: string;
}

const Heading = ({value} :HeadingProps) => {
  return(
    <div>
      <h1 className={styles.heading}>{value}</h1>
    </div>
  )
}

export default Heading