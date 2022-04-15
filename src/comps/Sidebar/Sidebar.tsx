import React from "react";
import styles from "../../styles/Sidebar.module.css"
import Heading from "./Heading";
import ListItem from "./LIstItem";
import home from "../../img/icons/home.svg"
import users from "../../img/icons/users.svg"
import briefcase from "../../img/icons/briefcase.svg"
import lightning from "../../img/icons/lightning.svg"
import chart from "../../img/icons/chart.svg"
import up from "../../img/icons/up.svg"
import logo from "../../img/Logo.svg";
import login from "../../img/icons/log-in.svg"
import {NavLink} from "react-router-dom";

const Sidebar: React.FC = () => {
  return(
    <div className={styles.wrapper}>
      <NavLink to="/"><img className={styles.logo} src={logo}/></NavLink>
      <div>
        <Heading value="Категория"/>
        <ul className={styles.ul}>
          <NavLink to="/"><ListItem value="Дом" icon={home} /></NavLink>
          <NavLink to="/family"><ListItem value="Семья" icon={users} /></NavLink>
          <NavLink to="/work"><ListItem value="Работа" icon={briefcase} /></NavLink>
          <NavLink to="/sport"><ListItem value="Спорт" icon={lightning} /></NavLink>
         </ul>
      </div>
      <div>
        <Heading value="Данные"/>
        <ul className={styles.ul}>
          <NavLink to="/statistics"><ListItem value="Статистика" icon={chart} /></NavLink>
          <NavLink to="/compare"><ListItem value="Сравнить" icon={up} /></NavLink>

        </ul>
      </div>
      <div className={styles.login}>
        <ListItem value="Выйти" icon={login} />
      </div>
    </div>
  )
}

export default Sidebar