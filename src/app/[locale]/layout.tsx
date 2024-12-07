import { LenisScroller } from '@/animations'
import '@/styles/globals.scss'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import localFont from 'next/font/local'
import { notFound } from 'next/navigation'
import translationsAr from '../../../content/ar.json'
import translationsEn from '../../../content/en.json'

const din = localFont({
  src: [
    {
      path: './../fonts/DINNEXTLTARABIC-REGULAR-4.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './../fonts/DINNEXTLTARABIC-MEDIUM-4.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './../fonts/DINNEXTLTARABIC-BOLD-4.ttf',
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

const locales = ['en', 'ar']

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale)
  if (!locales.includes(locale as any)) notFound()

  return (
    <html lang={locale} className={`${din.variable}`}>
      <body>
        <NextIntlClientProvider
          locale={locale}
          messages={locale === 'ar' ? translationsAr : translationsEn}
        >
          {children}
        </NextIntlClientProvider>
        <LenisScroller />
      </body>
    </html>
  )
}
