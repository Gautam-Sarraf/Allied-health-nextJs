import Image from 'next/image';
import styles from './hero.module.css';
import EnquiryButton from "../EnquiryBtn";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBlob + " " + styles.heroTopLeftBlob}></div>
      <div className={styles.heroBlob + " " + styles.heroBottomRightBlob}></div>
      <div className={styles.heroContainer}>
        <div className={styles.mainContainer}>
          {/* Top Left Images */}
          <div className={styles.imageGrid}>
            <div className={`${styles.imageBox} ${styles.img1}`}>
              <Image
                src="/assets/image 1.jpg"
                alt="Speech Therapy And Occupational Therapy Clinic"
                layout="fill"
                objectFit="cover"
              />
              <div className={styles.imgCaption}>
                Speech Therapy And Occupational Therapy Clinic
              </div>
            </div>

            <div className={`${styles.imageBox} ${styles.img2}`}>
              <Image
                src="/assets/image 2.jpg"
                alt="Building Confidence In Communication"
                layout="fill"
                objectFit="cover"
              />
              <div className={styles.imgCaption}>
                Building Confidence In Communication
              </div>
            </div>
          </div>

          {/* Inverted L Tall Image */}
          <div className={styles.tallImage}>
            <Image
              src="/assets/Union.png"
              alt="Therapy Session"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Blue Text Box */}
          <div className={styles.textBox}>
            <h2>
              Comprehensive <span>Speech <br/>and Occupational</span> Therapy for All
              Ages
            </h2>
            <p>
              At our allied health clinic, we are dedicated to improving the
              health and well-being of children and adults with a wide range of
              professional services.
            </p>
            <EnquiryButton className={styles.enquiryBtn}/>
          </div>
        </div>
      </div>
    </section>
  );
}
