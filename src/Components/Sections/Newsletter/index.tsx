'use client'
import React, { FormEvent, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Button from '@/Components/Button'

const Newsletter = () => {
  const form = useRef<HTMLFormElement>(null)
  const [btn, setBtn] = useState('Enviar')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [error, setError] = useState('')

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setBtn('Enviando...')

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
          setBtn('Enviado!')
        })
    }
    if (name.length <= 0 || email.length <= 0 || msg.length <= 0) {
      setBtn('Enviar')
      setError('Preencha todos os campos.')
    }
    console.log(name.length)
    console.log(email.length)
    console.log(msg.length)
  }

  return (
    <section
      id="conteudos"
      className="flex flex-col p-6 mb-24 gap-10 justify-center items-center"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl text-center font-bold">
          Cadastre-se para receber mais informações.
        </h2>
        <p className="text-lg font-bold text-center">
          Fique ligado no que tem de melhor no Mercado Financeiro.
        </p>
      </div>

      <div>
        <form className="w-[100%] md:w-[40%]" onSubmit={sendEmail} ref={form}>
          <input
            type="text"
            id="user_name"
            name="user_name"
            value={name}
            placeholder="Nome"
            onChange={({ target }) => setName(target.value)}
          />
          <input
            type="email"
            id="user_email"
            name="user_email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
          <input
            id="message"
            name="message"
            value={msg}
            onChange={({ target }) => setMsg(target.value)}
          />
          {error && <p className="text-maincolor mb-3">{error}</p>}
          <Button type="submit" bg='green' format='square'>
            {btn}
          </Button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
