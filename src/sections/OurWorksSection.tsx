import OurWorkCard from '@/components/OurWorkCard/OurWorkCard'
import { OUR_WORKS_CARDS } from '@/Contants'
import { useTranslations } from 'next-intl'

const OurWorksSection = () => {
  const t = useTranslations('portfolio')

  return (
    <section id="portfolio" className="container section--big--padding">
      <div className="space-y-10">
        <div className="space-y-5 max-w-3xl">
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

        <div
          className="card--collection grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-animation="card"
        >
          {OUR_WORKS_CARDS.map((item, idx) => (
            <OurWorkCard
              key={item.title}
              {...item}
              title={t(`cards.${idx}.title`)}
              description={t(`cards.${idx}.description`)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurWorksSection
