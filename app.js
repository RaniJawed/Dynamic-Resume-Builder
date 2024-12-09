// Add event listener for from submission
var resumeForm = document.getElementById('resumeForm');
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // collect data from the formm
    var name = document.getElementById('name').value;
    var contact = document.getElementById('contact').value;
    var mobile = document.getElementById('mobile').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    var photoInput = document.getElementById('photo');
    var profileImage = document.getElementById('profileImage');
    //   set data in the resume output section
    document.getElementById('resumeName').textContent = name;
    document.getElementById('resumeContact').textContent = contact;
    document.getElementById('resumeMobile').textContent = mobile;
    document.getElementById('resumeAddress').textContent = address;
    document.getElementById('resumeEducation').textContent = education;
    document.getElementById('resumeSkills').textContent = skills;
    document.getElementById('resumeExperience').textContent = experience;
    // Show image if uploaded
    if (photoInput.files && photoInput.files.length > 0) {
        var reader = new FileReader();
        reader.onload = function (e) {
            if (e.target && e.target.result) {
                profileImage.src = e.target.result;
            }
        };
        reader.readAsDataURL(photoInput.files[0]);
    }
    //  show the resume output and buttons
    document.getElementById('resumeOutput').style.display = 'block';
    document.getElementById('download-pdf').style.display = 'block';
    document.getElementById('edit-resume').style.display = 'block';
    //  hide the form
    resumeForm.style.display = 'none';
});
//   pdf download functionality
var downloadPdfButton = document.getElementById('download-pdf');
downloadPdfButton.addEventListener('click', function () {
    var element = document.getElementById('resumeOutput');
    var options = {
        margin: 0.5,
        filename: 'Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };
    // @ts-ignore - ignore the type issue for the html2pdf library
    html2pdf().set(options).from(element).save();
});
//   edite button functionality
var editResumeButton = document.getElementById('edit-resume');
editResumeButton.addEventListener('click', function () {
    // hide the resume outpute and buttons
    document.getElementById('resumeOutput').style.display = 'none';
    document.getElementById('download-pdf').style.display = 'none';
    document.getElementById('edit-resume').style.display = 'none';
    // show the form again to allow editting
    resumeForm.style.display = 'block';
});
