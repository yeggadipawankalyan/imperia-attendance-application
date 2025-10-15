import styles from "./ChipsSwitcher.module.css";

export default function ChipsSwitcher({ tabs = [], activeTab, onTabChange }) {
  return (
    <div className="d-flex gap-2 flex-wrap">
      {tabs.map((tab) => (
        <div
          key={tab.value}
          className={`${styles.switch} text-spacing ${
            activeTab === tab.value ? styles.activeChip : styles.inactiveChip
          }`}
          onClick={() => onTabChange(tab.value)}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
}
