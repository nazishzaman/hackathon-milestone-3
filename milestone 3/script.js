// Get refrences to tha form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume display');
// Handle form submission
form.addEventListener('submit', function (Event) {
    Event.preventDefault(); //prevent page reload
    // Collect input values 
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experiance = document.getElementById('experiance').value;
    var skills = document.getElementById('skills').value;
    var resumeHTMl = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Email:</b>").concat(email, "</p>\n    <p><b>phone:</b>").concat(phone, "</p>\n    \n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n     <h3>Experiance</h3>\n    <p>").concat(experiance, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n\n\n");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTMl;
    }
    else {
        console.error("The resume display element is missing.");
    }
});
