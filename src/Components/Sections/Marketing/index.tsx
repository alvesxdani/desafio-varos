'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import { comments } from './comments'
import Image from 'next/image'

const Marketing = () => {
  return (
    <section
      id="marketing"
      className="flex flex-col mb-44 gap-10 justify-center items-center md:flex-row m-6"
    >
      <div className="flex flex-col gap-14 p-2">
        <div className="flex flex-col gap-2">
          <h2 className="text-center text-5xl font-bold md:text-4xl md:text-start">
            Didática de verdade
          </h2>
          <p className="text-sm text-center font-bold md:text-lg md:text-start">
            Garantindo seu aprendizado
          </p>
        </div>

        <div className="flex justify-center w-dvw md:w-[415px] p-4">
          <Swiper
            autoplay={{
              delay: 1000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="w-full min-h-[450px]"
          >
            {comments.map(({ author, message }, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#131516] border-[#222729] border p-8 rounded-[32px] flex flex-col gap-[22px] justify-center text-white w-full min-h-[90%]">
                  <Image
                    src="/Marketing/aspas.png"
                    width={21}
                    height={23}
                    alt="Logo"
                    priority={true}
                    className="w-[21px]"
                  />
                  <p>{message}</p>
                  <p className="italic">{author}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div>
        <div className="flex flex-col justify-center items-center gap-12">
          <Image
            src="/Marketing/foto.png"
            width={414}
            height={291}
            alt="Logo"
            priority={true}
            className="w-[358px]"
          />

          <div className="rounded-3xl p-px bg-gradient-to-r from-[#4D5358] to-transparent w-[100%]">
            <div className="dark:bg-dark bg-white p-10 rounded-3xl m-[1px] text-xl flex gap-4 justify-content items-center md:gap-9 text-center">
              <div className="flex flex-col items-center justify-center">
                <p className="font-bold">+1000</p>
                <p className="text-sm">
                  Nota média geral
                  <br /> das aulas
                </p>
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-primaryAccent">4,8/5</p>
                <p className="text-sm">
                  Nota média geral
                  <br /> das aulas
                </p>
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-bold">10k +</p>
                <p className="text-sm">Comunidade</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Marketing
