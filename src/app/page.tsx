'use client'
import Logo from '@/components/Logo/Logo'
import '@/styles/globals.scss'
import Lottie from 'lottie-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import image from '../../public/images/loading.json'

const Page = () => {
  const router = useRouter()

  useEffect(() => {
    const locale = localStorage.getItem('lang') || 'ar'
    router.push(`/${locale}`)
  }, [router])

  return (
    <div className="flex justify-center flex-col items-center bg-black h-screen w-screen text-white">
      <Logo locale={'ar'} />
      <Lottie animationData={image} loop={true} className="loading_lottie" />
    </div>
  )
}

export default Page
