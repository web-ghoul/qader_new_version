import { HoverEffect } from '@/components/ui/card-hover-effect'
import { VALUES_CARDS } from '@/Contants'
import { useTranslations } from 'next-intl'

const ValueSection = () => {
  const t = useTranslations('value')
  return (
    <section id="value" className="container">
      <div className="line bg-gray200 h-0.5 w-full " data-animation="line" />
      <div className="space-y-10">
        <div className="space-y-5 max-w-3xl pt-[3rem]">
          <div className="section--title" data-animation="button">
            <span>
              <span>{t('sectionTitle')}</span>
            </span>
          </div>
          <h2 data-animation="text-reveal">{t('heading')}</h2>
          <p className="base gray sm:max-w-[80%]" data-animation="text-reveal">
            {t('subheading')}
          </p>
        </div>

        <HoverEffect items={VALUES_CARDS} />
      </div>
    </section>
  )
}

export default ValueSection
