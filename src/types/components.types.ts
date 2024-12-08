import { SVGAttributes } from 'react'

interface AboutCardTypes {
  Icon: (className: React.SVGAttributes<SVGElement>) => JSX.Element
  title: string
  content: string
  imgPath: string
}

interface WhyCardTypes {
  title: string
  content: string
}

interface ValueCardTypes {
  title: string
  content: string
}

interface ServiceCardTypes {
  title: string
  content: string
  idx: number
  locale: string
}

interface OurWorkCardTypes {
  Icon: (className: SVGAttributes<SVGElement>) => JSX.Element
  title: string
  description: string
}

interface TeamMemberCardTypes {
  imgPath: string
  name: string
  title: string
}

interface StackCardTypes {
  Icon: (className: SVGAttributes<SVGElement>) => JSX.Element
  title: string
}

interface ImageBoxTypes {
  src: string
  alt?: string
  back?: boolean
  className?: string
}

interface PartnerCardTypes {
  image: string
  name: string
}

export type {
  AboutCardTypes,
  WhyCardTypes,
  ValueCardTypes,
  ServiceCardTypes,
  OurWorkCardTypes,
  TeamMemberCardTypes,
  StackCardTypes,
  ImageBoxTypes,
  PartnerCardTypes,
}
