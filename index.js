function openForm() {
    const form = document.querySelector(".main-form");
    const counter = document.querySelector(".main-countdown");
 
    form.style.display = "flex";
    counter.style.display = "none";

}

function closeForm() {
    const form = document.querySelector(".main-form");
    const counter = document.querySelector(".main-countdown");

    form.style.display = "none";
    counter.style.display = "block";

}



// function toggleVisibility(className) {
//     console.log(className)
//     const element = document.querySelector(className);
//     console.log(element)
    
//     if (element.style.display === "none") {
//         element.style.display = "block";
//     } else {
//         element.style.display = "none";
//     }
// }