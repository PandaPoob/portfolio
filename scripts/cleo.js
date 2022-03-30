gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("Hello this is my dog");
  let cleoFirstSection = document.querySelector("#cleo-first-section");
  let cleoSecondSection = document.querySelector("#cleo-second-section");
  let cleoThirdSection = document.querySelector("#cleo-third-section");

  gsap.to(cleoFirstSection, {
    duration: 3,
    x: "0",
    scrollTrigger: {
      trigger: "#cleo-first-section",
      scrub: 0.5,
      start: "-20% 50%",
      end: "120% 50%",
    },
  });

  gsap.to(cleoSecondSection, {
    duration: 3,
    x: "-70%",
    scrollTrigger: {
      trigger: "#cleo-second-section",
      scrub: 0.5,
      start: "-20% 80%",
      end: "bottom 40%",
      markers: true,
    },
  });

  frontpageScrollAnimations();
}
function frontpageScrollAnimations() {}
