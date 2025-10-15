import  "./CustomCheckbox.css"; // ✅ CSS module import

const CustomCheckbox = ({ name, checked, onChange, label }) => {
  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <span className="checkbox-box" />
      {label && <span className="checkbox-label">{label}</span>}
    </label>
  );
};

export default CustomCheckbox;
