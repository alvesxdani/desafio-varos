'use client'
import Button from '@/Components/Button'
import Image from 'next/image'
import React, { useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { IoMdArrowDropright } from 'react-icons/io'
import { options } from './list'

const Conteudos = () => {
  const [selectedTitle, setSelectedTitle] = useState<{
    id: number
    label: string
    icon: string
  }>({
    id: options[0].children[0].id,
    label: options[0].children[0].label,
    icon: options[0].children[0].icon,
  })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  // Função para manipular a abertura/fechamento do accordion
  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
    console.log(index)
  }

  const handleClick = (id: number, label: string, icon: string) => {
    setSelectedTitle({ id: id, label: label, icon: icon })
  }

  return (
    <section
      id="conteudos"
      className="flex flex-col p-6 mb-24 gap-10 justify-center items-center"
    >
      <div className="flex flex-col gap-4 md:w-[90%] lg:w-[100%] text-left">
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
                  icon={
                    openIndex === index ? (
                      <IoMdArrowDropdown />
                    ) : (
                      <IoMdArrowDropright />
                    )
                  }
                  onClick={() => toggleAccordion(index)}
                >
                  {title}
                </Button>
                {openIndex === index && (
                  <ul className="bg-[#131516] border-[#222729] border p-8 rounded-[32px] flex flex-col gap-[22px] justify-start items-start text-white">
                    {children.map(({ id, label, icon }) => (
                      <li
                        key={id}
                        onClick={() => handleClick(id, label, icon)}
                        className={`p-4 flex gap-4 rounded-[32px] justify-center text-sm cursor-pointer ${
                          selectedTitle.id === id
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
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </div>
        <div
          className="bg-[#131516] border-[#222729] border p-8 rounded-[32px] flex flex-col gap-[22px] justify-start items-start 
          text-white md:w-[560px] lg:w-[662px] relative overflow-hidden"
        >
          <div className="flex gap-4 p-4">
            {selectedTitle !== null && (
              <Image
                src={selectedTitle.icon}
                width={22}
                height={22}
                alt="Logo"
                priority={true}
                className="w-[23px]"
              />
            )}
            {selectedTitle !== null ? selectedTitle.label : ''}
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
          <div className="rounded-xl md:absolute md:bottom-0 md:translate-x-6">
            <Image
              src="/Conteudos/grafico.png"
              width={2000}
              height={2000}
              alt="Logo"
              priority={true}
              className="h-[292px] box-border object-cover 
              md:object-contain md:w-[621px] md:h-auto rounded-[32px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Conteudos
