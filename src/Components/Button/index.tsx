import React, { ButtonHTMLAttributes } from "react";

type ButtonT = ButtonHTMLAttributes<HTMLButtonElement> & {
  format: "square" | "rounded";
  bg: "green" | "grey" | "dark"
  icon?: JSX.Element
  onClick?: React.MouseEventHandler<HTMLButtonElement>
};

const Button = ({ format, bg, children, icon, onClick }: ButtonT): JSX.Element => {
  return (
    <button 
    onClick={onClick}
    className={`
        ${format === "rounded" ? 'rounded-[48px]' : 'rounded-[5px]'}
        ${bg === 'green' ? 'bg-primaryAccent bg-opacity-40 text-primaryAccent' : 
          bg === 'grey' ? 'bg-secondAccent text-white': 
          bg === 'dark' ? 'bg-[#131516] text-white border border-[#222729]' : ''
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
