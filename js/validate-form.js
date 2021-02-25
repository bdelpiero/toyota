$(function() {
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
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      areacode: "required",
      phonenumber: "required",
      province: "required",
      city: "required",
      dealership: "required",
    },
    // Specify validation error messages
    messages: {
      firstname: "Campo requerido",
      lastname: "Campo requerido",
    //   password: {
    //     required: "Please provide a password",
    //     minlength: "Your password must be at least 5 characters long"
    //   },
      email: "Campo requerido",
      areacode: "Campo requerido",
      phonenumber: "Campo requerido",
      province: "Campo requerido",
      city: "Campo requerido",
      dealership: "Campo requerido",
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});