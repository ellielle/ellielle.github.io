import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles["header-nav"]}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navItem}>
          <span className={styles["nav-text"]}>Home</span>
        </Link>
        <Link href="/about" className={styles["nav-item"]}>
          <span className={styles["nav-text"]}>About</span>
        </Link>
        <Link href="/projects" className={styles["nav-item"]} 
        >
          <span className={styles["nav-text"]}>Projects</span>
        </Link>
        <Link href="/contact" className={styles["nav-item"]}>
          <span className={styles["nav-text"]}>Contact</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
