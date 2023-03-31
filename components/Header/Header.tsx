import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navItem}>
          <span className={styles.navText}>Home</span>
        </Link>
        <Link href="/about" className={styles.navItem}>
          <span className={styles.navText}>Home</span>
        </Link>
        <Link href="/projects" className={styles.navItem}>
          <span className={styles.navText}>Home</span>
        </Link>
        <Link href="/contact" className={styles.navItem}>
          <span className={styles.navText}>Home</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;