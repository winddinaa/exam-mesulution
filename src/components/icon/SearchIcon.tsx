import React from "react";

const SearchIcon = ({
  className,
  stroke = "#5B5B5B",
}: {
  className?: string;
  stroke?: string;
}) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16.7612 16.8198L13.1362 13.1948M15.0946 8.48649C15.0946 12.1684 12.1098 15.1532 8.4279 15.1532C4.746 15.1532 1.76123 12.1684 1.76123 8.48649C1.76123 4.80459 4.746 1.81982 8.4279 1.81982C12.1098 1.81982 15.0946 4.80459 15.0946 8.48649Z"
        stroke={stroke}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;
