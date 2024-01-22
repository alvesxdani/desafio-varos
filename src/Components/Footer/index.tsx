import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full px-8 gap-6 flex flex-col mb-10 lg:flex-row relative lg:mb-32 lg:gap-48 justify-center">
      <div className="flex flex-col gap-4 order-1">
        <Image
          src="/Footer/logo.png"
          width={74}
          height={74}
          alt="Logo"
          priority={true}
          className="w-[74px] dark:brightness-100"
        />
        <Image
          src="./Header/logo.svg"
          width={100}
          height={20}
          alt="Logo"
          priority={true}
          className="w-[74px] brightness-0 dark:brightness-100"
        />
      </div>
      <div className="grid grid-cols-2 text-sm gap-12 order-3 md:order-2 md:grid-cols-4 lg:justify-center lg:max-w-[858px]">
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-bold">Cursos</h3>
          <a href="/">Valuation do Zero ao Avançado 2.0</a>
          <a href="/">Código.py</a>
          <a href="/">Minicurso Reels</a>
          <a href="/">Enciclopédia de FII</a>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-bold">Carteiras</h3>
          <a href="/">Carteira FATOR</a>
          <a href="/">Carteira Seleção</a>
          <a href="/">Carteira Essencial</a>
          <a href="/">Carteira Small Caps</a>
          <a href="/">Carteira Dividendos</a>
          <a href="/">Carteira de FIIs</a>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-bold">Sobre</h3>
          <a href="/">Quem somos</a>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-bold">Redes sociais</h3>
          <a href="/">Instagram</a>
          <a href="/">Twitter</a>
          <a href="/">Youtube</a>
        </div>
      </div>
      <div className="flex flex-col text-sm order-2 md:order-3 lg:block lg:w-full lg:absolute lg:bottom-[-5rem] lg:left-4">
        <p>VAROS 2023</p>
        <p>Todos os direitos reservados</p>
      </div>
    </footer>
  )
}

export default Footer
