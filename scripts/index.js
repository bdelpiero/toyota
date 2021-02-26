// https://codepen.io/AllThingsSmitty/pen/JJavZN

(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let birthday = "Mar 11, 2021 00:00:00",
    countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      let now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));

      //do something later when date is reached
      // if (distance < 0) {

      //   clearInterval(x);
      // }
    }, 0);
})();

const form = document.querySelector(".main-form");
const counter = document.querySelector(".main-countdown");
const mql = window.matchMedia('(max-width: 770px)');

function openForm() {
  form.style.display = "flex";
  counter.style.display = "none";
}

function closeForm() {
  form.style.display = "none";
  counter.style.display = "block";
}

// resets corresponding styles when the media query takes effect
mql.addEventListener( "change", (e) => {
  if (!e.matches) {
    form.style.display = "flex";
    counter.style.display = "block";
  } else {
    form.style.display = "none";
  }
})

