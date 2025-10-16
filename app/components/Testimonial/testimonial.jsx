"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./testimonial.module.css";

const Testimonial = () => {
  useEffect(() => {
    // Testimonial Data Array
    const testimonials = [
      {
        name: "Jessica L",
        location: "Melbourne, Australia",
        quote: "This clinic is a lifesaver!",
        image: "/assets/cat1.jpg",
        alt: "Image of Sarah M, a happy patient",
      },
      {
        name: "Sarah M",
        location: "Sydney, Australia",
        quote:
          "This clinic is a lifesaver! The occupational therapy sessions were thorough, and I appreciated how they involved my entire family in the process. We saw great results, and my child is more confident and capable now.",
        image: "/assets/jesica.jpg",
        alt: "Image of David T, recovering from injury",
      },
      {
        name: "David T",
        location: "Perth, Australia",
        quote: "The speech pathology services were exceptional.",
        image: "/assets/cat2.jpg",
        alt: "Image of Jessica L, praising speech services",
      },
      {
        name: "Michael K",
        location: "Brisbane, Australia",
        quote: "Outstanding care from the moment I walked in.",
        image: "/assets/cat3.png",
        alt: "Image of Michael K, receiving holistic care",
      },
    ];

    let currentIndex = 0;
    const prevArrow = document.getElementById("prev-arrow");
    const nextArrow = document.getElementById("next-arrow");
    const dotContainer = document.getElementById("pagination-dots");
    const quoteContainer = document.getElementById("quote-transition-container");
    const imageContainer = document.getElementById("image-transition-container");
    const imageCard = document.querySelector(`.${styles.imageCard}`);

    // Create a dedicated host for patient info above the image
    const patientInfoHost = document.createElement("div");
    patientInfoHost.id = "patient-info-host";
    patientInfoHost.className = styles.patientInfo;

    // Insert patient info host after the image container
    if (imageCard && imageContainer) {
      if (imageContainer.nextSibling) {
        imageCard.insertBefore(patientInfoHost, imageContainer.nextSibling);
      } else {
        imageCard.appendChild(patientInfoHost);
      }
    }

    const createQuoteElement = (testimonial, index, isActive) => `
        <div class="${styles.slideContent} ${isActive ? styles.activeQuote : ""}" data-index="${index}">
            <p class="${styles.patientQuote}">${testimonial.quote}</p>
        </div>
    `;

    const createImageElement = (testimonial, index, isActive) => `
        <div class="${styles.slideImage} ${isActive ? `${styles.activeImage} ${styles.activeInfo}` : ""}" data-index="${index}">
            <img class="${styles.patientImage}" src="${testimonial.image}" alt="${testimonial.alt}"
                 onerror="this.onerror=null;this.src='https://placehold.co/600x600/6A5ACD/FFFFFF?text=User+Image';" />
        </div>
    `;

    const renderPatientInfo = () => {
      const t = testimonials[currentIndex];
      if (!patientInfoHost) return;
      patientInfoHost.innerHTML = `
          <h3 class="${styles.patientName}">${t.name}</h3>
          <p class="${styles.patientLocation}">${t.location}</p>
      `;
    };

    const renderCarousel = () => {
      quoteContainer.innerHTML = testimonials
        .map((t, i) => createQuoteElement(t, i, i === currentIndex))
        .join("");
      imageContainer.innerHTML = testimonials
        .map((t, i) => createImageElement(t, i, i === currentIndex))
        .join("");

      renderPatientInfo();

      dotContainer.innerHTML = testimonials
        .map(
          (_, i) =>
            `<div class="${styles.dot} ${i === currentIndex ? styles.active : ""}" data-index="${i}"></div>`
        )
        .join("");

      document.querySelectorAll(`.${styles.dot}`).forEach((dot) => {
        dot.addEventListener("click", (e) => {
          const newIndex = parseInt(e.target.dataset.index);
          if (newIndex !== currentIndex) {
            const direction = newIndex > currentIndex ? "left" : "right";
            goToSlide(newIndex, direction);
          }
        });
      });

      updateArrows();
    };

    const goToSlide = (newIndex, direction) => {
      if (
        newIndex < 0 ||
        newIndex >= testimonials.length ||
        newIndex === currentIndex
      )
        return;

      const oldIndex = currentIndex;
      const oldQuote = quoteContainer.querySelector(`[data-index="${oldIndex}"]`);
      const newQuote = quoteContainer.querySelector(`[data-index="${newIndex}"]`);
      const oldImage = imageContainer.querySelector(`[data-index="${oldIndex}"]`);
      const newImage = imageContainer.querySelector(`[data-index="${newIndex}"]`);

      if (direction === "left") {
        oldQuote.classList.add(styles.slideLeaveLeft);
        newQuote.classList.add(styles.slideEnterRight);
      } else {
        oldQuote.classList.add(styles.slideLeaveRight);
        newQuote.classList.add(styles.slideEnterLeft);
      }

      oldImage.classList.remove(styles.activeImage, styles.activeInfo);
      newImage.classList.add(styles.activeImage, styles.activeInfo);

      setTimeout(() => {
        oldQuote.classList.remove(
          styles.activeQuote,
          styles.slideLeaveLeft,
          styles.slideLeaveRight
        );
        newQuote.classList.add(styles.activeQuote);
        newQuote.classList.remove(styles.slideEnterLeft, styles.slideEnterRight);
        currentIndex = newIndex;
        renderPatientInfo();
        updateDots();
        updateArrows();
      }, 50);
    };

    const updateDots = () => {
      document.querySelectorAll(`.${styles.dot}`).forEach((dot, i) => {
        dot.classList.toggle(styles.active, i === currentIndex);
      });
    };

    const updateArrows = () => {
      prevArrow.classList.toggle(styles.disabled, currentIndex === 0);
      nextArrow.classList.toggle(
        styles.disabled,
        currentIndex === testimonials.length - 1
      );
    };

    prevArrow.addEventListener("click", () => {
      if (currentIndex > 0) {
        goToSlide(currentIndex - 1, "right");
      }
    });

    nextArrow.addEventListener("click", () => {
      if (currentIndex < testimonials.length - 1) {
        goToSlide(currentIndex + 1, "left");
      }
    });

    renderCarousel();
  }, []);

  return (
    <section className={styles.testimonialSection}>
      <div className={styles.testimonialContentWrapper}>
        <div className={styles.sectionHeader}>
          <h2>What Our Patients Say About Us</h2>
          <p>
            Discover what our happy patients have to say about their
            <br />
            experiences at Allied Health Clinic.
          </p>
        </div>

        <div className={styles.carouselContainer}>
          {/* Image Card */}
          <div className={`${styles.testimonialCard} ${styles.imageCard}`}>
            <div
              className={styles.imageTransitionContainer}
              id="image-transition-container"
            ></div>
          </div>

          {/* Quote Card */}
          <div className={`${styles.testimonialCard} ${styles.quoteCard}`}>
            <div className={styles.quoteTextWrapper}>
              <span className={`${styles.quoteIcon} ${styles.quoteStart} ${styles.desktopQuote}`}>
                <Image className={styles.quote} src="/assets/quote1.svg" alt="quote" width={60} height={45} />
              </span>
              <span className={`${styles.quoteIcon} ${styles.quoteStart} ${styles.mobileQuote}`}>
                <Image className={styles.quoteM} src="/assets/mobile-quotes.svg" alt="quote" width={24} height={24} />
              </span>

              <div
                className={styles.quoteTransitionContainer}
                id="quote-transition-container"
              ></div>

              <span className={`${styles.quoteIcon} ${styles.quoteEnd} ${styles.desktopQuote}`}>
                <Image className={styles.quote} src="/assets/quote.svg" alt="quote" width={60} height={45} />
              </span>
              <span className={`${styles.quoteIcon} ${styles.quoteEnd} ${styles.mobileQuote}`}>
                <Image className={styles.quoteM} src="/assets/mobile-quote-e.svg" alt="quote" width={24} height={24} />
              </span>
            </div>

            {/* Carousel Controls */}
            <div className={styles.carouselControls}>
              <div className={styles.navArrow} id="prev-arrow">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 12H5M12 5L5 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className={styles.paginationDots} id="pagination-dots"></div>

              <div className={styles.navArrow} id="next-arrow">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M12 5L19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
