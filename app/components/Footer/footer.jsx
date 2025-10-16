import React from "react";
import styles from "./footer.module.css";
import {Sora} from "next/font/google";
import Link from 'next/link';

const sora = Sora({
    subsets: ["Regular"],
    weight: ["400", "600", "700"],
});

const Footer = () => {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerContainer}>
        {/* Newsletter Section */}
        <div className={styles.newsletterSection}>
          <div className={styles.newsletterBorder}>
            <div className={`${styles.newsletterContent} ${styles.newsletterBg}`}>
              <h2>
                Subscribe To Improve Your Health
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </h2>
              <p>
                Join our newsletter for expert tips on enhancing your health and
                well-being.
              </p>
              <form className={styles.subscribeForm}>
                <input type="email" placeholder="Enter your email" required />
                <button type="submit">
                  Subscribe
                  <img src="/assets/arrow_outward.svg" alt="arrow" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className={styles.footerMainContent}>
          {/* Column 1: Logo and Brand */}
          <div className={`${styles.footerColumn} ${styles.logoColumn}`}>
            <img src="/assets/logo.png" alt="Sydney Speech Clinic Logo" />
          </div>

          {/* Social Icons for Mobile */}
          <div className={styles.socialIconsMobile}>
            <a href="#">
              <img src="/assets/f-twitter.svg" alt="twitter" />
            </a>
            <a href="#">
              <img src="/assets/f-insta.svg" alt="instagram" />
            </a>
            <a href="#">
              <img src="/assets/f-fb.svg" alt="facebook" />
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.footerColumn}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/" className={styles.active}>Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/how-we-help">How We Help</Link></li>
              <li><Link href="/booking-process">Booking Process</Link></li>
              <li><Link href="/testimonial">Testimonial</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="#">FAQs</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className={styles.footerColumn}>
            <h4>Services</h4>
            <ul>
              <li><Link href="/speech-therapy" className={styles.active}>Speech Therapy</Link></li>
              <li><Link href="/occupational-therapy">Occupational Therapy</Link></li>
              <li><Link href="/pediatric-therapy">Pediatric Therapy</Link></li>
              <li><Link href="/adult-therapy">Adult Therapy</Link></li>
              <li><Link href="/teletherapy-services">Teletherapy Services</Link></li>
              <li><Link href="/group-therapy-programs">Group Therapy Programs</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className={`${styles.footerColumn} ${styles.contactColumn}`}>
            <h4>Contact Us</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <img src="/assets/f-main.svg" alt="mail" />
                <a href="mailto:info@sydneyspeechclinic.com.au">
                  info@sydneyspeechclinic.com.au
                </a>
              </li>
              <li className={styles.contactItem}>
                <img src="/assets/f-call.svg" alt="call" />
                <a href="tel:0284040715">Phone: 02 8404 0715</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.footerBottomBar}>
          <p>Copyright 2020 (C) Sydney Speech Clinic</p>
          <div className={styles.legalLinks}>
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms & Conditions</a>
          </div>
          <div className={`${styles.socialIcons} ${styles.socialIconsDesktop}`}>
            <a href="#">
              <img src="/assets/f-twitter.svg" alt="twitter" />
            </a>
            <a href="#">
              <img src="/assets/f-insta.svg" alt="instagram" />
            </a>
            <a href="#">
              <img src="/assets/f-fb.svg" alt="facebook" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
