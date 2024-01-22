'use client'
import React, { FormEvent, useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Button from '@/Components/Button'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Newsletter = () => {
  const form = useRef<HTMLFormElement>(null)
  const [btn, setBtn] = useState('QUERO ME INSCREVER')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [error, setError] = useState('')

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setBtn('Inscrevendo...')

    if (name.length > 0 && email.length > 0 && msg.length > 0) {
      setError('')
      emailjs
        .sendForm(
          'service_felgnko',
          'template_31pelei',
          e.currentTarget,
          '4VQ7DIqu-yhhnT3CK',
        )
        .then(
          (result) => {
            console.log(result.status)
          },
          (error) => {
            console.log(error.text)
          },
        )
        .finally(() => {
          setName('')
          setEmail('')
          setMsg('')
          setBtn('Inscrito!')
        })
    }
    if (name.length <= 0 || email.length <= 0 || msg.length <= 0) {
      setBtn('QUERO ME INSCREVER')
      setError('Preencha todos os campos.')
    }
  }

    useEffect(() => {
      AOS.init({
        delay: -80,
        duration: 1000,
      })
    }, [])

  return (
    <section
      id="conteudos"
      className="flex flex-col p-6 mb-32 gap-10 justify-center items-center md:flex-row md:items-start"
      data-aos="slide-right"
    >
      <div className="flex flex-col gap-2 md:w-[50%]">
        <h2 className="text-3xl text-center font-bold md:text-3xl md:text-start">
          Cadastre-se para receber mais informações.
        </h2>
        <p className="text-lg font-bold text-center md:text-[18px] md:text-start">
          Fique ligado no que tem de melhor no Mercado Financeiro.
        </p>
      </div>

      <div className="bg-[#131516] border-[#222729] border p-8 rounded-[32px] gap-[22px] justify-center text-white w-full md:w-[50%]">
        <form
          onSubmit={sendEmail}
          ref={form}
          className="w-full flex flex-col gap-6"
        >
          <input
            type="text"
            id="user_name"
            name="user_name"
            value={name}
            placeholder="Nome"
            onChange={({ target }) => setName(target.value)}
            className="bg-secondAccent border border-[#4D5358] py-3 px-5 rounded-md"
          />
          <input
            type="email"
            id="user_email"
            name="user_email"
            value={email}
            placeholder="Seu melhor e-mail"
            onChange={({ target }) => setEmail(target.value)}
            className="bg-secondAccent border border-[#4D5358] py-3 px-5 rounded-md"
          />
          <input
            id="message"
            name="message"
            value={msg}
            placeholder="Celular"
            onChange={({ target }) => setMsg(target.value)}
            className="bg-secondAccent border border-[#4D5358] py-3 px-5 rounded-md"
          />
          {error && <p className="text-red-500 mb-3">{error}</p>}
          <Button type="submit" bg="greenLight" format="square">
            {btn}
          </Button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
