import { OurWorkCardTypes } from '@/types/components.types'

const OurWorkCard = ({ Icon, title, description }: OurWorkCardTypes) => {
  return (
    <div
      className="card flex flex-col gap-5 rounded-2xl p-7.5 bg-blue100 md:bg-white hover:bg-blue100 duration-500"
      data-animation="card"
    >
      <div className="p-2.5 w-fit rounded-xl bg-blue600">
        <Icon />
      </div>

      <span className="xl">{title}</span>

      <p className="opacity-80">{description}</p>
    </div>
  )
}

export default OurWorkCard
