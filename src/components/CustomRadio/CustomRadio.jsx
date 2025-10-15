import "./CustomRadio.css"; // ✅ This is plain CSS (not CSS Module)

const CustomRadio = ({ name, value, checked, onChange, label }) => {
  return (
    <label className="custom-radio">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span className="radio-box" />
      {label && <span className="radio-label">{label}</span>}
    </label>
  );
};

export default CustomRadio;
