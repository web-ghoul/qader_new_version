'use client'
import emailjs from '@emailjs/browser'
import { useEffect, useRef, useState } from 'react'

export const ContactForm = ({
  name,
  email,
  subject,
  message,
  submit,
  success,
  error,
}: {
  name: string
  email: string
  subject: string
  message: string
  submit: string
  success: string
  error: string
}) => {
  const form = useRef<HTMLFormElement>(null)
  const [nameInput, setName] = useState('')
  const [emailInput, setEmail] = useState('')
  const [subjectInput, setSubject] = useState('')
  const [messageInput, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')

    setTimeout(() => {
      setIsSuccess(false)
      setIsError(false)
    }, 1000)
  }, [isSuccess, isError])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!form || !form.current) {
      return
    }
    emailjs
      .sendForm(
        'service_rk433wf',
        'template_uhow17s',
        form.current,
        'Y-iV_sZvHNxBdfc6e'
      )
      .then(
        (result) => {
          setIsSuccess(true)
        },
        (error) => {
          setIsError(true)
        }
      )
  }

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="space-y-7.5 col-span-full lg:col-start-7 lg:col-span-6 bg-gray100 p-5 py-7.5 lg:p-7.5 rounded-2xl"
    >
      <div className="contact--inputs flex flex-col space-y-5">
        <div className="flex flex-col md:flex-row gap-x-2.5 gap-y-5">
          <div className="flex-1 relative group">
            <input
              required
              name="name"
              className="w-full p-2.5 lg:p-5 placeholder:text-gray500 border-gray500 border-b outline-none bg-transparent"
              type="text"
              value={nameInput}
              onChange={(e) => setName(e.target.value)}
              placeholder={name}
            />
            <div className="line absolute bottom-0 w-full h-0.5 bg-blue600 scale-x-0 group-focus-within:scale-x-100 origin-left duration-300" />
          </div>

          <div className="flex-1 relative group">
            <input
              required
              name="email"
              className="w-full p-2.5 lg:p-5 placeholder:text-gray500 border-gray500 border-b outline-none bg-transparent"
              type="email"
              value={emailInput}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={email}
            />
            <div className="line absolute bottom-0 w-full h-0.5 bg-blue600 scale-x-0 group-focus-within:scale-x-100 origin-left duration-300" />
          </div>
        </div>

        <div className="relative group">
          <input
            required
            name="subject"
            className="w-full p-2.5 lg:p-5 placeholder:text-gray500 border-gray500 border-b outline-none bg-transparent"
            type="text"
            value={subjectInput}
            onChange={(e) => setSubject(e.target.value)}
            placeholder={subject}
          />
          <div className="line absolute bottom-0 w-full h-0.5 bg-blue600 scale-x-0 group-focus-within:scale-x-100 origin-left duration-300" />
        </div>

        <div className="relative group">
          <textarea
            required
            name="message"
            className="w-full flex-1 min-h-[10rem] p-2.5 lg:p-5 placeholder:text-gray500 border-gray500 outline-none border-b bg-transparent"
            value={messageInput}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={message}
          />
          <div className="line absolute bottom-1 w-full h-0.5 bg-blue600 scale-x-0 group-focus-within:scale-x-100 origin-left duration-300" />
        </div>
      </div>

      <button
        className={`font-medium rounded-xl w-full py-[1rem!important] text-white hover:bg-blue-600 duration-500 ${
          isSuccess
            ? 'bg-green-600 cursor-default '
            : isError
            ? ' bg-red-600 cursor-default'
            : 'bg-blue600'
        }`}
        type="submit"
      >
        {isSuccess ? success : isError ? error : submit}
      </button>
    </form>
  )
}
