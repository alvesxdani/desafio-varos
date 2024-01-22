'use client'
import Button from '@/Components/Button'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Intro = () => {
  useEffect(() => {
    AOS.init({
      delay: 1000,
      duration: 2000,
    })
  },[])
  return (
    <section
      id="intro"
      className="w-[100%] mt-[160px] flex items-center gap-[72px] mb-[164px] justify-center p-10"
    >
      <div className="flex flex-col gap-7 md:w-[40%]" data-aos="slide-up">
        <div className="flex flex-col items-center justify-center md:items-start gap-8">
          <div className="flex flex-col gap-6">
            <h1
              className="text-center font-semibold text-5xl leading-[50px] md:text-start"
              data-aos="slide-up"
            >
              Investir de forma mais inteligente passa por aqui.
            </h1>
            <p className="text-center text-lg md:text-start">
              Fazemos de tudo para que você possa conquistar seus sonhos da
              melhor forma possível.
            </p>
          </div>
          <Button format="rounded" bg="green" icon={<FaArrowRightLong />}>
            Comprar agora
          </Button>
        </div>
        <div className="rounded-3xl p-px bg-gradient-to-r from-[#4D5358] to-transparent w-[100%]">
          <div className="dark:bg-dark bg-white p-10 rounded-3xl m-[1px] text-xl flex gap-10">
            <span className="whitespace-nowrap">visto em</span>
            <div className="overflow-hidden">
              <div className="flex w-100 gap-8 animaInfinite whitespace-nowrap w-[250%]">
                <Image
                  src="./Intro/Group.svg"
                  width={25}
                  height={25}
                  alt="Logo"
                  priority={true}
                  className="brightness-0 dark:brightness-100"
                />
                <Image
                  src="./Intro/Group-1.svg"
                  width={25}
                  height={25}
                  alt="Logo"
                  priority={true}
                  className="brightness-0 dark:brightness-100"
                />
                <Image
                  src="./Intro/Group-2.svg"
                  width={25}
                  height={25}
                  alt="Logo"
                  priority={true}
                  className="brightness-0 dark:brightness-100"
                />

                <Image
                  src="./Intro/Vector.svg"
                  width={25}
                  height={25}
                  alt="Logo"
                  priority={true}
                  className="brightness-0 dark:brightness-100"
                />

                <Image
                  src="./Intro/Group-3.svg"
                  width={25}
                  height={25}
                  alt="Logo"
                  priority={true}
                  className="brightness-0 dark:brightness-100"
                />
                <Image
                  src="./Intro/Group-4.svg"
                  width={25}
                  height={25}
                  alt="Logo"
                  priority={true}
                  className="brightness-0 dark:brightness-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex flex-col gap-20 justify-center">
        <div className='after:w-[128px] after:h-[97px] after:bg-[#39FFD9] after:content-[""] after:absolute after:rounded-full after:blur-lg after:opacity-10 after:z-[-99] after:right-0 flex items-center dark:border-[#4D5358] border p-2 gap-4 rounded-2xl z-30 relative dark:bg-dark bg-white mr-20'>
          <div className="p-3 dark:border-[#4D5358] border text-center relative w-[50px] h-[50px] rounded-lg flex justify-center items-center">
            <Image
              src="/Intro/FATOR.png"
              width={100}
              height={100}
              alt="Logo"
              className="w-5"
            />
          </div>
          <span className="whitespace-nowrap mr-20">Carteira FATOR</span>
        </div>

        <div className='after:w-[128px] after:h-[97px] after:bg-[#D3D6DF] after:content-[""] after:absolute after:rounded-full after:blur-lg after:opacity-10 after:z-[-99] after:left-0 flex items-center dark:border-[#4D5358] border p-2 gap-4 rounded-2xl z-30 relative dark:bg-dark bg-white ml-20'>
          <div className="p-3 dark:border-[#4D5358] border text-center relative w-[50px] h-[50px] rounded-lg dark:bg-dark bg-white flex justify-center items-center">
            <Image
              src="/Intro/Dividendos.png"
              width={100}
              height={100}
              alt="Logo"
              className="w-5"
            />
          </div>
          <span className="whitespace-nowrap mr-20">
            Carteira de Dividendos
          </span>
        </div>

        <div className='after:w-[128px] after:h-[97px] after:bg-[#1CB799] after:content-[""] after:absolute after:rounded-full after:blur-lg after:opacity-10 after:z-[-99] after:right-0 flex items-center dark:border-[#4D5358] border p-2 gap-4 rounded-2xl z-30 relative dark:bg-dark bg-white mr-20'>
          <div className="p-3 dark:border-[#4D5358] border flex justify-center items-center relative w-[50px] h-[50px] rounded-lg">
            <Image
              src="/Intro/codigo.png"
              width={100}
              height={100}
              alt="Logo"
              className="w-5"
            />
          </div>
          <span className="whitespace-nowrap mr-20">
            Código<span className="text-[#00F0C9]">.py</span>
          </span>
        </div>
      </div>
    </section>
  )
}

export default Intro
