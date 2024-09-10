<template>
  <div class="container h-screen mx-auto bg-secondSection">
    <div class="wrapper relative h-full">
    </div>
    <img
      ref="animatedImage"
      src="@/assets/123.jpg"
      alt="Your Image"
      class="left-1 top-0 w-auto h-full absolute"
    />
  </div>
</template>
<script>
import anime from 'animejs';

export default {
  name: 'SecondSection',
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
