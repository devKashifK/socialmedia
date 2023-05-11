import React, { useState } from "react";
import styles from "./Feed.module.css";
import {
  AiOutlineGlobal,
  AiOutlineLock,
  AiOutlineSmile,
  AiOutlineTag,
  AiOutlineUserAdd,
  AiOutlineUserDelete,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import { BiLocationPlus, BiPhotoAlbum } from "react-icons/bi";
import { BsCameraVideo } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Feeds() {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.feed}>
      <div className={styles.Upper}>
        <h3>Create Post</h3>
        <div className={styles.whoTOShow}>
          <div className={styles.select} onClick={() => setShow(!show)}>
            <h5>
              {" "}
              Public{" "}
              <span>
                <RiArrowDropDownLine />
              </span>
            </h5>
          </div>
          <ul className={show ? styles.OptionShow : styles.Option}>
            <li>
              <AiOutlineGlobal />
              Public
            </li>
            <li>
              <AiOutlineUsergroupAdd /> Friends
            </li>
            <li>
              <AiOutlineUserDelete />
              Friends Except
            </li>
            <li>
              <AiOutlineUserAdd />
              Specific Friends
            </li>
            <li>
              <AiOutlineLock />
              Only Me
            </li>
          </ul>
        </div>
        <h5 className={styles.goLive}>
          <span>
            {" "}
            <BsCameraVideo />
          </span>
          Go Live
        </h5>
      </div>
      <div className="input">
        <input
          type="text"
          className={styles.write}
          placeholder="Write Something Here"
        />
      </div>
      <div className={styles.lower}>
        <div className="gradientsBox"></div>
        <div className={styles.option}>
          <div className={styles.event}>
            <BiPhotoAlbum /> Album
          </div>
          <div className={styles.event}>
            <AiOutlineSmile />
            Feeling
          </div>
          <div className={styles.event}>
            <BiLocationPlus />
            Check In
          </div>
          <div className={styles.event}>
            <AiOutlineTag />
            Tag Friends
          </div>
        </div>
      </div>
    </div>
  );
}
