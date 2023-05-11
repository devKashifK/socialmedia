import React from "react";
import styles from "./UserPost.module.css";

export default function UserPost() {
  return (
    <div className={styles.UserPost}>
      <div className={styles.UserPostName}>
        <div className={styles.logo}>
          <img src="/assests/images/user.jpg" alt="" />
        </div>
        <div className={styles.Name}>
          <h5>Sufia Eliza</h5>
          <h6>30 Mins Ago</h6>
        </div>
        </div>
        <div className={styles.post}>
          <img src="/assests/images/1.jpg" alt="" />
        </div>
        <div className={styles.caption}>
          <h3>Today Our Three Cute Puppy Dog Birthday !!!!</h3>
          <h5 className={styles.tag}>#ourcutepuppy, #puppy, #birthday, #dog</h5>
          <p className={styles.desc}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. has been the industry's standard dummy text ever since the
            1500s
          </p>
          </div>
          <div className={styles.reactions}>
            😀 😆 😅 😂
          <div className={styles.counter}>
            <h5 className={styles.Count}>
              <strong>4565</strong>Comment
            </h5>
            <h5 className={styles.Count}>
              <strong>565</strong>Share
            </h5>
          </div>
          </div>
          <div className={styles.actions}>
            <div className={styles.actionsIcon}>React</div>
            <div className={styles.actionsIcon}>Comment</div>
            <div className={styles.actionsIcon}>Share</div>
          </div>
          <div className={styles.comments}>
            <div className={styles.userImg}>
                <img src="/assests/images/user.jpg" alt="" />
            </div>
            <div className={styles.userDetail}>
              <div className={styles.detail}>
                <h5>Pabelo Mukarni</h5>{" "}
                <span className={styles.time}>50 Mins Ago</span>{" "}
              </div>
              <p className={styles.text}>
                Oooo Very Cute and Sweet Dog, happy birthday Cuty.... 🙂
              </p>
              <div className={styles.buttons}>
                <div className={styles.btn}> Like </div>
                <div className={styles.btn}> Reply </div>
              </div> 
            </div>
          </div>
          <div className={styles.write}>
            <input
            className={styles.WriteAComment}
              type="text"
              placeholder="Write A Comment"
            />
          </div>
    </div>
  );
}