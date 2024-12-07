import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Logo from '../Logo/Logo'

const NAVITEMS = [
  'about',
  'why',
  'value',
  'services',
  'portfolio',
  'team',
  'clients',
  'partners',
]

export const Header = ({ locale }: { locale: string }) => {
  const t = useTranslations('header')
  return (
    <header className="page--header z-50 absolute py-5 md:py-10 container center-align-vertical">
      <div className="text-white flex items-center justify-between">
        <Logo locale={locale} />
        <nav className="hidden md:block !flex justify-end items-center gap-6">
          <ul className="flex items-center space-x-10">
            {NAVITEMS.map((item) => (
              <li key={item} className="link-hover">
                <Link href={`#${item}`}>{t(`nav.${item}`)}</Link>
              </li>
            ))}
          </ul>
          <div className="space-x-2">
            {locale === 'ar' ? (
              <Link
                href="/en"
                locale="en"
                className="inline-block bg-white/10 hover:bg-white/20 rounded-xl p-2.5 duration-300"
              >
                En
              </Link>
            ) : null}
            {locale === 'en' ? (
              <Link
                href="/ar"
                locale="ar"
                className="inline-block bg-white/10 hover:bg-white/20 rounded-xl p-2.5 duration-300"
              >
                Ar
              </Link>
            ) : null}
          </div>
          <Link
            href={`/[locale]/contact`}
            as={`/${locale}/contact`}
            passHref
            className="inline-block button"
          >
            <span>
              <span>{t('button')}</span>
            </span>
          </Link>
        </nav>
        <div className="md:hidden flex space-x-2">
          {locale === 'ar' ? (
            <Link
              href="/en"
              locale="en"
              className="inline-block bg-white/10 hover:bg-white/20 rounded-xl p-2.5 duration-300"
            >
              En
            </Link>
          ) : null}
          {locale === 'en' ? (
            <Link
              href="/ar"
              locale="ar"
              className="inline-block bg-white/10 hover:bg-white/20 rounded-xl p-2.5 duration-300"
            >
              Ar
            </Link>
          ) : null}

          <Link
            href={`/[locale]/contact`}
            as={`/${locale}/contact`}
            passHref
            className="md:hidden inline-block button text-sm"
          >
            <span>
              <span>{t('button')}</span>
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
}
