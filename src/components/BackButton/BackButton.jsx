import { useNavigate } from "react-router-dom";
import { SlArrowLeft } from "react-icons/sl";
import styles from "./BackButton.module.css";

export default function BackButton({
  text = "",
  icon = <SlArrowLeft />,
  path = "/",
  className = "",
  iconPosition = "left", // or "right"
  variant = "btn", // bootstrap classes or custom
})
 {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path); // 👈 go to passed path
  };
  return (
    <button onClick={handleClick}className={`${variant} ${styles["back-button"]} d-flex align-items-center py-2 px-2 ${className}`}>
      {iconPosition === "left" && icon}
      <span>{text}</span>
      {iconPosition === "right" && icon}
    </button>
  );
}


