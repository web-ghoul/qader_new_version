import qaderLogo from '$/q-logo.svg'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { Icons } from '../icons'

const LINKS = [
  { title: 'about', link: '#about' },
  { title: 'services', link: '#services' },
  { title: 'portfolio', link: '#portfolio' },
  { title: 'team', link: '#team' },
]

export const Footer = () => {
  const t = useTranslations('footer')

  return (
    <footer className="section--dark pt-[3.125rem] pb-10 relative">
      <div className="absolute center-align opacity-5 pointer-events-none">
        <Image src={qaderLogo} width={363} height={411} alt="qader" />
      </div>

      <div className="footer container">
        <div className="page-grid gap-y-10">
          <div className="left space-y-7.5 max-w-lg">
            <div className="logo flex items-center select-none">
              <Image src={qaderLogo} width={33} height={37} alt="qader" />
              <span className="ml-1 font-medium text-[1.375rem]">ader</span>
            </div>

            <p>{t('description')}</p>
          </div>

          <div className="center space-y-7.5">
            <span className="text-sm font-medium opacity-80">
              {t('links.title')}
            </span>
            <ul className="space-y-2.5">
              {LINKS.map((item) => (
                <li key={item.title}>
                  <Link href={item.link} className="base link-hover">
                    {t(`links.${item.title}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="right space-y-7.5">
            <span className="text-sm font-medium opacity-80">
              {t('contact.title')}
            </span>

            <ul className="contact--info space-y-2.5">
              <li className="flex space-x-2.5">
                <Icons.location className="min-w-fit" />
                <span>{t('contact.location')}</span>
              </li>
              <li className="phone flex space-x-2.5">
                <Icons.phone className="min-w-fit" />
                <span>{t('contact.phone')}</span>
              </li>
            </ul>

            <ul className="social--btns flex space-x-2.5">
              <li>
                <a
                  className="inline-block p-2.5 rounded-full bg-[#252525] hover:bg-blue600 duration-500"
                  href="https://www.facebook.com/qadereg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icons.facebook />
                </a>
              </li>
              <li>
                <a
                  className="inline-block p-2.5 rounded-full bg-[#252525] hover:bg-blue600 duration-500"
                  href="mailto:info@Qadereg.com"
                >
                  <Icons.mail />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright mt-36 text-right opacity-80">
          Copyright 2023 © Qader
        </div>
      </div>
    </footer>
  )
}
