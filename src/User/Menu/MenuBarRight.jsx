import React from 'react';
import styles from "./Menu.module.css";
import { BiSearchAlt } from 'react-icons/bi';

export default function MenuBarRight() {
  return (
    <div className={styles.controls}>
      <div className={styles.iconsSearch}><BiSearchAlt /></div>
      <div className={styles.sideBarIconsRight}>
        <div className={styles.friendsProfile} style={{backgroundImage : "url(/assests/images/user1.jpg)"}}>
                <div className={styles.status} style={{backgroundColor : "green"}}>
                </div>
        </div>
      </div>
    </div>
  )
}
