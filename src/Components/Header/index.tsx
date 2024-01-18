'use client'
import Image from "next/image";
import React, { HTMLAttributes, SetStateAction, useEffect, useState } from "react";
import Toggle from "../Toggle";
import { IoClose } from "react-icons/io5";

const Menu = ({
  className,
}: HTMLAttributes<HTMLElement>): React.JSX.Element => {
  return (
    <ul className={className}>
      <li>
        <a href="/">Produtos</a>
      </li>
      <li>
        <a href="/">Blog</a>
      </li>
      <li>
        <a href="/">Conteúdos</a>
      </li>
      <li>
        <a href="/">Quem Somos</a>
      </li>
    </ul>
  );
};

const Header = () => {
    const [isOpen, setIsOpen] = useState<SetStateAction<boolean>>(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

  return (
    <header className="flex justify-between items-center flex-wrap h-[88px] px-10 py-3">
      <div className="flex gap-10">
        <Image
          src="./Header/logo.svg"
          width={100}
          height={20}
          alt="Logo"
          priority={true}
          className="brightness-0 dark:brightness-100"
        />

        {/* Menu desk */}
        <Menu className="hidden lg:flex w-[100%] lg:gap-[80px]" />
      </div>

      <div className="flex gap-8">
        <Toggle />
        <button onClick={toggleMenu}>
          <Image
            src="./Header/menu.svg"
            width={100}
            height={20}
            alt="Logo"
            priority={true}
            className="brightness-0 dark:brightness-100 lg:hidden"
          />
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && <div className="flex lg:hidden transition-all">
        <Menu className="w-[100%] min-h-[100vh] flex flex-col text-4xl gap-10 items-center justify-center bg-white dark:bg-dark absolute top-0 left-0 z-5" />
        <button className="asbolute right-0 top-0 dark:text-white z-10">
          <IoClose size={30} onClick={toggleMenu}/>
        </button>
      </div>}
    </header>
  );
};

export default Header;
