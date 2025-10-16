// Header.js
"use client";
import { useState, useEffect } from "react";
import Link from 'next/link';
import styles from "./header.module.css";
import {Sora} from "next/font/google";
import EnquiryButton from "../EnquiryBtn";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <header className={styles.siteHeader}>
      {/* Top Contact Bar */}
      <div className={styles.topBar}>
        {/* UPDATED: Added styles.container */}
        <div className={`${styles.container} ${styles.topBarContent}`}>
          {/* Social Media Links */}
          <div className={styles.socialLinks}>
            <a href="#" aria-label="Facebook"><img src="/assets/ri_facebook-fill.svg" alt="Facebook" /></a>
            <a href="#" aria-label="Instagram"><img src="/assets/mdi_instagram.svg" alt="Instagram" /></a>
            <a href="#" aria-label="LinkedIn"><img src="/assets/mdi_linkedin.svg" alt="LinkedIn" /></a>
            <a href="#" aria-label="Twitter"><img src="/assets/mdi_twitter.svg" alt="Twitter" /></a>
          </div>

          {/* Contact Info */}
          <div className={styles.contactInfo}>
            <a href="mailto:info@sydneyspeechclinic.com.au">
              <img src="/assets/main.svg" alt="Email" />
              info@sydneyspeechclinic.com.au
            </a>
            <div className={styles.separator}></div>
            <a href="tel:+61284040715">
              <img src="/assets/call.svg" alt="Phone" />
              Phone: 02 8404 0715
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={styles.mainNavWrapper}>
        {/* UPDATED: Added styles.container */}
        <nav className={`${styles.container} ${styles.mainNav}`}>
          {/* Logo */}
          <div className={styles.logo}>
            <Link href="/">
                <img
                  src="/assets/logo.png"
                  alt="Sydney Speech Clinic Logo"
                  className={styles.logoImage}
                />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <ul className={styles.navLinks}>
            <li><Link href="/" className={styles.active}>Home</Link></li>
            <li><Link href="/group-therapy">Group Therapy Programs</Link></li>
            <li><Link href="/team">Our Team</Link></li>
            <li><Link href="/content">General Content</Link></li>
            <li><Link href="/articles">Our Articles</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>

          {/* Desktop Button */}
          <EnquiryButton className={`${styles.enquiryBtn} ${styles.hideBtn}`} />


          {/* Hamburger Button */}
          <button
            className={styles.hamburger}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={toggleMenu}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`${styles.mobileNavMenu} ${menuOpen ? styles.isOpen : ""}`}
      >
        <div className={styles.mobileLogo}>
          <img
            src="/assets/logo.png"
            alt="Sydney Speech Clinic Logo"
            className={styles.logoImage}
          />
        </div>
        <ul className={styles.mobileNavLinks}>
            <li><Link href="/" onClick={toggleMenu} className={styles.active}>Home</Link></li>
            <li><Link href="/group-therapy" onClick={toggleMenu}>Group Therapy Programs</Link></li>
            <li><Link href="/team" onClick={toggleMenu}>Our Team</Link></li>
            <li><Link href="/content" onClick={toggleMenu}>General Content</Link></li>
            <li><Link href="/articles" onClick={toggleMenu}>Our Articles</Link></li>
            <li><Link href="/contact" onClick={toggleMenu}>Contact Us</Link></li>
        </ul>
        <EnquiryButton className={`${styles.enquiryBtn} ${styles.mobileEnquiryBtn}`} />
      </div>

      {/* Overlay */}
      <div
        id="menu-overlay"
        className={`${styles.menuOverlay} ${menuOpen ? styles.isOpen : ""}`}
        onClick={toggleMenu}
      ></div>
    </header>
  );
}