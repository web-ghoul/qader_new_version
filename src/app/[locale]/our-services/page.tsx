import ServicesDetailsSection from '@/sections/ServicesDetailsSection'
import ServicesHeroSection from '@/sections/ServicesHeroSection'

const page = ({ params: { locale } }: { params: { locale: string } }) => {
  return (
    <main>
      <ServicesHeroSection locale={locale} />
      <ServicesDetailsSection />
    </main>
  )
}

export default page
