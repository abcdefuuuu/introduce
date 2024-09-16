<template>
  <div class="third-section flex justify-center items-end w-full h-screen bg-black">
    <div class="w-full h-full container flex">
      <div class="relative flex w-full h-full">
        <div class="absolute flex top-16 left-0">
          <div class="absolute flex">
            <div
              :class="{ 'w-48 h-48': !doghovered, 'w-168 h-144': doghovered }"
              class="flex items-center justify-center bg-blue-400 rounded-3xl transition-all duration-300"
              tabindex="0"
              @mouseover="handleDogMouseOver"
              @mouseleave="handleDogMouseLeave"
              @focusin="handleDogFocusIn"
              @focusout="handleDogFocusOut"
            >
              <p v-if="!doghovered" class="text-4xl text-white font-serif">
                DOOOOG
              </p>
              <div v-else class="flex w-full h-full">
                <div class="relative w-1/2 h-full pl-1 pt-8">
                  <div class="relative h-1/5 flex justify-center items-center">
                    <p class="text-4xl bg-red-300 font-bold">
                      這是我家的狗
                    </p>
                  </div>
                  <div class="h-3/5 flex justify-center items-center">
                    <p class="text-4xl bg-pink-200 font-bold text-center">
                      15歲了 <br> 超不愛吃飯 <br> 從沒超過3公斤
                    </p>
                  </div>
                </div>
                <div class="relative w-2/3 h-full">
                  <div class="h-1/3 w-full flex justify-center items-center p-2">
                    <img src="@/assets/1.jpg" alt="Image 1" class="object-cover w-full h-full rounded-xl">
                  </div>
                  <div class="h-1/3 w-full flex justify-center items-center p-2">
                    <img src="@/assets/2.jpg" alt="Image 2" class="object-cover w-full h-full rounded-xl">
                  </div>
                  <div class="h-1/3 w-full flex justify-center items-center p-2">
                    <img src="@/assets/2.png" alt="Image 3" class="object-cover w-full h-full rounded-xl">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute flex bottom-40 right-6">
          <div class="relative flex pb-16">
            <div
              :class="{ 'w-48 h-48': !bhovered, 'w-168 h-96': bhovered }"
              class="flex items-center justify-center bg-blue-400 rounded-3xl transition-transform duration-300"
              tabindex="0"
              :style="transformStyle"
              @mouseover="handleBMouseOver"
              @mouseleave="handleBMouseLeave"
              @focusin="handleBFocusIn"
              @focusout="handleBFocusOut"
            >
              <p v-if="!bhovered" class="text-4xl text-white font-serif">
                Huh?
              </p>
              <div v-else class="flex w-full h-full">
                <div class="relative w-1/2 h-full pl-1 pt-8">
                  <div class="relative h-1/5 flex justify-center items-center">
                    <p class="text-4xl bg-red-300 font-bold">
                      很常說的一句話
                    </p>
                  </div>
                  <div class="h-3/5 flex justify-center items-center">
                    <p class="text-2xl bg-pink-200 font-bold text-center">
                      耳齡80歲 <br> 一句話要別人重複三遍 <br> 所以專長是惹別人中風
                    </p>
                  </div>
                </div>
                <div class="relative w-2/3 h-full">
                  <div class="h-1/3 w-full flex justify-center items-center p-2">
                    <img src="@/assets/4.jpg" alt="Image 1" class="object-cover w-full h-full rounded-xl">
                  </div>
                  <div class="h-1/3 w-full flex justify-center items-center p-2">
                    <img src="@/assets/6.png" alt="Image 2" class="object-cover w-full h-full rounded-xl">
                  </div>
                  <div class="h-1/3 w-full flex justify-center items-center p-2">
                    <img src="@/assets/5.jpg" alt="Image 3" class="object-cover w-full h-full rounded-xl">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute -bottom-14 -right-10 flex">
          <p class="text-12xl font-bold text-red-500">
            #蛤？？
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThirdSection',
  data() {
    return {
      doghovered: false,
      bhovered: false,
    };
  },
  computed: {
    transformStyle() {
      return {
        transform: this.bhovered ? 'scale(1.2)' : 'scale(1)',
        transformOrigin: 'bottom right',
      };
    },
  },
  methods: {
    handleDogMouseOver() {
      this.doghovered = true;
    },
    handleDogMouseLeave() {
      this.doghovered = false;
    },
    handleDogFocusIn() {
      this.doghovered = true;
    },
    handleDogFocusOut() {
      this.doghovered = false;
    },
    handleBMouseOver() {
      this.bhovered = true;
    },
    handleBMouseLeave() {
      this.bhovered = false;
    },
    handleBFocusIn() {
      this.bhovered = true;
    },
    handleBFocusOut() {
      this.bhovered = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.transition-transform {
  transition: transform 0.3s ease;
}
</style>
