'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import { comments } from './comments'

const Marketing = () => {
  return (
    <section
      id="marketing"
      className="flex flex-col p-6 mb-20 gap-10 justify-center items-center"
    >
      <div className="flex flex-col gap-14">
        <div className="flex flex-col gap-2">
          <h2 className="text-center text-5xl font-bold">
            Didática de verdade
          </h2>
          <p className="text-sm text-center font-bold">
            Garantindo seu aprendizado
          </p>
        </div>

        <div className="flex justify-center w-full">
          <Swiper
            autoplay={{
              delay: 1000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="border w-[300px] min-h-[450px]"
          >
            {comments.map(({ author, message }, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#131516] border-[#222729] border p-8 rounded-[32px] flex flex-col gap-[22px] justify-center text-white w-[300px] min-h-[90%]">
                  <p>{message}</p>
                  <p>{author}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div>Foto</div>
    </section>
  )
}

export default Marketing
