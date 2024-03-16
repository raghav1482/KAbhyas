import React, { useState } from 'react';

const Herosection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Learning keeps you in the lead',
    },
    {
      image: 'https://thumbs.dreamstime.com/b/lecturer-university-students-listening-to-teacher-classroom-college-young-154952797.jpg',
      title: 'Unlock Your Potential with Our NEET Prep',
    },
    {
      image: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202207/2022_7img17_jul_2022_pti07_17_2022_000086a-sixteen_nine.jpg',
      title: 'Empowering Future Doctors, One Click at a Time.',
    }
  ];

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="hero-slider">
      <div className="slide">
        <img src={slides[currentSlide].image} alt={slides[currentSlide].title} />
        <div className="slide-content" data-aos="fade-right">
          <h3>{slides[currentSlide].title}</h3>
        </div>
      </div>
      <button onClick={handlePrevSlide}><i class="fa fa-angle-double-left"></i></button>
      <button onClick={handleNextSlide}><i class="fa fa-angle-double-right"></i></button>
      <div className='hero-overlay'></div>
    </div>
  );
}

export default Herosection
