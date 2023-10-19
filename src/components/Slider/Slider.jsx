// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import PropTypes from "prop-types";

const Slider = ({ brandInfo }) => {
  const {
    slide_img_one,
    slide_img_tow,
    slide_img_three,
    slide_img_four,
    advertisement_text_one,
    advertisement_text_tow,
    advertisement_text_three,
    advertisement_text_four,
  } = brandInfo;
  return (
    <div className="container mx-auto mb-20">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={"auto"}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide className="relative">
          <img
            className="h-[40vh] md:h-[70vh] lg:h-[90vh] w-screen"
            src={slide_img_four}
            alt="slider image"
          />
          <div className="bg-black bg-opacity-60 absolute bottom-0 h-full uppercase font-fontSquare z-40 text-white">
            <h4 className="text-lg px-1 md:px-4 md:text-xl mt-16 lg:mt-20 lg:text-4xl text-center">
              {advertisement_text_four}
            </h4>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            className="h-[40vh] md:h-[70vh] lg:h-[90vh] w-screen"
            src={slide_img_three}
            alt="slider image"
          />
          <div className="bg-black bg-opacity-60 absolute bottom-0 h-full uppercase font-fontSquare z-40 text-white">
            <h4 className="text-lg px-1 md:px-4 md:text-xl mt-16 lg:mt-20 lg:text-4xl text-center">
              {advertisement_text_three}
            </h4>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            className="h-[40vh] md:h-[70vh] lg:h-[90vh] w-screen"
            src={slide_img_tow}
            alt="slider image"
          />
          <div className="bg-black bg-opacity-60 absolute bottom-0 h-full uppercase font-fontSquare z-40 text-white">
            <h4 className="text-lg px-1 md:px-4 md:text-xl mt-16 lg:mt-20 lg:text-4xl text-center">
              {advertisement_text_tow}
            </h4>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            className="h-[40vh] md:h-[70vh] lg:h-[90vh] w-screen"
            src={slide_img_one}
            alt="slider image"
          />
          <div className="bg-black bg-opacity-60 absolute bottom-0 h-full uppercase font-fontSquare z-40 text-white">
            <h4 className="text-lg px-1 md:px-4 md:text-xl mt-16 lg:mt-20 lg:text-4xl text-center">
              {advertisement_text_one}
            </h4>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

Slider.propTypes = {
  brandInfo: PropTypes.object,
};

export default Slider;
