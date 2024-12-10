import TeamsHeroSection from '@/sections/TeamsHeroSection'

const page = ({ params: { locale } }: { params: { locale: string } }) => {
  return (
    <main>
      <TeamsHeroSection locale={locale} />
    </main>
  )
}

export default page
