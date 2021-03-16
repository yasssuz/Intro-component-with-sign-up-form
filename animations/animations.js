gsap.from(".anim-card-p", {
  opacity: 0,
  y: -180,
  duration: 0.7,
  delay: 0.5,
});

gsap.from(".anim-card-form", {
  opacity: 0.6,
  x: 280,
  duration: 0.8,
});

gsap.from(".anim-card-input", {
  opacity: 0,
  delay: 0.85,
  duration: 0.3,
  y: 20,
  stagger: 0.2,
});

gsap.from(".anim-text", {
  opacity: 0.6,
  x: -280,
  duration: 1,
});
