import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import { CLIENTS_IMAGES } from '@/Contants'
import { useTranslations } from 'next-intl'

const ClientsSection = ({ locale }: { locale: string }) => {
  const t = useTranslations('clients')

  return (
    <section
      id="clients"
      className="container grid justify-stretch items-center gap-6"
    >
      <div
        className=" section--title mx-auto mt-10 mb-10"
        data-animation="button"
      >
        <span>{t('sectionTitle')}</span>
      </div>
      <div className="rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={CLIENTS_IMAGES}
          direction={locale === 'ar' ? 'left' : 'right'}
          speed="slow"
        />
      </div>
    </section>
  )
}

export default ClientsSection
