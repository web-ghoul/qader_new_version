import { ScrollUp } from '@/components/ScrollUp/ScrollUp'
import Whatsapp from '@/components/Whatsapp/Whatsapp'
import AboutSection from '@/sections/AboutSection'
import AnimateHeroSection from '@/sections/AnimateHeroSection'
import ClientsSection from '@/sections/ClientsSection'
import ContactSection from '@/sections/ContactSection'
import OurWorksSection from '@/sections/OurWorksSection'
import PartnersSection from '@/sections/PartnersSection'
import TeamSection from '@/sections/TeamSection'
import { TwoColumnsSection } from '@/sections/TwoColumnsSection'
import ValueSection from '@/sections/ValueSection'
import WhySection from '@/sections/WhySection'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

const locales = ['en', 'ar']

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function Home({
  params: { locale },
}: {
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale)
  const tM = useTranslations('mission')
  const tV = useTranslations('vision')

  return (
    <main>
      <AnimateHeroSection locale={locale} />
      <AboutSection />
      <WhySection />
      <TwoColumnsSection
        title={tM('title')}
        content={tM('content')}
        borderTop
      />
      <ValueSection />
      {/* <ServicesSection locale={locale} /> */}
      <TwoColumnsSection
        title={tV('title')}
        content={tV('content')}
        borderTop
      />
      <ClientsSection locale={locale} />
      <OurWorksSection />
      <TeamSection />
      {/* <StacksSection locale={locale} /> */}
      <PartnersSection locale={locale} />
      <ContactSection />
      <ScrollUp />
      <Whatsapp />
    </main>
  )
}
