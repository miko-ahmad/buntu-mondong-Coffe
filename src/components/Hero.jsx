import { useEffect, useRef } from "react";
import LocationFillGray from "../assets/icons/location-fill-gray.svg";

import StarSvg from "../assets/icons/star-yellow-fill.svg";
import BtnContact from "./BtnContact";
import Thumbnail1 from "../assets/img/Banner.jpg";
import Thumbnail2 from "../assets/img/Hero.png";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export default function Hero() {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const swiper = new Swiper(swiperRef.current, {
      slidesPerView: 1.2,
      spaceBetween: 20,
      grabCursor: true,
      loop: true, // Enable infinite loop
      navigation: {
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      },
      breakpoints: {
        640: { slidesPerView: 1.5 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 2.5 },
        1280: { slidesPerView: 3 },
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <section id="home" className="relative w-full max-w-[1440px] mx-auto py-8 px-4 md:px-12 overflow-visible scroll-mt-24 pt-[80px]">
      {/* --- Card di Tengah --- */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-10">
        <div className="bg-white rounded-3xl p-6 shadow-2xl w-[90%] max-w-[400px] md:max-w-lg flex flex-col items-center gap-6 pointer-events-auto">
          {/* Stars */}
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <img key={i} src={StarSvg} alt="Star" className="h-6 w-6" />
              ))}
              <span className="text-lg font-semibold text-[#FFB800]">5.0</span>
            </div>
            <h3 className="text-2xl font-semibold text-resto-black">
              Kopi Buntu Mondong
            </h3>
            <p className="text-lg font-semibold text-[#656565]">
              Original Coffee From Enrekang
            </p>
            <div className="flex items-center gap-2 text-sm text-[#656565]">
              <img src={LocationFillGray} alt="Location" className="h-5 w-5" />
              Sulawesi Selatan, Indonesia
            </div>
          </div>

          {/* Button */}
          <BtnContact />
        </div>
      </div>

      {/* --- Swiper Gambar di Belakang --- */}
      <div className="relative">
        <div ref={swiperRef} className="swiper w-full pt-40 pb-10">
          <div className="swiper-wrapper">
            {[Thumbnail1, Thumbnail2, Thumbnail1, Thumbnail2].map((thumb, i) => (
              <div key={i} className="swiper-slide px-2">
                <div className="h-[300px] md:h-[500px] w-full overflow-hidden rounded-3xl">
                  <img src={thumb} alt="Thumbnail" className="h-full w-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nav Button */}
        <button ref={prevRef} className="absolute top-1/2 left-0 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-20">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button ref={nextRef} className="absolute top-1/2 right-0 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-20">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
