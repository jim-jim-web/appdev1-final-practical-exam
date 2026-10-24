import React from 'react';
import styles from './SignUp.module.css';
import blossomImage from '../assets/blossom-flower.svg';
import googleIcon from '../assets/icons-google-logo.svg';
import appleIcon from '../assets/icons-apple-logo.svg';

function SignUp() {
  return (
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>Get Started Now</h1>

          {/* Form */}
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="Enter your name" 
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email address</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Enter your email" 
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                placeholder="Name" 
              />
            </div>

            <div className={styles.checkboxGroup}>
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">I agree to the terms & policy</label>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Signup
            </button>
          </form>

          {/* Divider & Social Sign-In */}
          <div className={styles.divider}>
            <span>Or</span>
          </div>

          <div className={styles.socialButtons}>
            <button type="button" className={styles.socialBtn}>
              <img src={googleIcon} alt="Google logo" />
              <span>Sign in with Google</span>
            </button>
            <button type="button" className={styles.socialBtn}>
              <img src={appleIcon} alt="Apple logo" />
              <span>Sign in with Apple</span>
            </button>
          </div>

          <p className={styles.bottomText}>
            Have an account? <a href="#">Sign In</a>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.rightSection}>
        <img src={blossomImage} alt="Blossom Flower" className={styles.blossomImg} />
      </div>
    </div>
  );
}

export default SignUp;