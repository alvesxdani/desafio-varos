import React, { ButtonHTMLAttributes } from 'react'

type ButtonT = ButtonHTMLAttributes<HTMLButtonElement> & {
  format: 'square' | 'rounded'
  bg: 'green' | 'greenLight' | 'grey' | 'dark'
  icon?: JSX.Element
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: 'submit' | 'button'
}

const Button = ({
  format,
  bg,
  children,
  icon,
  onClick,
  type,
  className,
}: ButtonT): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={`
    py-4 px-12 font-bold flex items-center justify-center gap-3
        ${format === 'rounded' ? 'rounded-[48px]' : 'rounded-[5px]'}
        ${
          bg === 'green'
            ? 'bg-primaryAccent dark:bg-opacity-30 text-primaryAccent bg-opacity-15'
            : bg === 'grey'
            ? 'bg-secondAccent text-white'
            : bg === 'dark'
            ? 'bg-[#131516] text-white border border-[#222729]'
            : bg === 'greenLight'
            ? 'bg-primaryAccent text-black px-8 text-[18px] font-semibold tracking-wide'
            : ''
        }`}
      type={type}
    >
      <span>{children}</span>
      {icon}
    </button>
  )
}

export default Button
