import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Review.css";

export default function Review() {
  const customerReview = [
    {
      name: "santa",
      star: 4,
      img: "images/pic-1.jfif",
      feedback: "“adi poliki food”",
    },
    {
      name: "swetha",
      star: 5,
      img: "images/pic-4.jfif",
      feedback:
        "“This is always our breakfast stop before heading home from vacation. Always delicious. Always great service. Always worth the stop.”",
    },
    {
      name: "keerthy",
      star: 5,
      img: "images/pic-3.png",
      feedback:
        "“I was so impressed with my breakfast this morning! I tried the Fried Green Tomato Benedict and my boyfriend got the Crab Cakes Benedict. We both finished our whole plates and were so impressed with the quality of the food and the short amount of time it took to receive it. Our waitress was sweet and helpful. I will definitely be back!”",
    },
    {
      name: "aswini",
      star: 4,
      img: "images/pic-4.jfif",
      feedback:
        "“Their brunch is awesome, I love the avocado toast and the California focaccia. Pizza is really good as well.”",
    },
    {
      name: "sakura",
      star: 5,
      img: "images/pic-5.jfif",
      feedback: "“Best Pizza EVER! Not just on the lower Cape…. anywhere!”",
    },
    {
      name: "sasuke",
      star: 5,
      img: "images/pic-6.jpg",
      feedback:
        "“Breakfast was delicious. Like a good homestyle country savory breakfast (and Im from the south, thats saying a lot)… Enjoyed the whole experience and definitely recommend this place for a place to eat on the cape”",
    },
  ];

  return (
    <section class="review" id="review">
      <h3 class="sub-heading">customer's review</h3>
      <h1 class="heading">What they say</h1>
      <Swiper
        spaceBetween={20}
        autoplay={{
            delay: 7500,
            disableOnInteraction: false,
        }}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {customerReview.map((item, index) => {
          return (
            <SwiperSlide className="slide">
              <i class="fas fa-quote-right"></i>
              <div class="user">
                <img src={item.img} class="review-img" alt="" />
                <div class="user-info">
                  <h3>{item.name}</h3>
                  <div class="stars">
                    {Array.from(Array(item.star), (e, i) => {
                      return <i key={i} class="fas fa-star"></i>;
                    })}
                  </div>
                </div>
              </div>
              <p>{item.feedback}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
