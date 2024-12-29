import { ContactForm } from '@/components/Forms/ContactForm'
import { useTranslations } from 'next-intl'

const CONTACTINFO = {
  location:
    '14B, Almadina Almonwara Street, AlFardous, 6 of October City, Giza, Egypt',
  phone: '+20 12 08822401',
  email: 'info@Qadereg.com',
}

const ContactSection = () => {
  const t = useTranslations('contact')

  return (
    <section id="contact" className="container pt-[7.75rem] mb-[11.25rem]">
      <div className="page-grid gap-y-10">
        <div className="col-span-full lg:col-span-5 flex flex-col justify-between">
          <div className="mb-10 space-y-5 max-w-3xl">
            <div className="section--title" data-animation="button">
              <span>
                <span>{t('sectionTitle')}</span>
              </span>
            </div>
            <h2 data-animation="text-reveal">{t('heading')}</h2>
            <p
              className="base gray sm:max-w-[80%]"
              data-animation="text-reveal"
            >
              {t('subheading')}
            </p>
          </div>

          <div className="mb-7.5 flex flex-col list">
            {Object.entries(CONTACTINFO).map(([title]) => (
              <div
                key={title}
                className="list__item py-5 flex justify-between relative"
              >
                <span className="base text-right mr-5">
                  {t(`info.${title}.key`)}
                </span>
                <span className={`phone flex space-x-2.5`}>
                  {t(`info.${title}.value`)}
                </span>
                <div
                  className="line absolute bottom-0 left-0 bg-black h-px w-full"
                  data-animation="line"
                />
              </div>
            ))}
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
    </section>
  )
}

export default ContactSection
