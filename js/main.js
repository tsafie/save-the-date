// FORM VALIDATION

// Prevent default + Make sure all fields are filled

const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const feedback = document.getElementById("feedback");
const plusone = document.getElementsByName("plusone");
const attendance = document.getElementsByName("attendance");


form.addEventListener("submit", validateForm);


function validateForm(event) {
    event.preventDefault();

    let name = nameInput.value; 
    let nameValid = name.length >= 1;
    let email = emailInput.value;
    let emailValid = email.length >= 1;

    const attendanceChecked = attendance[0].checked || attendance[1].checked;
    const plusOneChecked = plusone[0].checked || plusone[1].checked;
  
    if(nameValid && emailValid && attendanceChecked && plusOneChecked) {
        feedback.innerText = "Thank you!"
    } else {
        feedback.innerText = "Please fill all the fields!"
    }
     

}















