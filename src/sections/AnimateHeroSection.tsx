import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

const AnimateHeroSection = ({ locale }: { locale: string }) => {
  const t = useTranslations('hero')
  return (
    <BackgroundGradientAnimation>
      <div className="absolute !z-[1000] inset-0 flex items-center justify-stretch text-white w-full">
        <div className="grid justify-stretch items-center gap-10 container">
          <div className="grid justify-between items-end gap-6 w-full lg:w-[50%] md:w-[75%]">
            <h5 data-animation="text-reveal" className="text-3xl font-[800]">
              {t('contentTitle')}
            </h5>
            <h1 data-animation="text-reveal" className="text-7xl">
              {t('title')}
            </h1>
            <h6 data-animation="text-reveal" className="text-xl">
              {t('content')}
            </h6>
          </div>

          <div className="flex h-fit justify-start items-center lg">
            <Link
              href={`#contact`}
              passHref
              className="inline-block button text-sm"
              data-animation="text-reveal"
            >
              <span>{t('Get a free consultation')}</span>
            </Link>
          </div>
        </div>
      </div>
    </BackgroundGradientAnimation>
  )
}

export default AnimateHeroSection
