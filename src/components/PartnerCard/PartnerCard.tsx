import { PartnerCardTypes } from '@/types/components.types'

const PartnerCard = ({ image, name }: PartnerCardTypes) => {
  return (
    <div
      className="card flex flex-col gap-5 rounded-2xl p-7.5 md:bg-white"
      data-animation="card"
    >
      <div
        className="rounded-xl aspect-square bg-cover bg-top "
        style={{
          backgroundImage: `url(${image}), url(${image})`,
        }}
      ></div>
      <span className=" text-center font-medium text-[1.375rem]">{name}</span>
    </div>
  )
}

export default PartnerCard
