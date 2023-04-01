import styles from "./Card.module.css";

const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.finishMe}>{children}</div>;
};

export default Card;
