import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import { OUR_PARTNERS_CARDS } from '@/Contants'
import { useTranslations } from 'next-intl'

const PartnersSection = ({ locale }: { locale: string }) => {
  const t = useTranslations('partners')

  return (
    <section id="partners" className="section--blue">
      <div className="container grid justify-stretch items-center gap-6 ">
        <div
          className=" section--title mx-auto mt-10 mb-10"
          data-animation="button"
        >
          <span>{t('sectionTitle')}</span>
        </div>
        <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={OUR_PARTNERS_CARDS}
            direction={locale === 'ar' ? 'left' : 'right'}
            speed="slow"
          />
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
