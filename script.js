var form = document.getElementById('resume-form');
var resumeDisplayelement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    var resumeHTML = "<h2><b>Editable Resume</b></h>\n    <h3>Personal Information</h3>\n    <p><b>Name</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>phone</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n    <h3>Education</h3>\n    <p contenteditable=\"true\">").concat(education, "</P>\n    <h3>Experience</h3>\n    <p contenteditable=\"true\">").concat(experience, "</P>\n    <h3>skills</h3>\n    <p contenteditable=\"true\">").concat(skills, "</P>\n    ");
    if (resumeDisplayelement) {
        resumeDisplayelement.innerHTML = resumeHTML;
    }
    else {
        console.error('The Resume display Element is Missing');
    }
});
