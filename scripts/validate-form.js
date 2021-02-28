// Open success modal
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

$(function () {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='registration']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      firstname: "required",
      lastname: "required",
      email: {
        required: true,
        email: true,
      },
      areacode: {
        required: true,
        number: true,
      },
      phonenumber: {
        required: true,
        number: true,
      },
      province: "required",
      city: "required",
      dealership: "required",
      privacy_policy: "required",
    },
    // Specify validation error messages
    messages: {
      firstname: "Campo requerido",
      lastname: "Campo requerido",
      email: "Campo requerido",
      areacode: {
        required: "Campo requerido",
        number: "Num inválido",
      },
      phonenumber: {
        required: "Campo requerido",
        number: "Num. inválido",
      },
      province: "Campo requerido",
      city: "Campo requerido",
      dealership: "Campo requerido",
      privacy_policy: "",
    },

    submitHandler: function (form) {
      // Show success modal
      modal.style.display = "block";

      // const form = document.querySelector("form");
      const submitResponse = document.querySelector("#response");
      const formURL = "http://localhost:3000"; // ENTER YOUR API ENDPOINT HERE

      // Capture the form data
      let data = {};
      Array.from(form).map((input) => (data[input.id] = input.value));
      console.log("Sending: ", JSON.stringify(data));

      // Create the AJAX request
      var xhr = new XMLHttpRequest();
      xhr.open(form.method, formURL, true);
      xhr.setRequestHeader("Accept", "application/json; charset=utf-8");
      xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

      // Send the collected data as JSON
      xhr.send(JSON.stringify(data));

      xhr.onloadend = (response) => {
        if (response.target.status === 200) {
          form.reset();
          // submitResponse.innerHTML = "Form submitted. Success!";
        } else {
          submitResponse.innerHTML = "Error! Please try again.";
          console.error(JSON.parse(response.target.response).message);
        }
      };
      return false;
    },
  });
});

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
