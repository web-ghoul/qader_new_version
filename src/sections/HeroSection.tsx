import { useTranslations } from 'next-intl'
import Link from 'next/link'

const HeroSection = ({ locale }: { locale: string }) => {
  const t = useTranslations('hero')
  return (
    <section className="text-white relative !h-screen">
      <div
        className={`background -z-50 absolute inset-0 bg-cover ${
          locale === 'ar' ? '-scale-x-100' : ' scale-x-100'
        }`}
        style={{ backgroundImage: `url(/gradient-bg.webp)` }}
      />
      <div className="container grid justify-stretch items-center gap-8 h-full">
        <div className="grid justify-between items-end grid-cols-2">
          <h1 data-animation="text-reveal" className="w-[75%]">
            {t('title')}
          </h1>
          <div className="grid justify-stretch items-center gap-2">
            <span className="text-2xl font-[800]" data-animation="text-reveal">
              {t('contentTitle')}
            </span>
            <span data-animation="text-reveal">{t('content')}</span>
          </div>
        </div>

        <div className="flex h-fit justify-center items-center lg">
          <Link
            href={`/[locale]/contactt`}
            as={`/${locale}/contactt`}
            passHref
            className="inline-block button text-sm"
            data-animation="text-reveal"
          >
            <span>{t('Get a free consultation')}</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
