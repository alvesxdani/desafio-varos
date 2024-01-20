'use client'
import Button from '@/Components/Button'
import Image from 'next/image'
import React, { useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { IoMdArrowDropright } from 'react-icons/io'

interface IOptions {
  title: string
  children: {
    id: number
    label: string
    icon: string
  }[]
}

const Conteudos = () => {
  const [selectedTitle, setSelectedTitle] = useState<number>(1)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Função para manipular a abertura/fechamento do accordion
  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    console.log(index)
  };


  const options: IOptions[] = [
    {
      title: 'Carteiras',
      children: [
        {
          id: 1,
          label: 'Carteira Seleção',
          icon: '/Conteudos/carteiras/selecao-icon.png',
        },
        {
          id: 2,
          label: 'Carteira FATOR',
          icon: '/Conteudos/carteiras/FATOR.png',
        },
        {
          id: 3,
          label: 'Carteira Dividendos',
          icon: '/Conteudos/carteiras/Dividendos.png',
        },
        {
          id: 4,
          label: 'Carteira Essencial',
          icon: '/Conteudos/carteiras/Essencial.png',
        },
        {
          id: 5,
          label: 'Carteira de Flls',
          icon: '/Conteudos/carteiras/Flls.png',
        },
        {
          id: 6,
          label: 'Carteira Small Caps',
          icon: '/Conteudos/carteiras/Flls.png',
        },
      ],
    },
    {
      title: 'Cursos',
      children: [
        {
          id: 1,
          label: 'Valuation 2.0',
          icon: '/Conteudos/cursos/valuation.png',
        },
        { id: 2, label: 'Código.py', icon: '/Conteudos/cursos/CODIGO.png' },
        { id: 3, label: 'Dash.py', icon: '/Conteudos/cursos/Dash.png' },
        {
          id: 4,
          label: 'Carteira Essencial',
          icon: '/Conteudos/cursos/Essencial.png',
        },
        {
          id: 5,
          label: 'Cursos Reels',
          icon: '/Conteudos/cursos/minicurso.png',
        },
        {
          id: 6,
          label: 'Enciclopédia do Fll',
          icon: '/Conteudos/cursos/Enciclopedia.png',
        },
      ],
    },
    {
      title: 'Consultoria',
      children: [
        {
          id: 1,
          label: 'Consultoria VAROS',
          icon: '/Conteudos/consultoria/VZA.png',
        },
      ],
    },
  ]

  return (
    <section id="conteudos" className="flex flex-col p-4 gap-10">
      <div className="flex flex-col gap-4 md:w-[90%] lg:w-[70%] text-start">
        <h2 className="text-2xl md:text-[38px] text-center md:text-start leading-[120%] font-bold md:max-w-[60%]">
          Simplifique seus investimentos e alcance seus objetivos
        </h2>
        <p className="text-lg text-center md:text-start">
          Conteúdos preparados para trazer mais segurança, independente do seu
          nível.
        </p>
      </div>

      <div className="flex flex-col w-[100%] md:flex-row gap-8 lg:gap-[100px] md:justify-center">
        <div className="flex flex-col gap-4">
          {options.map(({ title, children }, index) => {
            return (
              <div key={title} className="flex flex-col gap-4">
                <Button
                  bg="grey"
                  format="rounded"
                  icon={<IoMdArrowDropdown />}
                  onClick={() => toggleAccordion(index)}
                >
                  {title}
                </Button>
                {openIndex  === index && <ul
                        className="bg-[#131516] border-[#222729] border p-8 rounded-[32px] flex flex-col gap-[22px] justify-start items-start text-white"
                      >
                {children.map(
                  ({ id, label, icon }) =>
                   (
                        <li
                        key={id}
                          onClick={() => setSelectedTitle(id)}
                          className={`p-4 flex gap-4 rounded-[32px] justify-center text-sm cursor-pointer ${
                            selectedTitle === id
                              ? 'bg-[#222729] bg-opacity-50'
                              : ''
                          }`}
                        >
                          <Image
                            src={icon}
                            width={22}
                            height={22}
                            alt="Logo"
                            priority={true}
                            className="h-[23px]"
                          />
                          <span className="whitespace-nowrap">{label}</span>
                        </li>
                    ),
                )}
                </ul>}
              </div>
            )
          })}
        </div>
        <div className="bg-[#131516] border-[#222729] border p-8 rounded-[32px] flex flex-col gap-[22px] justify-start items-start 
          text-white md:w-[560px] lg:w-[662px] relative overflow-hidden">
          <div className="flex gap-4 p-4">
            {/* {selectedTab !== null && (
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
              : null} */}
          </div>
          <div className="flex flex-col gap-4 md:w-[70%] md:min-h-[400px]">
            <h3 className="text-2xl font-semibold leading-6">
              A combinação perfeita pra você aproveitar a virada da Bolsa
            </h3>
            <p>
              Juntamos o que há de melhor nas Carteiras VAROS: uma estratégia
              completa para você ter resultados exponenciais.
            </p>
          </div>
          <div className="rounded-xl md:absolute md:bottom-0 translate-x-6">
            <Image
              src="/Conteudos/grafico.png"
              width={2000}
              height={2000}
              alt="Logo"
              priority={true}
              className="h-[292px] box-border relative object-cover 
              md:object-contain md:w-[621px] md:h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Conteudos
