import StackCard from '@/components/StackCard/StackCard'
import { STACK_CARDS } from '@/Contants'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

const StacksSection = ({ locale }: { locale: string }) => {
  const t = useTranslations('stack')
  const firstTwoCards = STACK_CARDS.slice(0, 2)
  const secondTwoCards = STACK_CARDS.slice(2, 4)
  return (
    <section id="team" className="pt-20 pb-[7.75rem] ">
      <div className="team container">
        <div
          className="card--collection special page-grid gap-6 gap-y-16 "
          data-animation="card"
        >
          <div
            className="bg-gray300 text-black card flex-1 flex flex-col col-span-full md:col-span-3 lg:col-span-5  min-w-[14rem] rounded-2xl group relative"
            data-animation="card"
          >
            <div
              className="h-80 rounded-t-2xl bg-blue100 bg-cover saturate-100 md:saturate-0 group-hover:saturate-100 duration-300 delay-150"
              style={{ backgroundImage: `url(/stack.jpg)` }}
            ></div>

            <div
              className="line  origin-[center!important] w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"
              data-animation="line"
            ></div>
            <h2
              className=" pt-7.5 opacity-80 max-w-xl"
              data-animation="text-reveal"
            >
              {t('subheading')}
            </h2>
          </div>
          <div className="cards-container flex  gap-10  min-w-[15rem] px-[8vw]">
            <div className="flex flex-col gap-5 px-[4rem]">
              {firstTwoCards.map((item, idx) => (
                <StackCard
                  key={item.title}
                  {...item}
                  title={t(`cards.${idx}.title`)}
                />
              ))}
            </div>
            <div className="flex flex-col gap-5">
              {secondTwoCards.map((item, idx) => (
                <StackCard
                  key={item.title}
                  {...item}
                  title={t(`cards.${idx + 2}.title`)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="container lg col-span-full lg:col-span-2 max-w-sm flex justify-center pt-[3.375rem]">
          <Link
            href={`/[locale]/contactt`}
            as={`/${locale}/contactt`}
            passHref
            className="inline-block button text-sm"
            style={{ backgroundColor: '#e5e7ebb0!important' }}
            data-animation="text-reveal"
          >
            <span>{t('Get a help')}</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default StacksSection
