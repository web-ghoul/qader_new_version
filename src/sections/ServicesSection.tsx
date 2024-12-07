'use client'
import { Icons } from '@/components/icons'
import ServiceCard from '@/components/ServiceCard/ServiceCard'
import { SERVICES } from '@/Contants'
import { useTranslations } from 'next-intl'
import { CSSProperties } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const ServicesSection = () => {
  const t = useTranslations('services')

  const titleStyles = {
    '--color': '#FF9900',
    '--bg': '255, 153, 0, 0.10',
  }

  return (
    <section id="services" className="section--dark section--small--padding">
      <div className="container space-y-10">
        <div className="space-y-5 max-w-3xl">
          <div
            className="section--title"
            style={titleStyles as CSSProperties}
            data-animation="button"
          >
            <span>
              <span>{t('sectionTitle')}</span>
            </span>
          </div>
          <h2 className="text-white" data-animation="text-reveal">
            {t('heading')}
          </h2>
          <p
            className="base opacity-80 sm:max-w-[80%]"
            data-animation="text-reveal"
          >
            {t('subheading')}
          </p>
        </div>
        <div>
          <Swiper
            className="card--collection"
            data-animation="card"
            speed={500}
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              '640': {
                slidesPerView: 2,
              },
              '900': {
                slidesPerView: 3,
              },
              '1280': {
                slidesPerView: 4,
              },
            }}
            pagination={{ el: '.custom-pagination' }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
          >
            {SERVICES.map((_, idx) => (
              <SwiperSlide
                key={t(`cards.${idx}.title`)}
                className="card"
                data-animation="card"
              >
                <ServiceCard
                  title={t(`cards.${idx}.title`)}
                  content={t(`cards.${idx}.content`)}
                  idx={idx}
                />
              </SwiperSlide>
            ))}

            <div className="swiper--pagination mt-10 flex justify-end items-center">
              <div className="custom-pagination" />

              <div className="flex space-x-2.5">
                <button className="swiper-button-prev bg-gray700 disabled:bg-gray800 py-2.5 px-5 rounded-full duration-500">
                  <Icons.arrowRight className="rotate-180" />
                </button>
                <button className="swiper-button-next bg-gray700 disabled:bg-gray800 py-2.5 px-5 rounded-full duration-500">
                  <Icons.arrowRight />
                </button>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
