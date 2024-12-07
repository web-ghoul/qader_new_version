import { StackCardTypes } from '@/types/components.types'

const StackCard = ({ Icon, title }: StackCardTypes) => {
  return (
    <div
      className="card  space-y-3 min-w-[12rem] col-span-full sm:col-span-4 md:col-span-3 lg:col-span-2 group"
      data-animation="card"
    >
      <div className="rounded-2xl aspect-square bg-blue-100 bg-top md:saturate-0 group-hover:saturate-100 duration-500 relative">
        <div className="card--title flex items-center space-x-2.5">
          <Icon className="stroke-blue600 md:stroke-black group-hover:stroke-blue600 duration-300" />
        </div>
        <h3 className="px-[1rem]">{title}</h3>
      </div>
    </div>
  )
}

export default StackCard
