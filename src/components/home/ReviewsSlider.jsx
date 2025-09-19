import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewsCard from "./ReviewsCard";
import reviewsData from "../../utils/reviews.json";

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Previous review"
    className="hidden sm:inline-flex absolute -left-5 top-1/2 -translate-y-1/2 z-[1] p-2 bg-black/40 rounded-full text-white hover:bg-primary transition"
    type="button"
  >
    <FaChevronLeft size={16} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Next review"
    className="hidden sm:inline-flex absolute -right-5 top-1/2 -translate-y-1/2 p-2 bg-black/40 rounded-full text-white hover:bg-primary transition"
    type="button"
  >
    <FaChevronRight size={16} />
  </button>
);

const ReviewsSlider = ({ slidesToShow = 3 }) => {
  const reviews = reviewsData; // from JSON

  const settings = {
    arrows: true,
    dots: false,
    infinite: reviews.length > slidesToShow,
    speed: 600,
    slidesToShow: Math.min(slidesToShow, reviews.length || 1),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: Math.min(2, reviews.length) } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
    accessibility: true,
    pauseOnHover: true,
    lazyLoad: "ondemand",
  };

  return (
    <section className="max-w-[1280px] w-full mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Отзиви от клиенти</h2>

      <div className="relative">
        <Slider {...settings}>
          {reviews.map((r, idx) => (
            <div key={idx} className="p-4">
              <ReviewsCard
                name={r.name}
                time={r.time}
                review={r.review}
                rating={r.rating}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ReviewsSlider;
