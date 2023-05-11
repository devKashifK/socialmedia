import React from 'react';
import styles from "./Menu.module.css";
import {AiFillCalendar, AiOutlineAppstore, AiOutlineCloud, AiOutlineFile, AiOutlineStar, AiOutlineUsergroupDelete, AiTwotoneCustomerService} from "react-icons/ai"
import {BiCake, BiLogOut} from "react-icons/bi"

export default function MenuBarLeft() {
  return (
    <div className={styles.controls}>
      <div className={styles.icons}><AiOutlineAppstore /></div>
      <div className={styles.sideBarIcons}>
      <div className={styles.icons}><AiOutlineFile /></div>
      <div className={styles.icons}><AiOutlineStar /></div>
      <div className={styles.icons}><AiOutlineUsergroupDelete /></div>
      <div className={styles.icons}><AiTwotoneCustomerService /></div>
      <div className={styles.icons}><AiOutlineCloud /></div>
      <div className={styles.icons}><AiFillCalendar /></div>
      <div className={styles.icons}><BiCake /></div>
      </div>
      <div className={styles.icons}><BiLogOut /></div>
    </div>
  )
}
