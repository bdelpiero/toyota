const provinceSelect = document.getElementById("province-select");
const citySelect = document.getElementById("city-select");
const dealershipSelect = document.getElementById("dealership-select");
const form = document.querySelector(".main-form");
const counter = document.querySelector(".main-countdown");
const mql = window.matchMedia("(max-width: 770px)");

function populateSelect(select, options) {
  // we need to add an extra first element to each select
  // we could factor this out to a separate function?
  let firstElement = "";
  if (select.id == "province-select") firstElement = "Provincia";
  if (select.id == "city-select") firstElement = "Ciudad";
  if (select.id == "dealership-select") firstElement = "Concesionaria";

  for (let i = 0; i < options.length + 1; i++) {
    const el = document.createElement("option");

    if (i != 0) {
      const opt = options[i - 1];
      el.textContent = opt;
      el.value = opt;
    } else {
      el.textContent = firstElement;
      el.value = "0";
      el.disabled = true;
      el.selected = true;
    }

    select.appendChild(el);
  }
}

// with data.js
// populateSelect(provinceSelect, Object.keys(dealerships));

// with newData.js
populateSelect(provinceSelect, Object.keys(toyotaDealershipsInfo));

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
  if (this.value == "0") {
    // with data.js
    // dealershipSelect.disabled = true;

    // with newData.js
    citySelect.disabled = true;
    dealershipSelect.disabled = true;
  } else {
    // with data.js
    // dealershipSelect.disabled = false;
    // dealershipSelect.innerHTML = "";
    // populateSelect(dealershipSelect, dealerships[this.value]);

    // with newData.js
    citySelect.disabled = false;
    dealershipSelect.disabled = true;
    citySelect.innerHTML = "";
    populateSelect(citySelect, Object.keys(toyotaDealershipsInfo[this.value]));
  }
};

// with newData.js
citySelect.onchange = function () {
  if (this.value == "0") {
    // with data.js
    dealershipSelect.disabled = true;
  } else {
    // with data.js
    dealershipSelect.disabled = false;
    dealershipSelect.innerHTML = "";
    populateSelect(
      dealershipSelect,
      toyotaDealershipsInfo[provinceSelect.value][this.value]
    );
  }
};
