import React, { ButtonHTMLAttributes } from "react";

type ButtonT = ButtonHTMLAttributes<HTMLButtonElement> & {
  format: "square" | "rounded";
  bg: "green" | "grey" | "navy"
  icon?: JSX.Element
};

const Button = ({ format, bg, children, icon }: ButtonT): JSX.Element => {
  return (
    <button className={`
        ${format === "rounded" ? 'rounded-[48px]' : 'rounded-[5px]'}
        ${bg === 'green' ? 'bg-primaryAccent bg-opacity-40 text-primaryAccent' : 
          bg === 'grey' ? 'bg-secondAccent text-white': 'bg-[#222729] text-white'
       }
        py-4 px-12 font-bold flex items-center justify-center gap-3
        `}>
    <span>{children}</span>
    {icon}
    </button>
  )
    ;
};

export default Button;
