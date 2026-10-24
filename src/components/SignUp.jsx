import React from 'react';
import styles from './SignUp.module.css';
import blossomImage from '../assets/blossom-flower.svg';

function SignUp() {
  return (
    <div className={styles.container}>
      {/* Left Section - Empty for now */}
      <div className={styles.leftSection}></div>

      {/* Right Section - Image Display */}
      <div className={styles.rightSection}>
        <img src={blossomImage} alt="Blossom Flower" className={styles.blossomImg} />
      </div>
    </div>
  );
}

export default SignUp;