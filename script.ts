const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayelement = document.getElementById('resume-display') as HTMLDivElement

form.addEventListener('submit',(event:Event)=>{
    event.preventDefault();

    const name=(document.getElementById('name') as HTMLInputElement).value
    const email=(document.getElementById('email') as HTMLInputElement).value
    const phone=(document.getElementById('phone') as HTMLInputElement).value
    const education=(document.getElementById('education') as HTMLInputElement).value
    const skills=(document.getElementById('skills') as HTMLInputElement).value
    const experience=(document.getElementById('experience') as HTMLInputElement).value

    const  resumeHTML= `<h2><b>Editable Resume</b></h>
    <h3>Personal Information</h3>
    <p><b>Name</b><span contenteditable="true">${name}</span></p>
    <p><b>Email</b><span contenteditable="true">${email}</span></p>
    <p><b>phone</b><span contenteditable="true">${phone}</span></p>
    <h3>Education</h3>
    <p contenteditable="true">${education}</P>
    <h3>Experience</h3>
    <p contenteditable="true">${experience}</P>
    <h3>skills</h3>
    <p contenteditable="true">${skills}</P>
    `;
    if(resumeDisplayelement){
        resumeDisplayelement.innerHTML=resumeHTML;
    }else{
        console.error('The Resume display Element is Missing')
    }
});