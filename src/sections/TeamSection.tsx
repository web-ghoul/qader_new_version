import TeamMemberCard from '@/components/TeamMemberCard/TeamMemberCard'
import { TEAM_CARDS } from '@/Contants'
import { useTranslations } from 'next-intl'

const TeamSection = () => {
  const t = useTranslations('team')
  return (
    <section id="team" className="pt-20 pb-[7.75rem] section--blue">
      <div className="team container">
        <div className="section--title mx-auto mb-10" data-animation="button">
          <span>
            <span>{t('sectionTitle')}</span>
          </span>
        </div>

        <div
          className="card--collection special page-grid gap-6 gap-y-16"
          data-animation="card"
        >
          <div
            className="bg-blue600 text-white rounded-2xl flex flex-col overflow-hidden p-[8vw] space-y-5 sm:p-[3.75rem] col-span-full md:col-span-8 lg:col-span-9 bg-center bg-no-repeat bg-cover justify-end items-center relative pt-4 text-center"
            style={{ backgroundImage: `url('/team.jpg')` }}
          >
            <div className="absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] w-full h-full"></div>
            <h2 className="font-ubuntu pt-2" data-animation="text-reveal">
              {t('heading')}
            </h2>
            <div
              className="line origin-[center!important] w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"
              data-animation="line"
            ></div>
            <p className="opacity-80 max-w-md" data-animation="text-reveal">
              {t('subheading')}
            </p>
          </div>

          {TEAM_CARDS.map((member, idx) => (
            <TeamMemberCard
              key={member.name}
              {...member}
              name={t(`cards.${idx}.name`)}
              title={t(`cards.${idx}.title`)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
