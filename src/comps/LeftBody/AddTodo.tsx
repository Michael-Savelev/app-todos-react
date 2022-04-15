import React from "react";
import styles from "../../styles/AddTodo.module.css"

const AddTodo: React.FC = () => {
  return(
    <div>
      <input id="add" type="text" className={styles.int}/>
      <label htmlFor="add" className={styles.lbl}></label>
    </div>
  )
}
export default AddTodo
