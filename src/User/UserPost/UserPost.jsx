import React, { useEffect, useState } from "react";
import styles from "./UserPost.module.css";

export default function UserPost() {
  const [feeds, setFeeds] = useState();

  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:4000/api/feeds");

      const userFeeds = await response.json();
      setFeeds(userFeeds);

      // dispatch(dataAction.saveData(userData))
    }

    getData();
  }, []);
  console.log(feeds);
  return feeds
    ? feeds.map((item) => {
        return (
          <div className={styles.UserPost} key={item.id}>
            <div className={styles.UserPostName}>
              <div className={styles.logo}>
                <img src={item.profile ? item.profile : ""} alt="" />
              </div>
              <div className={styles.Name}>
                <h5>{item.name}</h5>
                <h6>30 Mins Ago</h6>
              </div>
            </div>
            {item.image !== null ? (
              <>
                <div
                  className={styles.post}
                  style={{ backgroundImage: `url(${item.image})` }}></div>
                <div className={styles.caption}>
                  <h3>{item.caption}</h3>
                  <h5 className={styles.tag}>
                    #ourcutepuppy, #puppy, #birthday, #dog
                  </h5>
                  {item.description ? (
                    <p className={styles.desc}>
                      {item.description ? item.description : ""}
                    </p>
                  ) : null}
                </div>{" "}
              </>
            ) : (
              <>
                <div
                  className={styles.post}
                  style={{ background: item.background }}
                >
                  <div className={styles.captionPost}>
                    <h3>{item.caption}</h3>
                   </div>
                </div>
                <div className={styles.tagPost}>
                  #ourcutepuppy, #puppy, #birthday, #dog
                </div>
                {item.description ? (
                  <p className={styles.desc}>
                    {item.description ? item.description : ""}{" "}
                  </p>
                ) : null}
              </>
            )}

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
            {item.comments
              ? item.comments.map((comment) => {
                  return (
                    <div className={styles.commentBox}>
                      <div className={styles.comments}>
                        <div className={styles.userImg}>
                          <img src={comment.user_profile_picture} alt="" />
                        </div>
                        <div className={styles.userDetail}>
                          <div className={styles.detail}>
                            <h5>Pabelo Mukarni</h5>{" "}
                            <span className={styles.time}>50 Mins Ago</span>{" "}
                          </div>
                          <p className={styles.text}>{comment.comment_text}</p>
                          <div className={styles.buttons}>
                            <div className={styles.btn}> Like </div>
                            <div className={styles.btn}> Reply </div>
                          </div>
                        </div>
                      </div>
                      {comment.replies
                        ? comment.replies.map((item) => {
                            return (
                              <div className={styles.replies}>
                                <div className={styles.userImg}>
                                  <img src={item.user_profile_picture} alt="" />
                                </div>
                                <div className={styles.userDetail}>
                                  <div className={styles.detail}>
                                    <h5>Pabelo Mukarni</h5>{" "}
                                    <span className={styles.time}>
                                      50 Mins Ago
                                    </span>{" "}
                                  </div>
                                  <p className={styles.text}>
                                    {item.reply_text}
                                  </p>
                                  <div className={styles.buttons}>
                                    <div className={styles.btn}> Like </div>
                                    <div className={styles.btn}> Reply </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })
                        : ""}
                    </div>
                  );
                })
              : ""}

            <div className={styles.write}>
              <input
                className={styles.WriteAComment}
                type="text"
                placeholder="Write A Comment"
              />
            </div>
          </div>
        );
      })
    : "Loading";
}
