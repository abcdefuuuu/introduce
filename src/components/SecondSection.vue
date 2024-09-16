<template>
  <div class="second-section flex justify-center items-end w-full h-screen bg-black">
    <div class="relative w-full h-full container">
      <div class="absolute w-1/3 h-1/5 bg-pink-100 top-36 z-10 left-80">
        <p class="text-8xl">
          ABOUT ME
        </p>
      </div>
      <div class="relative w-5/12 h-5/6 bg-blue-50 rounded-tl-3xl rounded-tr-3xl top-52 left-72">
        <div class="flex w-full h-full">
          <div class="w-1/3">
            <div class="h-1/6 w-full flex justify-center items-center"></div>
            <div class="h-1/6 w-full flex justify-center items-center">
              <p class="text-4xl font-bold bg-red-300">
                林姿穎
              </p>
            </div>
            <div class="h-1/6 w-full flex justify-center items-center">
              <p class="text-4xl font-bold bg-red-300">
                基隆人
              </p>
            </div>
            <div class="h-1/6 w-full flex justify-center items-center">
              <p class="text-4xl font-bold bg-red-300">
                通勤族
              </p>
            </div>
          </div>
          <div class="w-2/3 border-4 border-red-900 rounded-tl-3xl rounded-tr-3xl">
            <img src="@/assets/5.png" alt="me" class="w-full rounded-tl-3xl rounded-tr-3xl">
          </div>
        </div>
      </div>
      <div class="absolute flex top-16 right-0 w-96 h-full">
        <div class="block">
          <p class="text-9xl font-bold text-pink-700">
            #育有
          </p>
          <p class="text-9xl font-bold text-pink-700 pl-20">
            一犬
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import anime from 'animejs';

export default {
  name: 'SecondSection',
  data() {
    return {};
  },
  mounted() {
    this.animateImage();
  },
  methods: {
    animateImage() {
      anime({
        target: this.$refs.myImage,
        translateX: -1350,
        // scale: 2,
        rotate: '2turn',
        duration: 2000,
        delay: anime.stagger(100, { start: 4000 }),
        easing: 'easeInOutQuad',
        loop: false,
      });
    },
  },
};
</script>

<style scoped lang="scss">

</style>
