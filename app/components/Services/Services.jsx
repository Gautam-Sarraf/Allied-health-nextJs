"use client";
import Image from "next/image";
import styles from "./Services.module.css";


const toCamel = (kebab = "") =>
  kebab.replace(/-([a-z])/g, (m, p1) => p1.toUpperCase());

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Speech",
      icon: "/assets/speech.svg",
      alt: "speech",
      desc: `Children with speech difficulties may be experiencing delays/disorders of articulation and phonology, childhood apraxia of speech (CAS) or stuttering. If your child is difficult t...`,
      extraClasses: ["icon-speech"],
    },
    {
      id: 2,
      title: "Language",
      icon: "/assets/language.svg",
      alt: "language",
      desc: `Language difficulties may encompass delayed receptive and expressive language skills, late talkers, delayed development of play skills, reduced attention span, specific language i...`,
      extraClasses: ["icon-language"],
    },
    {
      id: 3,
      title: "Literacy",
      icon: "/assets/literacy.svg",
      alt: "literacy",
      desc: `Literacy is language based and successfully learning to read and spell involves five ‘key’ skill areas; phonemic awareness (the ability to identify and manipulate the sounds in words...`,
      extraClasses: ["icon-literacy"],
    },
    {
      id: 4,
      title: "Gross motor",
      icon: "/assets/gross.svg",
      alt: "gross-motor",
      desc: `Gross motor skills are those which require whole body movement and which involve the large muscles of the body. These whole body movements rely on having a strong and stabl...`,
      extraClasses: ["icon-gross-motor", "hide-card"],
    },
    {
      id: 5,
      title: "Handwriting",
      icon: "/assets/handwriting.svg",
      alt: "handwriting",
      desc: `Early handwriting skills are fundamental skills children need to develop before they are able to write. These skills contribute to the child’s ability to hold and use a pencil, and the abilit...`,
      extraClasses: ["icon-handwriting", "hide-card"],
    },
    {
      id: 6,
      title: "Cognition",
      icon: "/assets/cog.svg",
      alt: "cognition",
      desc: `Cognitive development means how children think, explore and figure things out. It is the development of knowledge, skills, problem solving and dispositions, which help childre...`,
      extraClasses: ["icon-cognition", "hide-card"],
    },
  ];

  return (
    <section className={styles.servicesSection}>
      <div className={styles.serviceContainer}>
        {/* Header */}
        <div className={styles.servicesHeader}>
          <div className={styles.servicesHeaderText}>
            <h2>How We Help</h2>
            <p>Discover Our Comprehensive Support Services</p>
          </div>

          <a href="#" className={styles.viewMoreButton}>
            View More
            <Image
              src="/assets/arrow_outward.svg"
              alt="arrow"
              width={13}
              height={13}
            />
          </a>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {services.map((s) => {
            const extraCardClasses = (s.extraClasses || [])
              .map((c) => {
                const key = toCamel(c);
                return styles[key] || "";
              })
              .join(" ")
              .trim();

            return (
              <div
                key={s.id}
                className={`${styles.serviceCard} ${extraCardClasses}`.trim()}
              >
                <div
                  className={`${styles.iconPlaceholder} ${
                    // also try to add icon wrapper class if provided (first extraClass)
                    s.extraClasses && s.extraClasses[0]
                      ? styles[toCamel(s.extraClasses[0])]
                      : ""
                  }`.trim()}
                >
                  <Image src={s.icon} alt={s.alt} width={80} height={80} />
                </div>

                <h3>{s.title}</h3>

                <p>{s.desc}</p>

                <a href="#" className={styles.learnMoreLink}>
                  Learn More
                  <Image
                    src="/assets/arrow_outward-blue.svg"
                    alt="blue-arrow"
                    width={13}
                    height={13}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
