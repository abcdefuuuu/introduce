<template>
  <div class="app-container flex flex-row w-screen h-screen overflow-x-auto overflow-y-hidden">
    <first-section class="flex-shrink-0 w-screen h-full" />
    <second-section class="flex-shrink-0 w-screen h-full" />
    <third-section class="flex-shrink-0 w-screen h-full" />
    <four-section class="flex-shrink-0 w-screen h-full" />
    <!--    <waves />-->
  </div>
</template>

<script>
import FirstSection from './components/FirstSection.vue';
import SecondSection from './components/SecondSection.vue';
import ThirdSection from './components/ThirdSection.vue';
import FourSection from './components/FourSection.vue';
// import Waves from './components/Waves.vue';

export default {
  name: 'App',
  components: {
    FirstSection,
    SecondSection,
    ThirdSection,
    FourSection,
    // Waves
  },
};
</script>

<style lang="scss" scoped>

</style>
