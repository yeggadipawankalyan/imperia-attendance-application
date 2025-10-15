import MyButton from "../Button/Button";
import "./TabSwitcher.css";

const TabSwitcher = ({ tabs = [], activeTab, onTabChange }) => {
  return (
    <div className="d-flex p-1 secondary-color mb-2 flex-wrap tab-switcher-container">
      {/* <div className="text-center text-size switch py-2 rounded-1  active-tab">Administration</div>
      <div className="text-center text-size switch py-2 rounded-1 inactive-tab">Class</div>
      <div className="text-center text-size switch py-2 rounded-1 inactive-tab">Academics</div>
      <div className="text-center text-size switch py-2 rounded-1 inactive-tab">Human Management</div> */}
      {tabs.map((tab) => (
        <div
          key={tab.value}
          className={`d-flex align-items-center text-spacing justify-content-center text-size switch  rounded-2 ${activeTab === tab.value ? "active-tab" : "inactive-tab"}`}
          onClick={() => onTabChange(tab.value)}
        >
          {tab.label}
        </div>
      ))}
      {/* {tabs.map((tab) => (
        <MyButton
          key={tab.value}
          onClick={() => onTabChange(tab.value)}
          active={activeTab === tab.value}
          // variant={activeTab === tab.value ? "maroon" : "grey"}
        >
          {tab.label}
        </MyButton>
      ))} */}
    </div>
  );
};

export default TabSwitcher;
