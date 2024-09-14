import React from 'react';
import './Button.css'; // Import the Button.css file

const Button = ({ onClick, children, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      className="btn w-full h-fit" // Using the class from Button.css
      disabled={disabled} // Optional disabled prop
    >
      {children}
    </button>
  );
};

export default Button;
