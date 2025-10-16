import Image from "next/image";
import styles from "./page.module.css";
import "./globals.css";
import Header from "./components/header/header";
import HeroSection from "./components/hero/hero";
import HeaderHeroWrapper from "./components/bachground/background";
import TherapyAccess from "./components/therapyAccess/therapyAccess";
import WelcomeSection from "./components/WelcomeSection/WelcomeSection";
import ServicesSection from "./components/Services/Services";
import CareSection from "./components/CareSection/CareSection";
import BlogSection from "./components/BlogSection/BlogSection";
import Testimonial from "./components/Testimonial/testimonial";
import Footer from "./components/Footer/footer";
export default function Home() {
  return (
    <>
      <HeaderHeroWrapper/>
      <TherapyAccess/>
      <WelcomeSection/>
      <ServicesSection/>
      <CareSection/>
      <BlogSection/>
      <Testimonial/>
    </>
  );
}
