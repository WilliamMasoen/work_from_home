import "../../styles/Carousel.css";
import { useRef, useEffect, useState } from "react";
import q1 from "../../assets/images/quotes/q1.jpg";
import q2 from "../../assets/images/quotes/q2.png";

interface Quote {
  index: number;
  quote: string;
  credits: string;
  image: any;
}

function Carousel() {
  // const [activeIndex, setActiveIndex] = useState(0);\
  const [slide, setSlide] = useState(0);

  // Use ILOVEIMG to crop images to all be the same size (width: 3072px, height: 1603px)
  const QuotesList: Quote[] = [
    {
      index: 1,
      quote: '"carpe diem."',
      credits: "- Horace",
      image: q1,
    },
    {
      index: 2,
      quote:
        '"spread love everywhere you go. let no one ever come to you without leaving happier."',
      credits: "- Mother Teresa",
      image: q2,
    },
    {
      index: 3,
      quote:
        '"many of lifes failures are people wo did not realize how close they were to success when they gave up."',
      credits: "- Thomas A. Edison",
      image: q1,
    },
    {
      index: 4,
      quote: '"You never fail until you stop trying."',
      credits: "- Albert Einstein",
      image: q2,
    },
    {
      index: 5,
      quote: '"Carpe Diem5."',
      credits: "- Ali",
      image: q1,
    },
    {
      index: 6,
      quote: '"Carpe Diem6."',
      credits: "- Ali",
      image: q2,
    },
  ];

  const nextSlide = () => {
    setSlide(slide === QuotesList.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? QuotesList.length - 1 : slide - 1);
  };

  // Automatically move to next carousel slide
  let timeoutRef = useRef(setTimeout(() => {}));

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  const carouselDelay = 4000;

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => nextSlide(), carouselDelay);

    return () => {
      resetTimeout();
    };
  }, [slide]);

  return (
    <>
      {/* Quote Carousel */}
      <div className="quote-carousel">
        {/* Quotes */}
        <div
          className="quote-carousel-items"
          style={{ transform: `translate(-${slide * 100}%)` }}
        >
          {QuotesList.map((quote, idx) => {
            return (
              <div className="quote-item" key={idx}>
                <img className="quote-img" src={quote.image} />
                <div className="quote-text">
                  <div className="quote">{quote.quote}</div>
                  <div className="quote-credits">{quote.credits}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quote Carousel Arrow 1 */}
        <button
          onClick={prevSlide}
          className="quote-carousel-arrow quote-carousel-arrow-left"
        >
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>

        {/* Quote Carousel Arrow 2 */}
        <button
          onClick={nextSlide}
          className="quote-carousel-arrow quote-carousel-arrow-right"
        >
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>

        {/* Quote Carousel Buttons */}
        <div className="quote-carousel-buttons">
          {QuotesList.map((_, idx) => {
            return (
              <span className="material-symbols-outlined">
                <button
                  key={idx}
                  className={
                    slide === idx
                      ? "quote-carousel-button"
                      : "quote-carousel-button quote-carousel-button-inactive"
                  }
                  onClick={() => setSlide(idx)}
                ></button>
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Carousel;