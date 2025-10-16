// app/components/HeaderHeroWrapper/HeaderHeroWrapper.jsx
import Header from "../header/header";
import Hero from "../hero/hero";
import styles from "./background.module.css";

export default function HeaderHeroWrapper() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Hero />
    </div>
  );
}
