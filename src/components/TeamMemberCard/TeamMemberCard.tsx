import { TeamMemberCardTypes } from '@/types/components.types'

const TeamMemberCard = ({
  imgPath,
  name,
  title,
}: TeamMemberCardTypes) => {
  return (
    <div
      className="card space-y-5 col-span-full sm:col-span-6 md:col-span-4 lg:col-span-3 group"
      data-animation="card"
    >
      <div
        className="rounded-2xl aspect-square bg-blue-100 bg-cover bg-top md:saturate-0 group-hover:saturate-100 duration-500 relative"
        style={{
          backgroundImage: `url(${imgPath}), url(/team/avatar.webp)`,
        }}
      />
      <div className="space-y-2.5">
        <div className="xxl ubuntu">{name}</div>
        <div className="base bold">{title}</div>
      </div>
    </div>
  )
}

export default TeamMemberCard
