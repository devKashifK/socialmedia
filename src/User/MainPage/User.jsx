import React, { useEffect, } from 'react';
import styles from "./User.module.css";
import Header from '../Header/Header';
import Stories from '../Stories/Stories';
import MenuBarLeft from '../Menu/MenuBarLeft';
import MenuBarRight from '../Menu/MenuBarRight';
import UserSuggestionLeft from '../UserSuggestion/UserSuggestionLeft/UserSuggestionLeft';
import UserSuggestionRight from '../UserSuggestion/UserSuggestionRight/UserSuggestionRight';
import Feeds from '../Feed/Feed';
import UserPost from '../UserPost/UserPost';
import user from '../../StoreZustand/user'

export default function User() {
  const email = user((state) => state.email)
  const data = user((state) => state.saveData)


   useEffect(() => {
  async function getData(){
    const response = await fetch("http://localhost:4000/api/userData", {
      method : "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email}),
    });
    const userData = await response.json();
     data(userData)
   }

    getData();
  }, []);

  

  return (
    <>
    <Header />
    <div className={styles.userMainPage}>
      <div className={styles.leftMenu}>
        <MenuBarLeft />
      </div>
      <div className={styles.rightMenu}>
        <MenuBarRight />
      </div>
    <div className={styles.userWall}>
    <Stories />
    </div>
    </div>
    <div className={styles.MainSection}>
      <div className={styles.leftMainSection}>
        <UserSuggestionLeft />
      </div>
      <div className={styles.feed}>
        <Feeds />
        <UserPost />
      </div>
      <div className={styles.rightMainSection}>
        <UserSuggestionRight />
      </div>
    </div>
    </>
  )
}
