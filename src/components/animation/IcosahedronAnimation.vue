<template>
  <div class="wrapper">
    <div class="polyhedron icosahedron">
      <div class="container">
        <div class="face triangle"></div>
        <div class="face triangle"></div>
        <div class="face triangle"></div>
        <div class="face triangle"></div>
        <div class="face triangle"></div>
        <div class="face triangle"></div>
        <div class="face triangle"></div>
        <div class="face triangle"></div>
        <div class="face triangle"></div>
        <div class="face triangle"></div>
        <div class="face triangle"></div>
        <div class="face triangle"></div>
        <div class="face triangle"></div>
        <div class="face triangle"></div>
        <div class="face triangle"></div>
        <div class="face triangle"></div>
        <div class="face triangle"></div>
        <div class="face triangle"></div>
        <div class="face triangle"></div>
        <div class="face triangle"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes rotate {
  from {
    transform: rotateX(0) rotateY(0) rotateZ(0);
  }
  to {
    transform: rotateX(360deg) rotateY(720deg) rotateZ(360deg);
  }
}
.wrapper {
  height: 350px;
  overflow: hidden;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.polyhedron {
  display: inline-block;
  vertical-align: middle;
  position: relative;
  transform-style: preserve-3d;
  margin: 50px;
  perspective: 500px;
}
.polyhedron .container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: rotate 50s infinite linear;
}
.polyhedron * {
  transform-style: preserve-3d;
}
.polyhedron .triangle {
  position: absolute;
  width: 100px;
  height: 100px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transform-origin: 50% 100%;
}
.polyhedron .triangle:before {
  content: '';
  width: 0;
  height: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: transparent;
  border: 50px solid transparent;
  border-top: 0;
  border-bottom-width: 87px;
}
.polyhedron .triangle:nth-child(6n):before {
  border-bottom-color: #8638e5;
  opacity: 0.9;
}
.polyhedron .triangle:nth-child(6n + 1):before {
  border-bottom-color: #00ff00;
  opacity: 0.2;
}
.polyhedron .triangle:nth-child(6n + 2):before {
  border-bottom-color: #ff00a8;
  opacity: 0.8;
}
.polyhedron .triangle:nth-child(6n + 3):before {
  border-bottom-color: #8638e5;
  opacity: 0.8;
}
.polyhedron .triangle:nth-child(6n + 4):before {
  border-bottom-color: #00ff00;
  opacity: 0.2;
}
.polyhedron .triangle:nth-child(6n + 5):before {
  border-bottom-color: #ff00a8;
  opacity: 0.9;
}

.icosahedron {
  width: 250px;
  height: 250px;
}
.icosahedron .face:nth-child(1) {
  transform-origin: 50% 13px;
  transform: translateZ(96px) rotateX(-39deg);
}
.icosahedron .face:nth-child(2) {
  transform-origin: 50% 13px;
  transform: translateZ(96px) rotate(72deg) rotateX(-39deg);
}
.icosahedron .face:nth-child(3) {
  transform-origin: 50% 13px;
  transform: translateZ(96px) rotate(144deg) rotateX(-39deg);
}
.icosahedron .face:nth-child(4) {
  transform-origin: 50% 13px;
  transform: translateZ(96px) rotate(-144deg) rotateX(-39deg);
}
.icosahedron .face:nth-child(5) {
  transform-origin: 50% 13px;
  transform: translateZ(96px) rotate(-72deg) rotateX(-39deg);
}
.icosahedron .face:nth-child(6) {
  transform: translateZ(96px) rotate(180deg) rotateX(39deg)
    translate3d(0, -19px, -55px) rotateX(39deg);
}
.icosahedron .face:nth-child(7) {
  transform: translateZ(96px) rotate(36deg) rotateX(39deg)
    translate3d(-51px, -141px, 45px) rotateX(39deg);
}
.icosahedron .face:nth-child(8) {
  transform: translateZ(96px) rotate(-36deg) rotateX(39deg)
    translate3d(51px, -141px, 45px) rotateX(39deg);
}
.icosahedron .face:nth-child(9) {
  transform: translateZ(96px) rotate(108deg) rotateX(39deg)
    translate3d(-83px, -66px, -17px) rotateX(39deg);
}
.icosahedron .face:nth-child(10) {
  transform: translateZ(96px) rotate(-108deg) rotateX(39deg)
    translate3d(83px, -66px, -17px) rotateX(39deg);
}
.icosahedron .face:nth-child(11) {
  transform-origin: 50% 13px;
  transform: translateZ(-96px) translateY(0) rotate(180deg) rotateX(39deg);
}
.icosahedron .face:nth-child(12) {
  transform-origin: 50% 13px;
  transform: translateZ(-96px) translateY(0) rotate(180deg) rotate(72deg)
    rotateX(39deg);
}
.icosahedron .face:nth-child(13) {
  transform-origin: 50% 13px;
  transform: translateZ(-96px) translateY(0) rotate(180deg) rotate(144deg)
    rotateX(39deg);
}
.icosahedron .face:nth-child(14) {
  transform-origin: 50% 13px;
  transform: translateZ(-96px) translateY(0) rotate(180deg) rotate(-144deg)
    rotateX(39deg);
}
.icosahedron .face:nth-child(15) {
  transform-origin: 50% 13px;
  transform: translateZ(-96px) translateY(0) rotate(180deg) rotate(-72deg)
    rotateX(39deg);
}
.icosahedron .face:nth-child(16) {
  transform: translateZ(-96px) translateY(-174px) rotate(180deg) rotate(180deg)
    rotateX(-39deg) translate3d(0, -19px, 55px) rotateX(-39deg);
}
.icosahedron .face:nth-child(17) {
  transform: translateZ(-96px) translateY(-174px) rotate(180deg) rotate(36deg)
    rotateX(-39deg) translate3d(-51px, -141px, -45px) rotateX(-39deg);
}
.icosahedron .face:nth-child(18) {
  transform: translateZ(-96px) translateY(-174px) rotate(180deg) rotate(-36deg)
    rotateX(-39deg) translate3d(51px, -141px, -45px) rotateX(-39deg);
}
.icosahedron .face:nth-child(19) {
  transform: translateZ(-96px) translateY(-174px) rotate(180deg) rotate(108deg)
    rotateX(-39deg) translate3d(-83px, -66px, 17px) rotateX(-39deg);
}
.icosahedron .face:nth-child(20) {
  transform: translateZ(-96px) translateY(-174px) rotate(180deg) rotate(-108deg)
    rotateX(-39deg) translate3d(83px, -66px, 17px) rotateX(-39deg);
}
</style>
