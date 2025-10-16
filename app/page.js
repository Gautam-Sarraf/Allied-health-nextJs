import "./globals.css";
import HeaderHeroWrapper from "./components/bachground/background";
import TherapyAccess from "./components/therapyAccess/therapyAccess";
import WelcomeSection from "./components/WelcomeSection/WelcomeSection";
import ServicesSection from "./components/Services/Services";
import CareSection from "./components/CareSection/CareSection";
import BlogSection from "./components/BlogSection/BlogSection";
import Testimonial from "./components/Testimonial/testimonial";

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
