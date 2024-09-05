<template>
  <div class="relative w-full h-full">
    <div class="relative w-full h-full bg-blue-900" style="height: 500px; width: 100%;">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 1693 900"
        class="svg-container"
      >
        <g>
          <g id="_圖層_1" data-name="圖層_1">
            <g>
              <path
                class="cls-1"
                d="M356.89,614.08v-77l120.97-103.63h-116.69v-86.09h268.83v82.79l-120.97,102.14h120.2v81.78h-272.34Z"
              />
              <path
                class="cls-1"
                d="M645.03,614.08c-29.17,0-54.96-5.72-77.38-17.17-22.42-11.44-40.06-27.2-52.92-47.28-12.86-20.07-19.29-43.12-19.29-69.15s6.42-49.08,19.29-69.15c12.86-20.07,30.5-35.75,52.92-47.04,22.42-11.29,48.22-16.94,77.38-16.94s55.04,5.65,77.62,16.94c22.58,11.29,40.22,26.97,52.92,47.04,12.7,20.07,19.05,43.12,19.05,69.15s-6.35,49.08-19.05,69.15c-12.7,20.07-30.34,35.83-52.92,47.28-22.58,11.45-48.45,17.17-77.62,17.17ZM645.03,531.28c7.84,0,14.89-1.88,21.17-5.65,6.27-3.76,11.29-9.48,15.05-17.17,3.76-7.68,5.64-17.01,5.64-27.99s-1.88-20.62-5.64-27.99c-3.76-7.36-8.78-12.94-15.05-16.7-6.28-3.76-13.33-5.64-21.17-5.64s-14.9,1.88-21.17,5.64c-6.28,3.76-11.29,9.34-15.05,16.7-3.76,7.37-5.64,16.7-5.64,27.99s1.88,20.31,5.64,27.99c3.76,7.69,8.78,13.41,15.05,17.17,6.27,3.76,13.33,5.65,21.17,5.65Z"
              />
              <path
                class="cls-1"
                d="M736.15,609.37l-89.38-262.02h113.79l44.09,138.42,46.23-138.42h90.32l44.62,140.09,46.17-140.09h105.73l-89.38,262.02h-116.08l-38.9-121.26-40.59,121.26h-116.61Z"
              />
              <path
                class="cls-1"
                d="M1086.5,331.36c-19.45,0-34.97-5.17-46.57-15.52-11.61-10.35-17.41-23.2-17.41-38.57s5.8-28.22,17.41-38.57c11.6-10.35,27.12-15.52,46.57-15.52s34.96,4.87,46.57,14.58c11.6,9.72,17.41,22.27,17.41,37.63,0,16.31-5.81,29.72-17.41,40.22-11.61,10.51-27.13,15.76-46.57,15.76ZM1033.34,609.37v-262.02h106.31v262.02h-106.31Z"
              />
              <path
                class="cls-1"
                d="M1210.1,502.6c.86,2.28,1.88,4.44,3.05,6.5,4.39,7.7,10.66,13.48,18.82,17.33,8.15,3.86,18.03,5.78,29.64,5.78s21.71-1.54,29.4-4.62c7.68-3.08,15.76-7.7,24.23-13.86l55.51,54.99c-12.55,13.25-27.99,23.34-46.33,30.27-18.35,6.93-40.38,10.4-66.09,10.4-31.36,0-58.73-5.7-82.09-17.1-23.37-11.39-41.48-27.03-54.33-46.9-12.86-19.87-19.29-42.28-19.29-67.24s6.35-48.21,19.05-67.93c12.7-19.71,30.11-35.12,52.22-46.21,22.11-11.09,46.96-16.64,74.56-16.64,25.4,0,48.84,4.93,70.32,14.79,21.48,9.86,38.73,24.49,51.75,43.9,13.01,19.41,19.52,43.44,19.52,72.09,0,3.7-.16,7.78-.47,12.25-.32,4.47-.63,8.55-.94,12.25h-178.51M1207.79,452.25h83.09s-.51-4.85-4.11-11.78c-3.61-6.93-8.55-12.32-14.82-16.17-6.28-3.85-13.8-5.78-22.58-5.78s-16.39,1.93-22.81,5.78c-6.43,3.86-11.37,9.24-14.82,16.17-1.77,3.56-3.09,7.5-3.95,11.83"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
    <div class="relative w-full h-full">
      <img src="./assets/kid.jpg" alt="小孩背景图片" class="w-full h-full object-cover" />
      <div
        class="parallax-content absolute top-10 left-28 bg-white rounded-lg bg-opacity-10"
        style="height: 70%; width: 30%;"
      >
        <div class="flex flex-col items-center justify-center h-full">
          <p class="text-wrapper">
            <span v-for="(letter, index) in text" :key="index" class="letter">
              {{ letter }}
            </span>
          </p>
          <p class="text-wrapper">
            2002/07/20
          </p>
          <p class="text-wrapper">
            基隆8+9
          </p>
        </div>
      </div>
    </div>
    <div class="relative w-full h-full">
      <img src="./assets/2.jpg" alt="柯南大笨鐘" class="w-full h-full object-cover" />
      <div
        class="parallax-content absolute top-10 right-10 bg-black rounded-lg bg-opacity-90"
        style="height: 80%; width: 50%;"
      >
        <div class="flex flex-col items-center justify-center h-full">
          <p class="text-wrapper">
            <span v-for="(letter, index) in text" :key="index" class="letter">
              {{ letter }}
            </span>
          </p>
          <p class="text-wrapper">
            123456789
          </p>
          <p class="text-wrapper">
            ㄏ嗨嗨嗨嗨嗨嗨嗨嗨嗨嗨
          </p>
        </div>
      </div>
    </div>
    <div class="relative w-full h-full">
      <img src="./assets/3.jpg" alt="柯南大笨鐘" class="w-full h-full object-cover" />
      <div
        class="parallax-content absolute top-7 right-10 bg-black rounded-lg bg-opacity-90"
        style="height: 80%; width: 50%;"
      >
        <div class="flex flex-col items-center justify-center h-full">
          <p class="text-wrapper">
            <span v-for="(letter, index) in text" :key="index" class="letter">
              {{ letter }}
            </span>
          </p>
          <p class="text-wrapper">
            98541535212351
          </p>
          <p class="text-wrapper">
            984S65123ㄏ15
          </p>
        </div>
      </div>
    </div>
    <div class="relative w-full h-full">
      謝謝大家
    </div>
  </div>
</template>

<script>
import anime from 'animejs';

export default {
  name: 'App',
  data() {
    return {
      text: "HI I'm Zowie",
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.animateText();
    this.animateSVG();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    animateSVG() {
      anime({
        targets: 'path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 2000,
        delay: anime.stagger(100, { start: 500 }), // Delay for each path
        endDelay: 500,
        direction: 'normal',
        loop: false,
      });
    },
    animateText() {
      // Text animation code using anime.js
    },
    handleScroll() {
      const scrolled = window.scrollY;
      document.querySelectorAll('.parallax-content').forEach((el) => {
        const speed = el.getAttribute('data-speed') || 0.1;
        // eslint-disable-next-line no-param-reassign
        el.style.transform = `translateY(${scrolled * speed}px)`;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.svg-container {
  width: 100%;
  height: 100%;
}

.cls-1 {
  fill: none;
  stroke: #57dbff;
  stroke-width: 3px;
}

.text-wrapper {
  display: flex;
  font-size: 2rem;
  font-weight: bold;
  color: white;
}

.letter {
  display: inline-block;
  position: relative;
}

.parallax-content {
  will-change: transform;
  transition: transform 0.1s linear;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@import '@/assets/styles.css';
</style>
