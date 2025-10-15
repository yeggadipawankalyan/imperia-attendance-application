import style from './Button.module.css'; // 👈 Using module CSS

export default function MyButton({
  children,
  onClick,
  type = 'button',
  className = '',
  active = false,
  variant = '', // default
  disabled = false,
  ...rest
}) {
  // 👇 Dynamically set active/inactive class from module
  const stateClass = active ? style.active : style.inactive;
  const variantClass = style[variant] || '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn ${style.custom} ${stateClass} ${variantClass} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
