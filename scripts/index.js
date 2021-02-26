const provinceSelect = document.getElementById("province-select");
const dealershipSelect = document.getElementById("dealership-select");
const form = document.querySelector(".main-form");
const counter = document.querySelector(".main-countdown");
const mql = window.matchMedia("(max-width: 770px)");

function populateSelect(select, options) {
  for (let i = 0; i < options.length; i++) {
    let opt = options[i];
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
  }
}

populateSelect(provinceSelect, Object.keys(dealerships));

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

function openForm() {
  form.style.display = "flex";
  counter.style.display = "none";
}

function closeForm() {
  form.style.display = "none";
  counter.style.display = "block";
}

// resets corresponding styles when the media query takes effect
mql.addEventListener("change", (e) => {
  if (!e.matches) {
    form.style.display = "flex";
    counter.style.display = "block";
  } else {
    form.style.display = "none";
  }
});

provinceSelect.onchange = function () {
  if (this.value == "0") dealershipSelect.disabled = true;
  else {
    dealershipSelect.disabled = false;
    dealershipSelect.innerHTML = "";
    populateSelect(dealershipSelect, dealerships[this.value]);
  }
};

// let arrayOfCities = [];

// Array.from(document.getElementById("dealership-select").children).forEach(
//   (item) => {
//     arrayOfCities.push(item.innerHTML);
//   }
// );

// console.log(arrayOfCities);
