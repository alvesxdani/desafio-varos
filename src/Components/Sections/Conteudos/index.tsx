"use client";
import Button from "@/Components/Button";
import Image from "next/image";
import React, { MouseEventHandler, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

interface IOptions {
  id: number;
  label: string;
  icon: string;
}

const Conteudos = () => {
  const [selectedTab, setSelectedTab] = useState<number | null>(1);

  const handleTabClick = (tabId: number) => {
    setSelectedTab(tabId);
  };

  const options: IOptions[] = [
    { id: 1, label: "Carteira Seleção", icon: "/Conteudos/selecao-icon.png" },
    { id: 2, label: "Carteira FATOR", icon: "/Conteudos/FATOR.png" },
    { id: 3, label: "Carteira Dividendos", icon: "/Conteudos/Dividendos.png" },
    { id: 4, label: "Carteira Seleção", icon: "/Conteudos/selecao-icon.png" },
  ];
  return (
    <section id="conteudos" className="flex flex-col p-2 gap-10">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl md:text-[38px] text-center md:text-start leading-[120%] font-bold md:max-w-[60%]">
          Simplifique seus investimentos e alcance seus objetivos
        </h2>
        <p className="text-lg text-center md:text-start">
          Conteúdos preparados para trazer mais segurança, independente do seu
          nível.
        </p>
      </div>

      <div className="flex flex-col w-[100%] md:flex-row gap-8">
        <div className="flex flex-col gap-4">
          <Button bg="grey" format="rounded" icon={<IoMdArrowDropdown />}>
            Carteiras
          </Button>
          <ul className="bg-[#131516] border-[#222729] border p-8 rounded-[32px] flex flex-col gap-[22px] justify-start items-start text-white">
            {options.map(({ id, icon, label }) => {
              return (
                <li
                  key={id}
                  className={`p-4 flex gap-4 rounded-[32px] justify-center ${
                    selectedTab === id ? "bg-[#222729] bg-opacity-50" : ""
                  }`}
                  onClick={() => handleTabClick(id)}
                >
                  <Image
                    src={icon}
                    width={22}
                    height={22}
                    alt="Logo"
                    priority={true}
                    className="w-[23px]"
                  />
                  <span>{label}</span>
                </li>
              );
            })}
          </ul>
          <Button bg="dark" format="rounded" icon={<IoMdArrowDropright />}>
            Cursos
          </Button>
          <Button bg="dark" format="rounded" icon={<IoMdArrowDropright />}>
            Consultoria
          </Button>
        </div>
        <div className="bg-[#131516] border-[#222729] border p-8 rounded-[32px] flex flex-col gap-[22px] justify-start items-start text-white">
          <div className="flex gap-4 p-4">
            {selectedTab !== null && (
              <Image
                src={
                  options.find(({ id }) => id === selectedTab)?.icon ||
                  options[0].icon
                }
                width={22}
                height={22}
                alt="Logo"
                priority={true}
                className="w-[23px]"
              />
            )}
            {selectedTab !== null
              ? options.find(({ id }) => id === selectedTab)?.label
              : null}
          </div>
          <div className="flex">
            <h3 className="text-xl font-semibold">A combinação perfeita pra você aproveitar a virada da Bolsa</h3>
            <p>untamos o que há de melhor nas Carteiras VAROS: uma estratégia completa para você ter resultados exponenciais.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conteudos;
