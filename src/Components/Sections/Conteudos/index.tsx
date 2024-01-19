import Button from '@/Components/Button'
import Image from 'next/image'
import React from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'

const Conteudos = () => {
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

      <div className="flex flex-col w-[100%] md:flex-row">
        <div className="flex flex-col gap-4">
          <Button bg="grey" format="rounded" icon={<IoMdArrowDropdown />}>
            Carteiras
          </Button>
          <ul className="bg-[#131516] border-[#222729] border p-8 rounded-[32px] flex flex-col gap-[22px] justify-start items-start">
            <li className='bg-[#222729] bg-opacity-50 p-4 flex gap-4 rounded-[32px] justify-center'>
            <Image
                  src="/Conteudos/selecao-icon.png"
                  width={22}
                  height={22}
                  alt="Logo"
                  priority={true}
                  className='w-[22px]'
                />
              <span>Carteira Seleção</span>
            </li>
            <li className='bg-opacity-50 p-4 flex gap-4 rounded-[32px] justify-center'>
            <Image
                  src="/Conteudos/FATOR.png"
                  width={20}
                  height={20}
                  alt="Logo"
                  priority={true}
                  className='w-[23px]'
                />
              <span>Carteira FATOR</span>
            </li>

            <li className='bg-opacity-50 p-4 flex gap-4 rounded-[32px] justify-center'>
            <Image
                  src="/Conteudos/Dividendos.png"
                  width={20}
                  height={20}
                  alt="Logo"
                  priority={true}
                  className='w-[23px]'
                />
              <span>Carteira Dividendos</span>
            </li>
            <li className='bg-opacity-50 p-4 flex gap-4 rounded-[32px] justify-center'>
            <Image
                  src="/Conteudos/selecao-icon.png"
                  width={22}
                  height={22}
                  alt="Logo"
                  priority={true}
                  className='w-[22px]'
                />
              <span>Carteira Seleção</span>
            </li>
          </ul>
        </div>
        <div>imagem</div>
      </div>
    </section>
  )
}

export default Conteudos
