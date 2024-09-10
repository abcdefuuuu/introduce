<template>
  <div class="relative w-full h-full">
    <div id="fullpage">
      <div class="section">
        <first />
      </div>
      <div class="section">
        <second />
      </div>
      <div class="section">
        <third />
      </div>
      <div class="section">
        <starry-sky />
      </div>
      <!-- TODO: Update this section -->
      <!--      <div class="section">-->
      <!--        <wave />-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script>
import anime from 'animejs';
import Fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.css';
import first from './components/FirstSection.vue';
import second from './components/SecondSection.vue';
import third from './components/ThirdSection.vue';
import StarrySky from './components/StarrySky.vue';
// import wave from './components/Waves.vue';

export default {
  name: 'App',
  components: {
    first,
    second,
    third,
    StarrySky,
    // wave,
  },
  data() {
    return {
    };
  },
  mounted() {
    this.animateImage();
    // eslint-disable-next-line no-new
    new Fullpage('#fullpage', {
      autoScrolling: true,
      scrollHorizontally: true,
    });
  },
  methods: {
    animateImage() {
      anime({
        targets: this.$refs.animatedImage,
        scale: [0.5, 1], // 縮放
        translateX: [-300, 150], // 從0位移到250px
        duration: 2000, // 動畫持續時間 2000ms
        easing: 'easeInOutQuad', // 動畫緩動效果
        delay: 2000,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#fullpage {
  height: 100vh;
}

//.section:nth-child(2) {
//  background-image: url('@/assets/kid.jpg');
//  background-size: cover;
//  background-repeat: no-repeat;
//  background-position: center;
//  display: flex;
//}

.section:nth-child(3) {
  background-image: url('@/assets/2.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
}

.section:nth-child(4) {
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #2c3e50;
  text-align: center;
}
</style>
