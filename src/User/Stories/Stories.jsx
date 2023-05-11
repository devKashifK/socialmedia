import React from "react";
import styles from "./Stories.module.css";

export default function Stories() {
  return (
    <div className={styles.userStoryContainer}>
      <div className={styles.addNewStory}>
        <div className={styles.addNewStoryContainer}> </div>
        <div className={styles.plusIcon}>
          <div className={styles.icon}>+</div>
          <span>Add Stories</span>
        </div>
      </div>
      <div
        className={styles.storyBox}
        style={{ backgroundImage: "url(/assests/images/user1.jpg)" }}
      >
        <div className={styles.adaptiveOverlay}></div>
        <div className={styles.storyContent}>
          <h6>Rose Vercel</h6>
        </div>
      </div>
    </div>
  );
}
