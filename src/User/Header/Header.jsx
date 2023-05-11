import React, { useState } from "react";
import styles from "./Header.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import {
  BiHomeSmile,
  BiMessageRounded,
  BiMoon,
  BiUserPlus,
} from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiHelpCircle, FiSettings, FiUser } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";

export default function Header() {

    const [show, setShow] = useState(false)
  return (
    <div className={styles.header}>
      <div className={styles.rightSide}>
        <div className="logo">
          <img src="/assests/images/logo.png" alt="Logo" />
        </div>
        <div className={styles.search}>
          <input
            className={styles.findFriends}
            type="text"
            name=""
            id=""
            placeholder="Find Friends..."
          />
          <div className={styles.searchIcon}>
            <AiOutlineSearch />
          </div>
        </div>
        <div className={styles.home}>
          <BiHomeSmile />
        </div>
        <div className={styles.request}>
          <BiUserPlus />
        </div>
      </div>
      <div className={styles.leftSide}>
        <div className={styles.userProfileInfo}>
          <h6> 326 </h6> <span> Posts</span>
        </div>
        <div className={styles.userProfileInfo}>
          {" "}
          <h6> 584 </h6> Friends
        </div>
        <div className={styles.headerIcon}>
          {" "}
          <div className={styles.messageNumber}>3</div>
          <BiMessageRounded />{" "}
        </div>
        <div className={styles.headerIcon}>
          {" "}
          <BiMoon />{" "}
        </div>
        <div className={styles.headerIcon}>
          {" "}
          <div className={styles.number}>5</div>
          <IoMdNotificationsOutline />{" "}
        </div>
        <div className={styles.userProfile}  onClick={() => setShow(!show)}> <div className={styles.dot}></div> </div>
        <div className={styles.name}>
          <h4>Kashif Khan</h4>
          <span className="status">Active Now</span>
        </div>
        <div className={show ? styles.profileSettingShow : styles.profileSetting}>
          <div className={styles.text}>Profile</div>
          <div className={styles.profilePreview}>
            <div className={styles.profileIcon}>
              <FiUser />
            </div>
            <div className={styles.profileText}>
              <h5>Profile</h5>
              <h6>Profile Preview & Settings</h6>
            </div>
          </div>
          <div className={styles.profilePreview}>
            <div className={styles.profileIcon}>
              <FiSettings />
            </div>
            <div className={styles.profileText}>
              <h5>Setting & Privacy</h5>
              <h6>All Settings & Privacy</h6>
            </div>
          </div>
          <div className={styles.profilePreview}>
            <div className={styles.profileIcon}>
              <FiHelpCircle />
            </div>
            <div className={styles.profileText}>
              <h5>Help & Support</h5>
              <h6>Browse Help Here</h6>
            </div>
          </div>
          <div className={styles.profilePreview}>
            <div className={styles.profileIcon}>
              <BiLogOut />
            </div>
            <div className={styles.profileText}>
              <h5>Logout</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
