import styles from "./Card.module.css";
import { Project } from "@helpers/skillset";

const Card = ({ children, project }: { children: React.ReactNode; project: Partial<Project> }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{project.name}</div>
      <div className={styles.pic}>{children}</div>
      <div className={styles.description}>{project.description}</div>
      <div className={styles.stack}>{project.stack}</div>
    </div>
  );
};

export default Card;
