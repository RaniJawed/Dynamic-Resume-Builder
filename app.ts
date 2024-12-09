// Inerface for the resume data
interface ResumeData {
    name:string;
    contact:string;
    mobile:string;
    address:string;
    education:string;
    skills:string;
    experience:string;

} 

  
// Add event listener for from submission
const resumeForm= document.getElementById('resumeForm') as HTMLFormElement
resumeForm.addEventListener('submit', function (event: Event) {
    event.preventDefault()

  
    // collect data from the formm
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const mobile = (document.getElementById('mobile') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const photoInput = document.getElementById('photo') as HTMLInputElement;
    const profileImage = document.getElementById('profileImage') as HTMLInputElement;

  
//   set data in the resume output section
    (document.getElementById('resumeName') as HTMLElement).textContent = name;
    (document.getElementById('resumeContact') as HTMLElement).textContent = contact;
    (document.getElementById('resumeMobile') as HTMLElement).textContent = mobile;
    (document.getElementById('resumeAddress') as HTMLElement).textContent = address;
    (document.getElementById('resumeEducation') as HTMLElement).textContent = education;
    (document.getElementById('resumeSkills') as HTMLElement).textContent = skills;
    (document.getElementById('resumeExperience') as HTMLElement).textContent = experience;
    
    // Show image if uploaded
    if(photoInput.files && photoInput.files.length > 0){
        const reader = new FileReader();

        reader.onload = function ( e: ProgressEvent<FileReader>){
        if (e.target && e.target.result){
        profileImage.src = e.target.result as string;
       }
      };
    reader.readAsDataURL(photoInput.files[0]);
    }
  
    //  show the resume output and buttons
    (document.getElementById('resumeOutput') as HTMLElement).style.display= 'block';
    (document.getElementById('download-pdf') as HTMLElement).style.display = 'block';
    (document.getElementById('edit-resume') as HTMLElement).style.display= 'block';
  
  
    //  hide the form
    resumeForm.style.display = 'none'
   });

  
//   pdf download functionality
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;
 downloadPdfButton.addEventListener('click', function () {
    const element = document.getElementById('resumeOutput') as HTMLElement;
    const options = {
      
      margin:0.5,
      filename:'Resume.pdf',
      image: { type: 'jpeg', quality : 0.98},
  
    html2canvas: {scale :2},
    jsPDF: { unit: 'in', format : 'letter', orientation: 'portrait'},
   };
    // @ts-ignore - ignore the type issue for the html2pdf library
    html2pdf().set(options).from(element).save();
 
  });

  
//   edite button functionality
const editResumeButton= document.getElementById('edit-resume') as HTMLButtonElement;
editResumeButton. addEventListener('click', function () {
    // hide the resume outpute and buttons
     (document.getElementById('resumeOutput') as HTMLElement).style.display = 'none';
     (document.getElementById('download-pdf') as HTMLElement).style.display = 'none';
     (document.getElementById('edit-resume') as HTMLElement).style.display = 'none';
  
    // show the form again to allow editting
    resumeForm.style.display = 'block'
  })