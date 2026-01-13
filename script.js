
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.querySelector('#theme-toggle');
  const htmlElement = document.documentElement;

  const savedTheme = localStorage.getItem('theme') || htmlElement.getAttribute('data-theme') || 'dark';

  htmlElement.setAttribute('data-theme', savedTheme);
  
  themeToggle.checked = savedTheme === 'dark';

  // Theme toggle event listener
  themeToggle.addEventListener('click', () => {
    
    const newTheme = themeToggle.checked ? 'dark' : 'light';
    htmlElement.setAttribute('data-theme', newTheme);

    localStorage.setItem('theme', newTheme);
  });

  renderProject();
});

const projects = [
{
  title : "Civilic Reporting and Resolution System",
  description : " The Civilic Reporting and Resolution System is a digital platform that enables citizens to report civic issues such as road damage, sanitation problems, and public utility failures in real time. Built using Java (Spring Boot) for the backend and React.js for the frontend, it streamlines communication between citizens and authorities, ensuring faster issue tracking, transparency, and resolution.",
  ImageUrl : "images/project2.png",
  liveUrl : "#",
  codeUrl :"https://github.com/bhaveshkhose/spring-basics"
},

{
  title : "Expense Tracking System",
  description : "This Expense Tracker Web Application helps users efficiently monitor and manage their daily expenses by categorizing transactions and providing clear financial insights. Built using Spring Boot, REST APIs, relational databases, and a modern frontend stack, it ensures secure data handling and smooth user interaction. The project solves the problem of unorganized expense tracking by offering a centralized, user-friendly platform for better financial control and decision-making.",
  ImageUrl:"images/prroject3.png",
  liveUrl : "#",
  codeUrl :"https://github.com/bhaveshkhose/x_track"
},
{
  title : "Business Management System",
  description : "Developed a Business Management System using HTML, CSS, JavaScript, Spring Boot, and MySQL to streamline core business operations such as data management, process tracking, and reporting. The system provides a secure, user-friendly interface with a robust backend to automate workflows, reduce manual effort, and improve overall efficiency and decision-making",
  ImageUrl:"images/project4.png",
  liveUrl : "#",
  codeUrl :"https://github.com/bhaveshkhose/x_track"
}
];

const projectsContainer = document.querySelector('.projects-container');

const renderProject = () => {


  let allProjectsHTML = '';

  projects .forEach(project =>{
    const projectCardHTML = `<div class="project-card">
               <img src="${project.ImageUrl}" alt="A screenshot or mockup of Project One" class="project-image">
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>
                        ${project.description}
                    </p>
                </div>
                <div class="project-links">
                    <a href="${project.liveUrl}" target="_blank">Live Demo</a>
                    <a href="${project.codeUrl}" target="_blank">View Code</a>
                </div>
            </div>
    `;

    allProjectsHTML += projectCardHTML;
  })

  
  projectsContainer.innerHTML = allProjectsHTML;
}

renderProject();


document.getElementById("contactForm").addEventListener("submit" , async(e) =>{
  e.preventDefault();

  const data = {
      name : document.getElementById("name").value,
      email : document.getElementById("email").value,
      message : document.getElementById("message").value
  };

  const response = await fetch("http://localhost:8080/api/message", {

    method:"post",
    headers :{"Content-type" : "application/json"},
    body:JSON.stringify(data)

  });

  if(response.ok){
    alert("Message sent Successfully..!");
  }else{
    alert("Something went wrong...");
  }
});
















