import React from 'react';
import styles from './Login.module.css';
import blossomImage from '../assets/blossom-flower.svg';
import googleIcon from '../assets/icons-google-logo.svg';
import appleIcon from '../assets/icons-apple-logo.svg';

function Login() {
  return (
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <div className={styles.formContainer}>
          {/* Part 1: Title & Subtitle */}
          <h1 className={styles.title}>Welcome back!</h1>
          <p className={styles.subtitle}>Enter your Credentials to access your account</p>

          {/* Part 2: Form */}
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email address</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Enter your email" 
              />
            </div>

            <div className={styles.formGroup}>
              <div className={styles.passwordHeader}>
                <label htmlFor="password">Password</label>
                <a href="#" className={styles.forgotLink}>Forgot password</a>
              </div>
              <input 
                type="password" 
                id="password" 
                placeholder="Password" 
              />
            </div>

            <div className={styles.checkboxGroup}>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember for 30 days</label>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Login
            </button>
          </form>

          {/* Part 3: Divider, Social Buttons, and Updated Bottom Text */}
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
            Don’t have an account? <a href="#">Sign Up</a>
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

export default Login;