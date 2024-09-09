<template>
  <div>
    <div class="header">
      <div id="playPause">
        <svg id="letters" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.57 206.6">
          <!-- T -->
          <polygon
              class="cls-1 cls-2"
              points="0.5 0.5 97.5 0.5 97.95 13.06 54.31 13.07 55.35 94.5 40.5 94.5 44.03 13.5 0.5 13.5 0.5 0.5"
          />
          <!-- H -->
          <polygon
              class="cls-1 cls-3"
              points="106.33 0.5 106.33 94.5 115.18 94.5 115.18 51.38 151.61 51.03 151.61 94.5 160.12 94.5 160.12 0.5 152.12 0.5 152.3 42.18 115.53 42.44 115.35 0.5 106.33 0.5"
          />
          <!-- A -->
          <path
              class="cls-1 cls-4"
              d="M206.06,329.91s17.88-89.7,43.15-92.91c0,0,26.3-2.06,33.28,92.91H271.43s-4.51-42.49-11.24-43.17l-26.5-.28c-3-.1-6,4.54-6.86,7.37-3,9.29-6.61,26.25-7.32,35.23Z"
              transform="translate(-32.5 -236.5)"
          />
          <path
              class="cls-1 cls-2"
              d="M240.79,252.64h15.15c2.6,0,5.37,5.63,6.1,8.13.53,1.82,1.12,4,1.55,6.19a5.7,5.7,0,0,1-5.6,6.78H237.94a4.2,4.2,0,0,1-4.18-4.61,40.12,40.12,0,0,1,1.61-8.52C236.2,258.18,240.79,252.64,240.79,252.64Z"
              transform="translate(-32.5 -236.5)"
          />
          <!-- N -->
          <path
              class="cls-1 cls-3"
              d="M294.74,329.91s11.67-71.07,28.38-87a4.37,4.37,0,0,1,6.57.74c8.91,12.76,44,62.4,38.93,78.08,0,0,20.34-71.14,13.1-81.53h10.39s-8.85,88.51-17.37,89.7H362.66S341.29,270,329.33,255.64a3.59,3.59,0,0,0-6.16,1.24C318.6,271.28,304.23,318,306.63,328a1.51,1.51,0,0,1-1.47,1.88Z"
              transform="translate(-32.5 -236.5)"
          />
          <!-- K -->
          <polygon
              class="cls-1 cls-4"
              points="377.14 3.72 373.56 93.42 383.27 93.42 384.37 45.77 388.09 45.77 425.9 93.42 450.33 93.42 396.03 41.16 424.12 3.72 414.42 3.72 398.92 21.77 385.48 35.03 385.99 3.72 377.14 3.72"
          />
          <!-- Y -->
          <polygon
              class="cls-1 cls-2"
              points="95.61 128.48 116.88 162.01 116.88 206.1 124.2 206.1 130.41 159.12 148.37 128.48 140.37 128.48 123.35 147.97 108.88 128.48 95.61 128.48"
          />
          <!-- O -->
          <path
              class="cls-1 cls-3"
              d="M196.11,383.53c-6.77,9.08-10.35,32-.6,44,14.25,17.5,31.36,19.73,48.77,5.37,11.84-9.77,4.44-43.53,4.44-43.53C237,365.28,210.69,364,196.11,383.53Z"
              transform="translate(-32.5 -236.5)"
          />
          <path
              class="cls-1 cls-4"
              d="M215.44,388.78c-8.83,4.67-19.19,18.83-6.49,34.46a15.53,15.53,0,0,0,26.2-3.37c3.39-7.53,3.77-21-3.4-28.6A13.68,13.68,0,0,0,215.44,388.78Z"
              transform="translate(-32.5 -236.5)"
          />
          <!-- U -->
          <path
              class="cls-1 cls-2"
              d="M263.6,368.69V414s5.19,23.61,24.6,24c0,0,23.23-3.14,22.37-23.65l0-46.64h-8.71l-.74,50.9s-16,24-27.26-.77l-2.38-49.14Z"
              transform="translate(-32.5 -236.5)"
          />
        </svg>
      </div>
      <!--Content before waves-->
      <div class="inner-header flex">
      </div>

      <!--Waves Container-->
      <div>
        <svg
            class="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shape-rendering="auto"
        >
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
          </defs>
          <g class="parallax">
            <use
                xlink:href="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7"
            />
            <use
                xlink:href="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
            />
            <use
                xlink:href="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
            />
            <use
                xlink:href="#gentle-wave"
                x="48"
                y="7"
                fill="#fff"
            />
          </g>
        </svg>
      </div>
      <!--Waves end-->
    </div>
    <!--Header ends-->
  </div>
</template>
<script>

</script>

<style scoped>
@import url(//fonts.googleapis.com/css?family=Lato:300:400);

#playPause{
  position: absolute;
  width: 50%;
  height: 50%;
  margin: auto;
  z-index: 10000;
}
.cls-1 {
  fill: none;
  stroke: #6639bd;
  stroke-miterlimit: 10;
}
.cls-2 {
  stroke: #8f1b1b;
  stroke-width: 2;
}
.cls-3 {
  stroke: #118811;
  stroke-width: 2;
}
.cls-4 {
  stroke: #435dc7;
  stroke-width: 2;
}
body {
  margin: 0;
}

h1 {
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  letter-spacing: 2px;
  font-size: 48px;
}

p {
  font-family: 'Lato', sans-serif;
  letter-spacing: 1px;
  font-size: 14px;
  color: #333333;
}

.header {
  position: relative;
  text-align: center;
  background: linear-gradient(60deg, rgba(84, 58, 183, 1) 0%, rgba(0, 172, 193, 1) 100%);
  color: white;
}

.logo {
  width: 50px;
  fill: white;
  padding-right: 15px;
  display: inline-block;
  vertical-align: middle;
}

.inner-header {
  height: 65vh;
  width: 100%;
  margin: 0;
  padding: 0;
}

.flex { /*Flexbox for containers*/
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.waves {
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px; /*Fix for safari gap*/
  min-height: 100px;
  max-height: 150px;
}

.content {
  position: relative;
  height: 20vh;
  text-align: center;
  background-color: white;
}

/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;
}

.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}

.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}

.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}

.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}

@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}

/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height: 40px;
    min-height: 40px;
  }

  .content {
    height: 30vh;
  }

  h1 {
    font-size: 24px;
  }
}
</style>
