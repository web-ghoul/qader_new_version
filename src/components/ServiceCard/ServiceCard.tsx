import { ServiceCardTypes } from '@/types/components.types'
import { Icons } from '../icons'

const COLORS = ['#ADC3FF', '#D0E957', '#FFBC01', '#FFF9F7']
const ServiceCard = ({ title, content, idx }: ServiceCardTypes) => {
  return (
    <div
      key={title}
      className={
        'aspect-[1/1.4] flex flex-col justify-between py-11 px-7.5 rounded-2xl text-black overflow-hidden group '
      }
      style={{ background: COLORS[idx % 4] }}
    >
      {idx % 4 === 0 && <Icons.serviceIcon1 />}
      {idx % 4 === 1 && <Icons.serviceIcon2 />}
      {idx % 4 === 2 && <Icons.serviceIcon3 />}
      {idx % 4 === 3 && <Icons.serviceIcon4 />}

      <div className="mt-5 relative md:translate-y-full group-hover:translate-y-0 duration-500 group-hover:transition-none">
        <div className="space-y-2.5 md:-translate-y-full group-hover:translate-y-0 duration-500 group-hover:transition-none">
          <div className="lg">0{idx + 1}.</div>
          <div className="xxl">{title}</div>
        </div>

        <div className="overflow-hidden">
          <div className="space-y-5">
            <div className="mt-5 h-px bg-black origin-left md:scale-x-0 group-hover:scale-x-100 duration-500" />
            <p className="text-sm md:opacity-0 group-hover:opacity-100 duration-700 delay-200">
              {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
