import Link from 'next/link'
import ImageBox from '../ImageBox/ImageBox'

const Logo = ({ locale }: { locale: string }) => {
  return (
    <Link href={`/${locale}`} className="logo center-flex select-none">
      <ImageBox src={'/logo.svg'} />
      <span className="ml-1 font-medium text-[1.375rem]">ader</span>
    </Link>
  )
}

export default Logo
