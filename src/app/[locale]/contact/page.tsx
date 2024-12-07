import qaderLogo from '$/q-logo.svg'
import { LenisScroller } from '@/animations'
import { ContactForm } from '@/components/Forms/ContactForm'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'

// You should reflect this in the json files (ar | en)
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

export default function Contact({
  params: { locale },
}: {
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale)

  return (
    <section>
      <Header locale={locale} />
      <Main />
      <LenisScroller />
    </section>
  )
}

const Header = ({ locale }: { locale: string }) => {
  const t = useTranslations('header')

  return (
    // h-[8rem] bg-cover   style={{ backgroundImage: `url(/gradient-bg.webp)` }}
    <header
      dir="ltr"
      className="page--header z-50 absolute py-5 md:py-10 container center-align-vertical"
    >
      <div
        className="h-[7rem] background -z-50 absolute inset-0 bg-cover"
        style={{ backgroundImage: `url(/gradient-bg.webp)` }}
      />

      <div className="text-white flex items-center justify-between">
        <div className="logo center-flex select-none">
          <Image src={qaderLogo} width={33} height={37} alt="qader" />
          <span className="ml-1 font-medium text-[1.375rem]">ader</span>
        </div>

        <nav className="hidden md:block">
          <ul className="flex items-center space-x-10">
            {NAVITEMS.map((item) => (
              <li key={item} className="link-hover">
                <Link href={`/${locale}#${item}`}>{t(`nav.${item}`)}</Link>
              </li>
            ))}

            <li>
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
            </li>
          </ul>
        </nav>

        <div className="md:hidden flex space-x-2">
          <Link
            href="#contact"
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

export const Main = () => {
  const t = useTranslations('contact')

  return (
    <div id="contact" className="container pt-[12.75rem] mb-[11.25rem]">
      <div className="page-grid gap-y-10">
        <div className="col-span-full lg:col-span-5 flex flex-col justify-between">
          <div className="mb-10 space-y-5 max-w-3xl">
            <h2 data-animation="text-reveal">{t('heading')}</h2>
            <p
              className="base gray sm:max-w-[80%]"
              data-animation="text-reveal"
            >
              {t('subheading')}
            </p>
          </div>
        </div>

        <ContactForm
          name={t('form.name')}
          email={t('form.email')}
          subject={t('form.subject')}
          message={t('form.message')}
          submit={t('form.submit')}
          success={t('form.success')}
          error={t('form.failure')}
        />
      </div>
    </div>
  )
}
