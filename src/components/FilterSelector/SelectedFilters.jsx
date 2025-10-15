import styles from "./SelectedFilters.module.css";
import { MdClose } from "react-icons/md";

export default function SelectedFilters({ filters = {}, removeBtn=false, onRemove = () => {} }) {
  // eslint-disable-next-line no-unused-vars
  const entries = Object.entries(filters).filter(([_, value]) => value);

  if (entries.length === 0) return null;

  return (
    <div className={styles.wrapper}>
      {entries.map(([key, value]) => (
        <div key={key} className={styles.filterTag}>
          <div className={styles.label}>{key}</div>
          <div className={styles.value}>{value}</div>
          {removeBtn && <button
            className={styles.removeBtn}
            onClick={() => onRemove(key)}
            aria-label={`Remove ${key}`}
          >
            <MdClose size={16} />
          </button>}
        </div>
      ))}
    </div>
  );
}
