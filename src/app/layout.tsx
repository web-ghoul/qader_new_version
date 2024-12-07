import '@/styles/globals.scss'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const din = localFont({
  src: [
    {
      path: './fonts/DINNEXTLTARABIC-REGULAR-4.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/DINNEXTLTARABIC-MEDIUM-4.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/DINNEXTLTARABIC-BOLD-4.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-din',
})

export const metadata: Metadata = {
  title: 'Qader',
  description: 'Qader Web Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${din.variable}`}>
      <body>{children}</body>
    </html>
  )
}
