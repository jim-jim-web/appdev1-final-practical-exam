import React from 'react';
import styles from './SignUp.module.css';
import blossomImage from '../assets/blossom-flower.svg';

function SignUp() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <h1 className={styles.title}>Get Started Now</h1>
    </div>

      {/* Right Section - Image Display */}
      <div className={styles.rightSection}>
        <img src={blossomImage} alt="Blossom Flower" className={styles.blossomImg} />
      </div>
    </div>
  );
}

export default SignUp;