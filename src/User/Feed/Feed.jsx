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
import { GrFormClose } from "react-icons/gr";
import { BiLocationPlus, BiPhotoAlbum } from "react-icons/bi";
import { BsCameraVideo } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { background } from "./background";
import user from "../../StoreZustand/user";

export default function Feeds() {
  const data = user((state) => state.data);
  const [showInput, setShowInput] = useState(false);
  const [show, setShow] = useState(false);
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [color, setColor] = useState(null);
  const [feeling, setFeeling] = useState(false);
  const [feelingText, setFeelingText] = useState("");

  const handleColorChange = (index) => {
    const color = background[index];
    setColor(color);
    setShowInput(true);
  };
  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };
  const handleFeelingChange = (event) => {
    setFeelingText(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const { name, email, profile_photo, user_id } = data;

    const formData = new FormData();
    formData.append("caption", caption);
    formData.append("image", image);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("profile", profile_photo);
    formData.append("user_id", user_id);
    formData.append("background", color);
    formData.append("feeling", feelingText);

    try {
      const res = await fetch("http://localhost:4000/api/post", {
        method: "POST",
        body: formData,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className={styles.feed} onSubmit={handleClick}>
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
        {showInput ? (
          <div className={styles.inputBox}>
            <div className={styles.close} onClick={() => setShowInput(false)}>
              <GrFormClose />
            </div>
            <input
              type="text"
              className={styles.bigInput}
              placeholder="Write Something Here"
              value={caption}
              onChange={handleCaptionChange}
              style={{ background: color }}
            />
          </div>
        ) : (
          <input
            type="text"
            className={styles.write}
            placeholder="Write Something Here"
            value={caption}
            onChange={handleCaptionChange}
          />
        )}
      </div>

      <div className={styles.lower}>
        <div className={styles.gradientsBox}>
          {background.map((bg, index) => {
            return (
              <div
                key={index}
                className={styles.box}
                style={{ background: bg }}
                onClick={() => handleColorChange(index)}
              ></div>
            );
          })}
        </div>
        {feeling ? (
          <div className={styles.feelingInput}>
            <div className={styles.emoji}>😃</div>
            <input
              type="text"
              list="1"
              placeholder="How Are You Feeling ?"
              value={feelingText}
              className={styles.feeling}
              onChange={handleFeelingChange}
            />
            <datalist id="1">
              <option value="Shy" onClick={handleFeelingChange}>
                Shy
              </option>
              <option value="Happy" onClick={handleFeelingChange}>
                Happy
              </option>
              <option value="Sad" onClick={handleFeelingChange}>
                Sad
              </option>
              <option value="Angry" onClick={handleFeelingChange}>
                Angry
              </option>
              <option value="Worried" onClick={handleFeelingChange}>
                Worried
              </option>
              <option value="Embarrassed" onClick={handleFeelingChange}>
                Embarrassed
              </option>
              <option value="Surprised" onClick={handleFeelingChange}>
                Surprised
              </option>
            </datalist>
            <div
              className={styles.closeFeeling}
              onClick={() => setFeeling(false)}
            >
              <GrFormClose />
            </div>
          </div>
        ) : null}

        <div className={styles.option}>
          <div className={styles.event}>
            <BiPhotoAlbum /> Album
            <input
              type="file"
              className={styles.chooseImg}
              name="image"
              id="image"
              onChange={handleImageChange}
            />
          </div>

          <div className={styles.event} onClick={() => setFeeling(true)}>
            <AiOutlineSmile />
            Feeling & Activity
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
        <div className={styles.btn}>
          <button className={styles.postBtn} type="submit">
            Create Post
          </button>
        </div>
      </div>
    </form>
  );
}
