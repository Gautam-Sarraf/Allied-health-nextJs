"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./BlogSection.module.css";

export default function BlogSection() {
  const gridRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const grid = gridRef.current;
    const cards = cardRefs.current;

    const gridTemplates = {
      0: "2fr 1fr 1fr",
      1: "1fr 2fr 1fr",
      2: "1fr 1fr 2fr",
      default: "1fr 1fr 1fr",
    };

    const isSmallScreen = () => window.matchMedia("(max-width: 1024px)").matches;
    const isMobile = () => window.matchMedia("(max-width: 640px)").matches;

    const handleActivation = (card, index) => {
      if (!isSmallScreen()) {
        cards.forEach((c) => c.classList.remove("active"));
        card.classList.add("active");
        grid.style.gridTemplateColumns = gridTemplates[index];
      } else {
        cards.forEach((c) => c.classList.remove("active"));
        card.classList.add("active");
      }
    };

    const handleDeactivation = () => {
      cards.forEach((c) => c.classList.remove("active"));
      if (!isSmallScreen()) {
        grid.style.gridTemplateColumns = gridTemplates.default;
      }
    };

    const bindDesktopInteractions = () => {
      cards.forEach((card, index) => {
        const onEnter = () => handleActivation(card, index);
        const onLeave = () => { if (document.activeElement !== card) handleDeactivation(); };
        const onClick = (e) => { 
          e.preventDefault(); 
          const wasActive = card.classList.contains("active");
          if (!wasActive) handleActivation(card, index);
          else handleDeactivation();
        };
        const onFocus = () => handleActivation(card, index);
        const onBlur = () => {
          setTimeout(() => {
            if (!grid.contains(document.activeElement)) handleDeactivation();
          }, 0);
        };

        card.addEventListener("mouseenter", onEnter);
        card.addEventListener("mouseleave", onLeave);
        card.addEventListener("click", onClick);
        card.addEventListener("focus", onFocus);
        card.addEventListener("blur", onBlur);

        card._handlers = { onEnter, onLeave, onClick, onFocus, onBlur };
      });

      // Initial active card
      handleActivation(cards[0], 0);
    };

    const unbindInteractions = () => {
      cards.forEach((card) => {
        if (!card._handlers) return;
        const { onEnter, onLeave, onClick, onFocus, onBlur } = card._handlers;
        card.removeEventListener("mouseenter", onEnter);
        card.removeEventListener("mouseleave", onLeave);
        card.removeEventListener("click", onClick);
        card.removeEventListener("focus", onFocus);
        card.removeEventListener("blur", onBlur);
        delete card._handlers;
      });
    };

    const enableMobileAlwaysOn = () => {
      cards.forEach((card) => {
        card.classList.add("active");
        const prevent = (e) => { e.preventDefault(); e.stopPropagation(); };
        card.addEventListener("click", prevent, { passive: false });
        card.addEventListener("touchstart", prevent, { passive: false });
        card._mobilePrevent = prevent;
      });
    };

    const disableMobileAlwaysOn = () => {
      cards.forEach((card) => {
        if (card._mobilePrevent) {
          card.removeEventListener("click", card._mobilePrevent);
          card.removeEventListener("touchstart", card._mobilePrevent);
          delete card._mobilePrevent;
        }
      });
    };

    if (isMobile()) enableMobileAlwaysOn();
    else bindDesktopInteractions();

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (isMobile()) enableMobileAlwaysOn();
        else {
          disableMobileAlwaysOn();
          handleDeactivation();
          unbindInteractions();
          bindDesktopInteractions();
        }
      }, 150);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      unbindInteractions();
      disableMobileAlwaysOn();
    };
  }, []);

  return (
    <section className={styles.blogSection}>
      <div className={styles.blogContentWrapper}>
        <div className={styles.blogHeader}>
          <div className={styles.blogHeaderText}>
            <h2>Explore Our Blog</h2>
            <p>Stay informed with our latest blog posts.</p>
          </div>
          <a href="#" className={styles.viewMoreButton}>
            View More
            <Image className={styles.img}
              src="/assets/arrow_outward.svg"
              alt="arrow"
              width={13}
              height={13}
            />
          </a>
        </div>

        <div className={styles.blogGrid} ref={gridRef}>
          {[
            {
              id: 1,
              img: "/assets/blog-img1.png",
              alt: "Therapist working with a child using flashcards.",
              tags: ["VocabularyBuilding", "SharedReading", "ChildDevelopment", "LanguageSkills", "EarlyLiteracy"],
              title: "Building Vocabulary During Shared Book Reading",
              text: "Research shows that reading with children from a young age greatly impacts their long-term vocabulary development (Mots & Bus, 2011). It is also a great time to bond with your child no matter what age!",
            },
            {
              id: 2,
              img: "/assets/blog-img2.jpg",
              alt: "Physical therapist helping a woman lift small weights.",
              tags: ["ArticulationGames", "SpeechArticulation", "HomePractice", "ChildSpeechDevelopment", "SpeechTherapy"],
              title: "Speech Articulation Games for Home Practice",
              text: "These strategies will help motivate your child to complete his or her homework and increase generalisation outside of the clinic room. It’s time to get a little creative!.",
            },
            {
              id: 3,
              img: "/assets/blog-img3.jpg",
              alt: "Therapist engaging in play with a baby on a mat.",
              tags: ["SpeechDevelopment", "SpeechAndTeeth", "TeethAndSpeech", "SpeechTherapy", "OralHealth"],
              title: "The Importance of Teeth in Speech",
              text: "Speech can be temporarily affected when someone gets braces. Structural issues and oral habits can contribute to longer term articulation difficulties. These may be due to:",
            },
          ].map((blog, idx) => (
            <a
              key={blog.id}
              href="#"
              className={styles.blogCard}
              tabIndex={0}
              ref={(el) => (cardRefs.current[idx] = el)}
            >
              <img
                src={blog.img}
                alt={blog.alt}
                onError={(e) => (e.currentTarget.src = `https://placehold.co/600x900/CCCCCC/FFFFFF?text=Blog+${blog.id}`)}
                className={styles.blogCardImage}
              />
              <div className={styles.blogCardTags}>
                {blog.tags.map((tag, i) => (
                  <span key={i} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <div className={styles.exterLinkBlur}>
                <div className={styles.externalLinkIcon}>
                  <Image src="/assets/arrow_outward-blue.svg" alt="blue-arrow" width={13} height={13} />
                </div>
              </div>
              <div className={styles.blogCardContent}>
                <h3 className={styles.blogCardTitle}>{blog.title}</h3>
                <p className={styles.blogCardText}>{blog.text}</p>
              </div>
              <div className={styles.blogCardActionBar}>
                <span>Explore More</span>
                <Image className={styles.img} src="/assets/arrow_outward.svg" alt="arrow" width={13} height={13} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
