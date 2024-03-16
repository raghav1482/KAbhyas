import React from 'react'
import { DotButton, useDotButton } from './Embdot'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './Embarrow'
import useEmblaCarousel from 'embla-carousel-react'
import StudentCard from './Student';

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla theme-dark">
      <div className="embla__viewport" ref={emblaRef} data-aos="fade-zoom-in">
        <div className="embla__container">
              {slides.map((data , index) => {return <StudentCard name={data.name} photo={data.image} review={data.review}/>})}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
