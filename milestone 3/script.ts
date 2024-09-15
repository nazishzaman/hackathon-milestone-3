// Get refrences to tha form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume display') as HTMLDivElement;

// Handle form submission
form.addEventListener('submit' , (Event: Event) => {
    Event.preventDefault(); //prevent page reload

    // Collect input values 
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experiance = (document.getElementById('experiance') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value
  
    const resumeHTMl = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${name}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>phone:</b>${phone}</p>
    
    <h3>Education</h3>
    <p>${education}</p>

     <h3>Experiance</h3>
    <p>${experiance}</p>

    <h3>Skills</h3>
    <p>${skills}</p>


`; 

if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHTMl;
}else {
    console.error(`The resume display element is missing.`);
}
    
})