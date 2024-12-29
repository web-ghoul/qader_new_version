import '@/styles/globals.scss'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Script from 'next/script'

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
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BCS17WKJNF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BCS17WKJNF');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}
