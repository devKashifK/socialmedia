import React from "react";
import { Link } from "react-router-dom";
import styles from "./Signup.module.css";
import { BsFillPersonFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineEye, AiOutlineGoogle } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";

export default function Signup() {
  return (
    <div className={styles.default}>
      <div className={styles.container}>
        <div className={styles.leftCont}>Welcome Back</div>
        <div className={styles.signup}>
          <div className={styles.signupComponent}>
            <h3 className={styles.text}>Register</h3>
            <p className={styles.desc}>
              Welcome to Friendzone, create your account below to start using
              friendzone.
            </p>
            <form action="post" className={styles.form}>
              <div className={styles.formGroup}>
                <label className={styles.label} for="name">
                  Full Name
                </label>
                <input type="text" placeholder="Your Name" id="name" />
                <div className={styles.icon}>
                  <BsFillPersonFill />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} for="email">
                  Email Address
                </label>
                <input type="text" placeholder="Your Email" id="email" />
                <div className={styles.icon}>
                  <HiOutlineMail />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} for="password">
                  Password
                </label>
                <input type="text" placeholder="Your Password" id="password" />
                <div className={styles.icon}>
                  <AiOutlineEye />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} for="confirmPassword">
                  Confirm Password
                </label>
                <input
                  type="text"
                  placeholder="Re-type Password"
                  id="confirmPassword"
                />
                <div className={styles.icon}>
                  <AiOutlineEye />
                </div>
              </div>
              <button className={styles.Btn}>Signup</button>
            </form>
          </div>
          <div className={styles.login}>
            {" "}
            <p className={styles.loginText}> Already have an account </p>{" "}
            <Link to="/login">
              {" "}
              <button className={styles.Btn}>Login</button>{" "}
            </Link>{" "}
          </div>
          <div className={styles.connectText}>
            {" "}
            <h6>
              {" "}
              <span> OR Connect With </span>{" "}
            </h6>
          </div>
          <div className={styles.connectWith}>
            <div className={styles.google}>
              <AiOutlineGoogle />{" "}
            </div>
            <div className={styles.facebook}>
              <FaFacebookF />
            </div>
            <div className={styles.twitter}>
              <FiTwitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
