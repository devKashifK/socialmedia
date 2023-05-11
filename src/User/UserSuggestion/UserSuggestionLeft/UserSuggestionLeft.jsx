import React from "react";
import styles from "./UserSuggestionLeft.module.css";
import {MdRefresh} from "react-icons/md";
import {AiOutlineSetting, AiOutlineStar, AiOutlineUser} from "react-icons/ai";
import {GiClothes} from "react-icons/gi"

export default function UserSuggestionLeft() {
  return (
    <div>
      <UserFriend />
      <UserFriendSuggestion />
      <LikedPages />
      <Weather />
    </div>
  );
}

export function UserFriend() {
  return (
    <div className={styles.userFriend}>
      <div className={styles.setting}>
        <div className={styles.userFriendIcon}><MdRefresh /></div>
        <div className={styles.userFriendIcon}><AiOutlineSetting /></div>
      </div>
      <div className={styles.profileDetail}>
        <div className={styles.profilePicture}>
          <img className={styles.image} src="/assests/images/user.jpg" alt="" />
        </div>
        <div className={styles.name}>
          <h2>Riley Markov</h2>
          <h5>kashifk2202@gmail.com</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            perferendis?
          </p>
        </div>
        <div className={styles.profileFeed}>
          <div className={styles.post}> <h3> 3220 </h3> <h5> Posts </h5></div>
          <div className={styles.friend}><h3> 4220 </h3> <h5> Friends </h5></div>
          <div className={styles.likes}><h3> 1220 </h3> <h5> Likes </h5></div>
        </div>
        <button className={styles.viewProfile}>View Profile</button>
      </div>
    </div>
  );
}
export function UserFriendSuggestion() {
  return <div className={styles.userFriendSuggestion}>
    <div className={styles.userFriendSection}>
      <h2>Friend Suggestion</h2>
    <div className={styles.userFriendSetting}>
        <div className={styles.userFriendIcon}><MdRefresh /></div>
        <div className={styles.userFriendIcon}><AiOutlineSetting /></div>
      </div>
      </div>
      <div className={styles.userFriends}>
      <div
        className={styles.storyBox}
        style={{ backgroundImage: "url(/assests/images/user1.jpg)" }}
      >
        <div className={styles.adaptiveOverlay}></div>
        <div className={styles.storyContent}>
          <h6>Rose Vercel</h6>
        </div>
      </div>
      <div
        className={styles.storyBox}
        style={{ backgroundImage: "url(/assests/images/user.jpg)" }}
      >
        <div className={styles.adaptiveOverlay}></div>
        <div className={styles.storyContent}>
          <h6>Rose Vercel</h6>
        </div>
      </div>
      </div>
  </div>;
}
export function LikedPages() {
  return <div className={styles.LikedPages}>
    <div className={styles.userFriendSection}>
      <h2>Liked Pages</h2>
    <div className={styles.userFriendSetting}>
        <div className={styles.userFriendIcon}><MdRefresh /></div>
        <div className={styles.userFriendIcon}><AiOutlineSetting /></div>
      </div>
      </div>
      <div className={styles.likedPageConatiner}>
        <div className={styles.pageInfo}>
          <div className={styles.pageLogo}><GiClothes /></div>
          <div className={styles.pageName}>
            <h4>Chrimson Agency</h4>
            <div className={styles.downSection}>
            <h6>Clothing Store</h6>
            <div className={styles.LikedPageIcon}><AiOutlineUser /> 15k</div>
            </div>
          </div>
          <div className={styles.star}>
            <AiOutlineStar />
          </div>
        </div>
      </div>
  </div>;
}

export function Weather() {
  return <div className="weather">Soon Will be Updated</div>;
}
