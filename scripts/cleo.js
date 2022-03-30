gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("Hello this is my dog");
  let cleoImg = document.querySelector(".header-cleo-img");
  let cleoText = document.querySelector(".cleo-text");
  let galleryH = document.querySelector("h2");
  let goBackBottom = document.querySelector(".go-back-cleo-ani");
  let tl = gsap.timeline({ repeat: 0, repeatDelay: 1 });
  tl.to(cleoImg, {
    duration: 1.8,
    x: "-5%",
    rotation: -190,
    transformOrigin: "center",
    ease: Power2.easeOut,
  });
  tl.to(cleoImg, {
    duration: 1,
    x: "0%",
    rotation: -180,
    transformOrigin: "center",
    ease: Bounce.easeOut,
  });
  tl.to(cleoText, { duration: 0.1, opacity: 0, y: "5rem" });
  tl.to(cleoText, { duration: 0.3, opacity: 1, y: "-2rem" });
  tl.to(cleoText, { duration: 0.6, opacity: 1, ease: Bounce.easeOut, y: 0 });
  tl.to(goBackBottom, {
    duration: 1,
    x: "0%",
    ease: Power2.easeOut,
  });
  tl.to(galleryH, { duration: 0.1, opacity: 0 });
  tl.to(galleryH, { duration: 1, opacity: 1 });
  frontpageScrollAnimations();
}
function frontpageScrollAnimations() {
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
    x: "-28%",
    scrollTrigger: {
      trigger: "#cleo-second-section",
      scrub: 0.5,
      start: "-20% 80%",
      end: "bottom 40%",
    },
  });

  gsap.to(cleoThirdSection, {
    duration: 3,
    x: "8%",
    scrollTrigger: {
      trigger: "#cleo-third-section",
      scrub: 0.5,
      start: "-20% 80%",
      end: "bottom 40%",
    },
  });

  /*   let goBackBottom = document.querySelector(".go-back-cleo-ani");
  gsap.to(goBackBottom, {
    delay: 1.1,
    duration: 2,
    y: "0%",
    opacity: 1,
    ease: Power2.easeOut,
  }); */
}
