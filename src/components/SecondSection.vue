<template>
  <div class="h-screen bg-first-section">
    <div class="container h-full mx-auto px-10 py-24">
      <div class="flex justify-center h-full w-full">
        <div class="flex justify-between bg-blue-300 w-2/3">
          <div class="flex justify-center h-full w-1/4 pt-28">
          </div>
          <div class="flex h-full w-3/4 justify-end items-start border-2 border-red-900">
            <div class="space-y-4">
              <span class="block text-9xl italic font-bold text-black bg-pink-400"> ABOUT ME</span>
              <span class="block text-3xl font-bold">林姿穎</span>
              <span class="block text-3xl font-bold">2002/07/20</span>
              <span class="block text-3xl font-bold">基隆人 通勤族</span>
            </div>
          </div>
        </div>

        <img class="z-10 absolute left-36 top-36 h-1/2" src="@/assets/4.png" alt="me" >
        <img class="z-10 absolute right-36 bottom-0" src="@/assets/987.png" alt="me emogi" >
      </div>

    </div>
  </div>
</template>
<script>
import anime from 'animejs';

export default {
  name: 'SecondSection',
  data() {
    return {
      videoSrc: 'path/to/your/video.mp4', // 视频源地址
    };
  },
  mounted() {
    this.animateImage();
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

<style scoped lang="scss">

</style>
