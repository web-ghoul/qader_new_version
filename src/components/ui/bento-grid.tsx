import { cn } from '@/lib/utils'

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-3 gap-4', className)}>
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  image,
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
  image?: string
}) => {
  return (
    <div
      className={cn(
        'row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-white border border-transparent justify-between flex flex-col space-y-4 hover:border-blue600',
        className
      )}
    >
      {image ? (
        <img
          src={image}
          alt={'project'}
          className="flex flex-1 w-full h-full min-h-[5rem] object-contain"
        />
      ) : (
        header
      )}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-xl text-black mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-slate-700 text-base">
          {description}
        </div>
      </div>
    </div>
  )
}
