import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import { useTranslations } from 'next-intl'

const OurWorksSection = () => {
  const t = useTranslations('portfolio')

  return (
    <section id="portfolio" className="container">
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

        <BentoGrid>
          {items.map((item, idx) => (
            <BentoGridItem
              key={idx}
              title={t(`cards.${idx}.title`)}
              description={t(`cards.${idx}.description`)}
              header={<Skeleton />}
              icon={item.icon}
              image={item?.image}
              className={idx === 3 || idx === 6 ? 'md:col-span-2' : ''}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
)

const items = [
  {
    icon: '',
    image: 'https://aloo.com.sa/assets/landing/image/logo_yellow.svg',
  },
  {
    icon: '',
    image: 'projects/lareino.svg',
  },
  {
    icon: '',
    image: 'projects/temp.png',
  },
  {
    icon: '',
    image: 'projects/tuba_arabic.svg',
  },
  {
    icon: '',
    image: 'projects/bankruptucy.svg',
  },
  {
    icon: '',
    image: 'projects/salam_chatbot.avif',
  },
  {
    icon: '',
    image: 'projects/matrix.jpeg',
  },
]

export default OurWorksSection
