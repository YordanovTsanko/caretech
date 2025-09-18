import React, { useMemo, useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FACEBOOK_IFRAMES = [
  {
    src:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0MD2AM9aQwyFkiBfNqj2wfQuszjYkgvHP4zukokT2ezusbVfXDjCFqKVLfzzBuhUAl%26id%3D100007507908276&show_text=true&width=500",
    width: 500,
    height: 226,
    title: "fb-post-1"
  },
  {
    src:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0K5Ps1jDY2tnWwDv2vj8GvqsoQ3Q9ANeRMTge9cVkTNFUY9bJ9ndoxM2hrsTnsNJrl%26id%3D100091802988500&show_text=true&width=500",
    width: 500,
    height: 187,
    title: "fb-post-2"
  },
  {
    src:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02bQMZH5GGLKbKKLuX9ufMxJgx7Nzypsv8D8QJnvLZVNRigyxF6s2bU6KMnCWSD4TGl%26id%3D100000156424594&show_text=true&width=500",
    width: 500,
    height: 168,
    title: "fb-post-3"
  },
  {
    src:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid034nhxng8SYGWVYH4bTrMtfmEExXbWWT1bn6Mj2pnwCu6ebK7mwPhqaWwsA9Np8J2tl%26id%3D61564061667745&show_text=true&width=500",
    width: 500,
    height: 149,
    title: "fb-post-4"
  },
  {
    src:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fstilqn.maslarski%2Fposts%2Fpfbid021C7hfZqxww9VQvtRjSiGW1gWHS5sY4s14U7b32tW81MW8osE5tGN4eNAJDnNxA65l&show_text=true&width=500",
    width: 500,
    height: 187,
    title: "fb-post-5"
  }
];

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Previous partners"
    className="hidden sm:inline-flex absolute left-2 top-1/2 -translate-y-1/2 z-[1] p-2 bg-black/40 rounded-full text-white hover:bg-primary transition"
    type="button"
  >
    <FaChevronLeft size={16} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Next partners"
    className="hidden sm:inline-flex absolute right-2 z-0 top-1/2 -translate-y-1/2 p-2 bg-black/40 rounded-full text-white hover:bg-primary transition"
    type="button"
  >
    <FaChevronRight size={16} />
  </button>
);

const TestimonialsSlider = ({ reviews = [], slidesToShow = 3 }) => {

  const slides = useMemo(() => {
    const textSlides = (reviews || []).map((r) => ({ type: "review", payload: r }));
    const fbSlides = FACEBOOK_IFRAMES.map((f) => ({ type: "facebook", payload: f }));
    // Ако няма текстови отзиви — показваме само facebook
    return textSlides.length ? [...textSlides, ...fbSlides] : fbSlides;
  }, [reviews]);

  const settings = {
    arrows: true,
    dots: false,
    infinite: slides.length > slidesToShow,
    speed: 600,
    slidesToShow: Math.min(slidesToShow, slides.length || 1),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: Math.min(2, slides.length) } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ],
    accessibility: true,
    pauseOnHover: true,
    lazyLoad: "ondemand"
  };

  return (
    <section className="max-w-[1280px] w-full mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Отзиви от клиенти</h2>

      <div className="relative">
        <Slider {...settings}>
          {slides.map((s, idx) => {

            // Facebook iframe slide
            const f = s.payload;
            console.log(f);
            
            return (
              <div key={`fb-${idx}`} className="p-3 rounded-lg m-3 flex items-center justify-center" aria-hidden>
                <div style={{ width: "100%", maxWidth: 600, display: "flex", justifyContent: "center" }}>
                  <iframe
                    title={f.title ?? `fb-${idx}`}
                    src={f.src}
                    width={f.width}
                    height={300}
                    style={{ border: "none", overflow: "hidden" }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
