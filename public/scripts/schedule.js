console.log("lol");


let saveButton = document.querySelector('#save');

let declareButton = document.querySelector('#declare');
let changeButton = document.querySelector('#change');

declareButton.addEventListener('click', function () {
    form.style.display = "block";
    console.log("clicked");
});
    

// Get all selected courses
const form = document.getElementById('selection');
const lista = document.querySelector("#courseList");
const coursesDiv = document.querySelector(".selectedCourses");

// Function to handle checkbox changes
function handleCheckboxChange(event) {
  if (event.target.checked) {
    // Create a new <li> element with the course content
    const li = document.createElement('li');
    li.textContent = event.target.nextSibling.textContent;
    
    // Add the <li> element to the <ul> element
    lista.appendChild(li);

  }else{
    lista.removeChild(lista.lastChild);
  }
}

// Add event listeners to the checkboxes
const checkboxes = form.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', handleCheckboxChange);
});

// Create list items for selected courses

saveButton.addEventListener('click', function (event) {
    form.style.display = "none";
    console.log("saved");
    changeButton.style.display = "block";
    declareButton.style.display = "none";
    event.preventDefault();
    coursesDiv.style.display = "block";
});

changeButton.addEventListener('click', function () {
    form.style.display = "block";
    console.log("changed");
    changeButton.style.display = "none";
    lista.style.display = "none";
});

if(isEmpty("#courseList")){
    coursesDiv.style.display = "none";
    declareButton.style.display = "block";
    changeButton.style.display = "none";    
}

function isEmpty(id) {
    return document.getElementById(id).innerHTML.trim() == ""
  }
