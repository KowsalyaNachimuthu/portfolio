fetch("/projects")
.then(res => res.json())
.then(data => {

let output = "";

data.forEach(project => {

output += `
<div class="project">
<h3>${project.title}</h3>
<p>${project.description}</p>
</div>
`;

});

document.getElementById("project-container").innerHTML = output;

});

document.getElementById("contactForm")
.addEventListener("submit", function(e){

e.preventDefault();

document.getElementById("msg")
.innerHTML = "Message Sent Successfully!";

});