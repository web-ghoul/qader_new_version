import PartnerCard from '@/components/PartnerCard/PartnerCard'
import { OUR_PARTNERS_CARDS } from '@/Contants'
import { useTranslations } from 'next-intl'

const PartnersSection = () => {
  const t = useTranslations('partners')

  return (
    <section
      id="portfolio"
      className="container grid justify-stretch items-center section--big--padding"
    >
      <div
        className=" section--title mx-auto mt-10 mb-10"
        data-animation="button"
      >
        <span>{t('sectionTitle')}</span>
      </div>
      <div className="space-y-10">
        <div
          className="card--collection grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-animation="card"
        >
          {OUR_PARTNERS_CARDS.map((item, idx) => (
            <PartnerCard
              key={item.name}
              {...item}
              name={t(`cards.${idx}.name`)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
