import React, { useState, useEffect, useCallback } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import 'animate.css';
import Tilt from 'react-parallax-tilt';

const backgroundImages = [
  'https://qemqgbsrfkfkgtqpvurb.supabase.co/storage/v1/object/public/mhhGop1/MHHsprites/Final-Boredom-Face.png',
  'https://qemqgbsrfkfkgtqpvurb.supabase.co/storage/v1/object/public/mhhGop1/MHHsprites/Final-Surprise-Face.png',
  'https://qemqgbsrfkfkgtqpvurb.supabase.co/storage/v1/object/public/mhhGop1/MHHsprites/Final-Plasticity-Face.png',
  'https://qemqgbsrfkfkgtqpvurb.supabase.co/storage/v1/object/public/mhhGop1/MHHsprites/Final-SpreadingHappiness-Face.png',
  'https://qemqgbsrfkfkgtqpvurb.supabase.co/storage/v1/object/public/mhhGop1/MHHsprites/Final-SelfValence-Face.png',
  'https://qemqgbsrfkfkgtqpvurb.supabase.co/storage/v1/object/public/mhhGop1/MHHsprites/Final-TrueSelfFalseSelf-Face.png',
  'https://qemqgbsrfkfkgtqpvurb.supabase.co/storage/v1/object/public/mhhGop1/MHHsprites/Final-Mind-Face.png',
  'https://qemqgbsrfkfkgtqpvurb.supabase.co/storage/v1/object/public/mhhGop1/MHHsprites/Final-Human-Face.png',
  'https://qemqgbsrfkfkgtqpvurb.supabase.co/storage/v1/object/public/mhhGop1/MHHsprites/Final-Forgiveness-Face.png',
  'https://qemqgbsrfkfkgtqpvurb.supabase.co/storage/v1/object/public/mhhGop1/MHHsprites/Final-Attachment-Face.png',
  'https://qemqgbsrfkfkgtqpvurb.supabase.co/storage/v1/object/public/mhhGop1/MHHsprites/Final-BodyHealth-Face.png',
  'https://qemqgbsrfkfkgtqpvurb.supabase.co/storage/v1/object/public/mhhGop1/MHHsprites/Final-BasicEmo-Face.png',
  'https://qemqgbsrfkfkgtqpvurb.supabase.co/storage/v1/object/public/mhhGop1/MHHsprites/Final-Worry-Face.png',
  'https://qemqgbsrfkfkgtqpvurb.supabase.co/storage/v1/object/public/mhhGop1/MHHsprites/Final-Awareness-Face.png',
  'https://qemqgbsrfkfkgtqpvurb.supabase.co/storage/v1/object/public/mhhGop1/MHHsprites/Final-ComplexEmotion-Face.png',
];

const carouselData = [
  [
    'https://qemqgbsrfkfkgtqpvurb.supabase.co/storage/v1/object/public/mhhGop1/MHHsprites/Final-Boredom-Face.png',
    ['Boredom', 'Feeling of tedium', 'Lack of interest'],
  ],
  [
    'https://qemqgbsrfkfkgtqpvurb.supabase.co/storage/v1/object/public/mhhGop1/MHHsprites/Final-Surprise-Face.png',
    ['Surprise', 'Unexpected reaction', 'Sudden astonishment'],
  ],
  [
    'https://qemqgbsrfkfkgtqpvurb.supabase.co/storage/v1/object/public/mhhGop1/MHHsprites/Final-Plasticity-Face.png',
    ['Plasticity', 'Unexpected reaction', ''],
  ],
  [
    'https://qemqgbsrfkfkgtqpvurb.supabase.co/storage/v1/object/public/mhhGop1/MHHsprites/Final-SpreadingHappiness-Face.png',
    ['Spreading Happiness', 'Unexdtion', ''],
  ],
  [
    'https://qemqgbsrfkfkgtqpvurb.supabase.co/storage/v1/object/public/mhhGop1/MHHsprites/Final-SelfValence-Face.png',
    ['Self Valence', 'Unexpected reaction', ''],
  ],
  [
    'https://qemqgbsrfkfkgtqpvurb.supabase.co/storage/v1/object/public/mhhGop1/MHHsprites/Final-TrueSelfFalseSelf-Face.png',
    ['True / False Self', '', ''],
  ],
  [
    'https://qemqgbsrfkfkgtqpvurb.supabase.co/storage/v1/object/public/mhhGop1/MHHsprites/Final-Mind-Face.png',
    ['Mind', 'Unexpected reaction', ''],
  ],
  [
    'https://qemqgbsrfkfkgtqpvurb.supabase.co/storage/v1/object/public/mhhGop1/MHHsprites/Final-Human-Face.png',
    ['Human', 'Unexpected reaction', ''],
  ],
  [
    'https://qemqgbsrfkfkgtqpvurb.supabase.co/storage/v1/object/public/mhhGop1/MHHsprites/Final-Forgiveness-Face.png',
    ['Forgiveness', 'Unexpected reaction', ''],
  ],
  [
    'https://qemqgbsrfkfkgtqpvurb.supabase.co/storage/v1/object/public/mhhGop1/MHHsprites/Final-Attachment-Face.png',
    ['Attachment', 'Unexpected reaction', ''],
  ],
  [
    'https://qemqgbsrfkfkgtqpvurb.supabase.co/storage/v1/object/public/mhhGop1/MHHsprites/Final-BodyHealth-Face.png',
    ['Body Health', 'Unexpected reaction', ''],
  ],
  [
    'https://qemqgbsrfkfkgtqpvurb.supabase.co/storage/v1/object/public/mhhGop1/MHHsprites/Final-BasicEmo-Face.png',
    ['Basic Emo', 'Unexpected reaction', ''],
  ],
  [
    'https://qemqgbsrfkfkgtqpvurb.supabase.co/storage/v1/object/public/mhhGop1/MHHsprites/Final-Worry-Face.png',
    ['Worry', 'Unexpected reaction', ''],
  ],
  [
    'https://qemqgbsrfkfkgtqpvurb.supabase.co/storage/v1/object/public/mhhGop1/MHHsprites/Final-Awareness-Face.png',
    ['Awareness', 'Unexpected reaction', ''],
  ],
  [
    'https://qemqgbsrfkfkgtqpvurb.supabase.co/storage/v1/object/public/mhhGop1/MHHsprites/Final-ComplexEmotion-Face.png',
    ['ComplexEmotion', 'Unexpected reaction', ''],
  ],
  // ... Add the rest of your data in this format
];
const CarouselContainer = styled.div`
  width: 90vw;
  height: 90vh;
  margin: 0 auto;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarouselImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const IndexDisplay = styled.div`
  font-size: 3rem;
  color: yellow;
  text-align: center;
  margin-top: 1rem;
