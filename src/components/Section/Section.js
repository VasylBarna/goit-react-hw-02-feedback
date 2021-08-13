import styles from './Section.module.scss';

const Section = ({ title, children }) => (
  <div>
    <h2 className={styles.title}>{title}</h2>
    {children}
  </div>
);

export default Section;
