<template>
  <my-swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
  >
    <swiper-slide >Slide 1</swiper-slide>
    <swiper-slide class="swiper-slide-1">Slide 2</swiper-slide><swiper-slide class="swiper-slide">Slide 3</swiper-slide>
    <swiper-slide class="swiper-slide">Slide 4</swiper-slide><swiper-slide class="swiper-slide">Slide 5</swiper-slide>
    <swiper-slide class="swiper-slide">Slide 6</swiper-slide><swiper-slide class="swiper-slide">Slide 7</swiper-slide>
    <swiper-slide class="swiper-slide">Slide 8</swiper-slide><swiper-slide class="swiper-slide">Slide 9</swiper-slide>
  </my-swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles

  // import 'swiper/css/pagination';
  // import 'swiper/css/navigation';

  // import './style.css';

  // import required modules
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';

  export default {
    components: {
      MySwiper: Swiper,
      SwiperSlide,
    },
    data() {
      return {
        modules: [Autoplay, Pagination, Navigation],
      };
    },
  };
</script>

<style lang="css" scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide-1 {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
