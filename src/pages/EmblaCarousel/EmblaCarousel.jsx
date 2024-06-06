import React, { useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import styles from './Embla.module.css'
import Image from 'next/image'

const TWEEN_FACTOR_BASE = 0.4

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max)

const EmblaCarousel = (options) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({options}, [Autoplay({stopOnInteraction:false})])
  const tweenFactor = useRef(0)

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenOpacity = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()
    const slidesInView = emblaApi.slidesInView()
    const isScrollEvent = eventName === 'scroll'
    console.log('ScrollSnapList:', emblaApi.scrollSnapList());
    console.log('ScrollProgress:', scrollProgress);

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress
      const slidesInSnap = engine.slideRegistry[snapIndex]

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target()

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target)

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress)
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress)
              }
            }
          })
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
        const opacity = numberWithinRange(tweenValue, 0, 1).toString()
        emblaApi.slideNodes()[slideIndex].style.opacity = opacity
      })
    })
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    setTweenFactor(emblaApi)
    tweenOpacity(emblaApi)
    emblaApi
      .on('reInit', setTweenFactor)
      .on('reInit', tweenOpacity)
      .on('scroll', tweenOpacity)
      .on('slideFocus', tweenOpacity)
  }, [emblaApi, tweenOpacity])

  return (
    <div className={`${styles.embla} lg:px-2 overflow-hidden`} ref={emblaRef}>
      <div className={`${styles.embla__container} flex px-2 py-2 w-full md:w-10/12`}>
        <div className={`${styles.embla__slide} embla__class-names`}>
          <Image src="/card/virtual_try_on.png" alt="toppage" width={1000} height={300}
            className={`${styles.embla__slide__img}`} />
        </div>
        <div className={`${styles.embla__slide} embla__class-names`}>
          <Image src="/card/orisige.png" alt="toppage" width={1000} height={300}
            className={`${styles.embla__slide__img}`} />
        </div>
        <div className={`${styles.embla__slide} embla__class-names`}>
          <Image src="/card/tryworthAcademy.png" alt="toppage" width={1000} height={300}
            className={`${styles.embla__slide__img}`} />
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
