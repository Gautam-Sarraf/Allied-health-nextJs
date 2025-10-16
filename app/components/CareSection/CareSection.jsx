"use client";
import Image from "next/image";
import styles from "./CareSection.module.css";
import "../../globals.css";
import EnquiryButton from "../EnquiryBtn";

export default function CareSection() {
  return (
    <section className={styles["care-showcase-section"]}>
      <div className={styles["care-container"]}>
        <div className={styles["care-card-wrapper"]}>
          <div className={styles["care-section-grid"]}>
            {/* Left Column: Image and Testimonial Overlay */}
            <div className={styles["image-block"]}>
              <Image
                src="/assets/care-image.jpg"
                alt="A diverse family sitting together on a couch, smiling."
                className={styles["main-image"]}
                width={600}
                height={400}
                onError={(e) => {
                  const target = e.currentTarget;
                  target.src =
                    "https://placehold.co/600x400/404040/FFFFFF?text=Placeholder";
                }}
              />

              {/* Review Card Overlay */}
              <div className={styles["review-overlay-card"]}>
                <strong>5K+ Patients</strong>
                <div className={styles["reviews-meta"]}>
                  <Image
                    className={styles["star-icon"]}
                    src="/assets/Star 5.svg"
                    alt="star"
                    width={18}
                    height={18}
                  />
                  <span>5.0 (200 Reviews)</span>
                </div>

                <div className={styles["avatar-group"]}>
                  <Image
                    className={styles["avatar"]}
                    src="/assets/Avatar.svg"
                    alt="Avatar 1"
                    width={35}
                    height={35}
                  />
                  <Image
                    className={styles["avatar"]}
                    src="/assets/Avatar (1).svg"
                    alt="Avatar 2"
                    width={35}
                    height={35}
                  />
                  <Image
                    className={styles["avatar"]}
                    src="/assets/Avatar (3).svg"
                    alt="Avatar 3"
                    width={35}
                    height={35}
                  />
                  <Image
                    className={styles["avatar"]}
                    src="/assets/Avatar (2).svg"
                    alt="Avatar 4"
                    width={35}
                    height={35}
                  />
                  <div className={styles["avatar-plus"]}>+8</div>
                </div>
              </div>
            </div>

            {/* Right Column: Content and CTA */}
            <div className={styles["content-block"]}>
              <h2>Discover The Difference Of Our Comprehensive Care</h2>
              <p>
                Receive personalized care for the whole family at our health
                clinic. Our dedicated team provides comprehensive services for
                children and adults, focusing on quality and compassion to
                ensure the highest level of care for every patient.
              </p>

              {/* Feature List */}
              <ul className={styles["feature-list"]}>
                <li className={styles["feature-item"]}>
                  <Image src="/assets/tick.svg" alt="tick" width={16} height={16} />
                  Personalized Treatment Plans
                </li>
                <li className={styles["feature-item"]}>
                  <Image src="/assets/tick.svg" alt="tick" width={16} height={16} />
                  Experienced and Caring Team
                </li>
                <li className={styles["feature-item"]}>
                  <Image src="/assets/tick.svg" alt="tick" width={16} height={16} />
                  State-of-the-Art Facilities
                </li>
              </ul>

              {/* CTA Button */}
              <EnquiryButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
