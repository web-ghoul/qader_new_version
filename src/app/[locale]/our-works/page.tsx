import WorksHeroSection from '@/sections/WorksHeroSection'

const page = ({ params: { locale } }: { params: { locale: string } }) => {
  return (
    <main>
      <WorksHeroSection locale={locale} />
    </main>
  )
}

export default page
