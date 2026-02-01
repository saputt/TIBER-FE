import React from "react";

// example of component usage
{
  /* <ButtonTest variant="primary" size="full">
  Hai
</ButtonTest>
<ButtonTest variant="primary" size="md">
  Lol
</ButtonTest>
<ButtonTest variant="primary" size="sm" className="font-bold">
  Lol
</ButtonTest> */
}

const ButtonTest = ({ variant, size, children, className, onClick }) => {
  // This is only included for constant styles.
  // If the style is not constant or changes, do not include
  // it in this variable. Include it in the className props or
  // in certain custom variants.
  // change or delete the contents of the variable below,
  // if the contents are not constant
  const defaultStyle = "rounded-lg";

  // This object provides several variants along with their
  // tailwind classes. Change them to suit the component
  // variants to be created.
  const variants = {
    primary: "bg-primary text-white",
    secondary: "bg-primary/50",
    gray: "bg-gray-100 border-1 border-gray-200",
    white: "bg-white border-1 border-gray-200",
  };

  // This object provides the size type of its components.
  // Change it according to how many size types there
  // are for the components.
  const sizes = {
    sm: "py-3 px-10",
    md: "w-[80%] py-3",
    full: "w-full py-3",
  };

  return (
    <button
      className={`${sizes[size]} ${variants[variant]} ${defaultStyle} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonTest;
