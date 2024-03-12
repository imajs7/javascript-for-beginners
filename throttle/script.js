const btn = document.querySelector("#increase");
const click = document.querySelector("#click");
const throttle = document.querySelector("#throttle");
let count = 0;
let throttleCount = 0;

const myThrottle = (func) => {
  let prevCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - prevCall < 2000) return;
    prevCall = now;
    func(...args);
  };
};

const throttledFunc = myThrottle((params) => {
  throttle.innerHTML = ++throttleCount;
  console.log(params);
});

btn.addEventListener("click", () => {
  click.innerHTML = ++count;
  throttledFunc("abcd");
});
