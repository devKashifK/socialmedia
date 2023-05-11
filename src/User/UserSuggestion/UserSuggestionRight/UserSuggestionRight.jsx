import React from "react";
import styles from "./UserSuggestionRight.module.css";
import { MdRefresh } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";

export default function UserSuggestionRight() {
  return (
    <div>
      <Birthday />
      <Gallery />
      <Event />
    </div>
  );
}

export function Birthday() {
  return (
    <div className={styles.birthday}>
      <div className={styles.userFriendSection}>
        <div className="heading">
          <h3>Birthday !!!!</h3>
          <h6>Today your friend's birthday</h6>
        </div>
        <div className={styles.userFriendSetting}>
          <div className={styles.userFriendIcon}>
            <MdRefresh />
          </div>
          <div className={styles.userFriendIcon}>
            <AiOutlineSetting />
          </div>
        </div>
      </div>
      ;
      <div className={styles.birthdayProfile}>
        <div className={styles.img}>
          <img src="/assests/images/user1.jpg" alt="" />
        </div>
        <div className={styles.name}>
          <h3>Sufia Eliza</h3>
          <h6>glasgow, scotland</h6>
        </div>
        <p>
          Today's is 5 September. Wish Your Friend Happy Birthday and make their
          day special
        </p>
        <div className={styles.input}>
          <input
            className={styles.message}
            type="text"
            placeholder="Wish Birthday To Your Friend"
          />
          <div className={styles.icon}>kk</div>
        </div>
      </div>
    </div>
  );
}

export function Gallery() {
  return (
    <div className={styles.gallery}>
      <div className={styles.userFriendSection}>
        <div className="heading">
          <h3>Gallery</h3>
        </div>
        <div className={styles.userFriendSetting}>
          <div className={styles.userFriendIcon}>
            <MdRefresh />
          </div>
          <div className={styles.userFriendIcon}>
            <AiOutlineSetting />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Event() {
  return (
    <div className={styles.Event}>
      <div className={styles.userFriendSection}>
        <div className="heading">
          <h3>Event</h3>
        </div>
        <div className={styles.userFriendSetting}>
          <div className={styles.userFriendIcon}>
            <MdRefresh />
          </div>
          <div className={styles.userFriendIcon}>
            <AiOutlineSetting />
          </div>
        </div>
      </div>
      <div className={styles.eventContent}>
      <div className="heading">
          <h3> Christmas 2023 </h3>
          <h6>26 January 2021</h6>
        </div>
       <p> Lorem Ipsum is simply dummy text of the
        printing and typesetting industry 15256 People Going
        </p>

        <button>Going / Not Going</button>
      </div>
    </div>
  );
}
