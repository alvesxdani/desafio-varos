import React from 'react'

const Conteudos = () => {
  return (
    <section id="conteudos" className="flex flex-col p-2">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl md:text-[38px] text-center md:text-start leading-[120%] font-bold md:max-w-[60%]">
          Simplifique seus investimentos e alcance seus objetivos
        </h2>
        <p className='text-lg text-center md:text-start'>
        Conteúdos preparados para trazer mais segurança, independente do seu nível.
        </p>
      </div>

      <div className='flex flex-col w-[100%] md:flex-row'>
        <div className='flex flex-col gap-4'>
          carteiras
        </div>
        <div>
          imagem
        </div>
      </div>
    </section>
  )
}

export default Conteudos
