import AboutHeroSection from '@/sections/AboutHeroSection'

const page = ({ params: { locale } }: { params: { locale: string } }) => {
  return (
    <main>
      <AboutHeroSection locale={locale} />
    </main>
  )
}

export default page
