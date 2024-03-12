const btn = document.querySelector("#increase");
const click = document.querySelector("#clickCount");
const debounce = document.querySelector("#debouce");
let count = 0;
let debounceCOunt = 0;

const myDebounce = (func) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, 2000);
  };
};

const debouncedFunc = myDebounce((params) => {
  debounce.innerHTML = ++debounceCOunt;
  console.log(params);
});

btn.addEventListener("click", () => {
  click.innerHTML = ++count;
  debouncedFunc("abcd");
});