`;

const InfoDisplay = styled.div`
  font-size: 1.5rem;
  color: white;
  text-align: center;
  margin-top: 0.5rem;
`;

const AutoScrollButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  cursor: pointer;
`;

const TiltWrapper = styled(Tilt)`
  width: 100%;
  height: 100%;
  display: flex !important;
  justify-content: center;
  align-items: center;
`;

// New styled component for slide
const SlideContainer = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
`;

const animations = ['bounce', 'pulse', 'headShake', 'swing', 'jackInTheBox'];

const CircularCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoScroll, setAutoScroll] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('');
  const [animationDuration, setAnimationDuration] = useState(2);
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    beforeChange: (current, next) => setCurrentSlide(next),
    afterChange: (current) => {
      const newAnimation =
        animations[Math.floor(Math.random() * animations.length)];
      const newDuration = Math.random() * 3 + 2; // Random duration between 2 and 5 seconds
      setCurrentAnimation(newAnimation);
      setAnimationDuration(newDuration);
    },
    swipe: true,
    arrows: true,
  };

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'ArrowLeft') {
      sliderRef.current.slickPrev();
    } else if (event.key === 'ArrowRight') {
      sliderRef.current.slickNext();
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    let interval;
    if (autoScroll) {
      interval = setInterval(() => {
        sliderRef.current.slickNext();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [autoScroll]);

  const toggleAutoScroll = () => {
    setAutoScroll(!autoScroll);
  };

  // Custom arrow components
  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        {/* You can customize the arrow appearance here */}
      </div>
    );
  }

  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        {/* You can customize the arrow appearance here */}
      </div>
    );
  }

  return (
    <CarouselContainer>
      <Slider ref={sliderRef} {...settings}>
        {carouselData.map(([image, info], index) => (
          <SlideContainer key={index}>
            <ImageContainer>
              <TiltWrapper
                tiltMaxAngleX={40}
                tiltMaxAngleY={40}
                perspective={800}
                transitionSpeed={1500}
                scale={1.1}
                gyroscope={true}
              >
                <CarouselImage
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className={
                    index === currentSlide
                      ? `animate__animated animate__${currentAnimation} animate__infinite`
                      : ''
                  }
                  style={
                    index === currentSlide
                      ? { animationDuration: `${animationDuration}s` }
                      : {}
                  }
                />
              </TiltWrapper>
            </ImageContainer>
          </SlideContainer>
        ))}
      </Slider>
      <IndexDisplay>{currentSlide + 1}</IndexDisplay>
      <InfoDisplay>
        <div>{carouselData[currentSlide][1][0]}</div>
        <div>{carouselData[currentSlide][1][1]}</div>
        <div>{carouselData[currentSlide][1][2]}</div>
      </InfoDisplay>
      <AutoScrollButton onClick={toggleAutoScroll}>
        {autoScroll ? 'Stop Auto Scroll' : 'Start Auto Scroll'}
      </AutoScrollButton>
    </CarouselContainer>
  );
};

export default CircularCarousel;
