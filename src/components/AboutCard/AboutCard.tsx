import { AboutCardTypes } from '@/types/components.types'

const AboutCard = ({ Icon, title, content, imgPath }: AboutCardTypes) => {
  return (
    <div
      className="card flex-1 flex flex-col gap-6 bg-gray100 px-7.5 min-w-[14rem] rounded-2xl group relative"
      data-animation="card"
    >
      <div className="py-7.5 space-y-6">
        <div className="grid justify-stretch items-center">
          <Icon className="stroke-blue600 md:stroke-black group-hover:stroke-blue600 duration-300 w-[35px] h-[35px]" />
          <span className="xl">{title}</span>
        </div>

        <p>{content}</p>
      </div>

      <div
        className="mt-auto h-44 rounded-t-2xl bg-blue100 bg-cover saturate-100 md:saturate-0 group-hover:saturate-100 duration-300 delay-150"
        style={{ backgroundImage: `url(${imgPath}), url(/gradient-bg.webp)` }}
      ></div>

      <div className="absolute inset-0 rounded-[1.25rem] border border-blue-600 opacity-0 group-hover:opacity-100 group-hover:-inset-1 duration-300"></div>
    </div>
  )
}

export default AboutCard
