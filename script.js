var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".part1",
    start: "50% 50%",
    end: "150% 50%",
    // markers: true,
    scrub: true,
    pin: true,
  },
});

tl.to(
  ".top-content",
  {
    rotateX: "110deg",
    opacity: "0",
    duration: 1.5,
  },
  "rc"
);

tl.to(
  ".btn-content",
  {
    rotateX: "-110deg",
    opacity: "0",
    duration: 1.5,
  },
  "rc"
);

// tl.to(
//   ".img",
//   {
//     width: "100%",
//     height: "100%",
//     duration: 5,
//   },
//   "rc"
// );

tl.to(
  ".img",
  {
    width: "100%",
    height: "100%",
    duration: 5,
  },
  "rc"
);

tl.to(".img-text", { opacity: 1, duration: 1 }, "rc+=1.5");
