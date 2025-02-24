function a(t, s = 1e3) {
  t.style.opacity = 0, t.style.transition = `opacity ${s}ms ease-in-out`, setTimeout(() => {
    t.style.opacity = 1;
  }, 10);
}
function o(t, s = 1e3) {
  t.style.transform = "translateX(-100%)", t.style.transition = `transform ${s}ms ease-in-out`, setTimeout(() => {
    t.style.transform = "translateX(0)";
  }, 10);
}
export {
  a as fadeIn,
  o as slideIn
};
