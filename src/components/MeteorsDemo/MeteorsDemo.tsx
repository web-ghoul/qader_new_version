import { Meteors } from '../ui/meteors'

export function MeteorsDemo({
  title,
  content,
}: {
  title: string
  content: string
}) {
  return (
    <div className=" w-full relative">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-gray-300 to-gray-400 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
      <div className="relative shadow-xl bg-white transition-all hover:bg-blue600 border border-gray-500 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col grid-cols-4 justify-start items-start group hover:translate-y-[-2px]">
        <h1
          className="text-xl font-bold text-black group-hover:text-white relative z-50"
          style={{ letterSpacing: '0px' }}
        >
          {title}
        </h1>
        <p className="font-normal text-base text-slate-900 group-hover:text-slate-200 relative z-50">
          {content}
        </p>
        <Meteors number={20} />
      </div>
    </div>
  )
}
