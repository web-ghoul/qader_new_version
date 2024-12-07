import AboutCard from '@/components/AboutCard/AboutCard'
import { ABOUT_CARDS } from '@/Contants'
import { useTranslations } from 'next-intl'

const AboutSection = () => {
  const t = useTranslations('about')

  return (
    <section id="about" className="container section--big--padding">
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

        <div className=" flex gap-6 flex-wrap" data-animation="card">
          {ABOUT_CARDS.map((item, idx) => (
            <AboutCard
              key={item.title}
              {...item}
              title={t(`cards.${idx}.title`)}
              content={t(`cards.${idx}.content`)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
