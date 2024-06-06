import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css/pagination";
import "swiper/css";
import "./Carousel.css";

export default function Carousel() {
  const navigate = useNavigate();

  return (
    <section className="home" id="home">
      <div className="swiper home-slider">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
        >
          <SwiperSlide className="swiper-slide slide">
            <div className="content">
              <span>our special dish</span>
              <h3>Nutri noodles</h3>
              <p>Have some nutritious food stay healthy!as always</p>
              <a onClick={() => navigate("/menu")} className="btn">
                order now
              </a>
            </div>
            <div className="image">
              <img src="images/noodle.jpg" alt="menu-item" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide slide">
            <div className="content">
              <span>our special dish</span>
              <h3>Salmon wrap</h3>
              <p>Wrap rolls for spicy lit delicious combo</p>
              <a onClick={() => navigate("/menu")} className="btn">
                order now
              </a>
            </div>
            <div className="image">
              <img src="images/salmon_wrap.jpg" alt="menu-item" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide slide">
            <div className="content">
              <span>our special dish</span>
              <h3>Pizza</h3>
              <p>pizzza with cheese filled and chillies flavour </p>
              <a onClick={() => navigate("/menu")} className="btn">
                order now
              </a>
            </div>
            <div className="image">
              <img src="images/pizza.jpg" alt="menu-item" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
