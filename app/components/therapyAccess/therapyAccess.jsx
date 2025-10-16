import styles from './TherapyAccess.module.css';

const TherapyAccess = () => {
  return (
    <section className={styles.therapyAccessSection}>
      <div className={styles.therapyAccessBackground}>
        <h2 className={styles.therapyAccessTitle}>
          Access Professional Therapy From Anywhere
        </h2>
        <p className={styles.therapyAccessSubtitle}>
          Convenient and Secure Online Therapy Sessions
        </p>
        <div className={styles.therapyAccessButtons}>
          <a href="#" className={`${styles.therapyAccessBtn} ${styles.therapyBtnPrimary}`}>
            <span>Email Us</span>
            {/* Inlined SVG for arrow icon, as external images can be tricky */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          </a>
          <a href="#" className={`${styles.therapyAccessBtn} ${styles.therapyBtnOutline}`}>
            <span>Call Us</span>
            {/* Inlined SVG for arrow icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TherapyAccess;

