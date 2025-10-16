"use client";
import Image from "next/image";
import styles from "./WelcomeSection.module.css";
import EnquiryButton from "../EnquiryBtn";

const WelcomeSection = () => {
  return (
    <section className={styles.welcomeSection}>
      <div className={styles.welcomeContainer}>
        <div className={styles.welcomeLeft}>
          {/* Header */}
          <div className={styles.welcomeHeader}>
            <div className={styles.welcomeTextContent}>
              <p className={styles.subheading}>WELCOME TO OUR CLINIC</p>
              <h2 className={styles.heading}>
                Speech And Occupational Therapy For All Ages
              </h2>
            </div>

            <div className={styles.welcomeSeparator}></div>

            <div className={styles.welcomeIntro}>
              <p>
                Providing comprehensive speech and occupational therapy services
                for individuals of all ages, helping them achieve their full
                potential.
              </p>
              <EnquiryButton />
            </div>
          </div>

          {/* Large Image */}
          <div className={styles.welcomeLargeImageWrapper}>
            <Image
              className={styles.welcomeImageLarge}
              src="/assets/wel-image-1.jpg"
              alt="Therapist with a patient in a bright, welcoming clinic."
              width={600}
              height={400}
            />
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.welcomeRight}>
          <div className={styles.welcomeImageSmallWrapper}>
            <Image
              className={styles.welcomeImageSmall}
              src="/assets/wel-image-2.png"
              alt="Child happily engaging in a therapy activity."
              width={300}
              height={300}
            />
            <div className={styles.playButton}>
              <Image
                className={styles.welIconPlaceholder}
                src="/assets/Frame 1618873032.png"
                alt="play-button"
                width={46}
                height={46}
              />
            </div>
          </div>

          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <div className={styles.number}>5,000</div>
              <div className={styles.label}>Recovered Patients</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.number}>98%</div>
              <div className={styles.label}>Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
