console.log("reloaded");

document.addEventListener('DOMContentLoaded', function () {
    let courseForm = document.querySelector('#selection');
    let saveButton = document.querySelector('#save');
    let selectedCoursesList = document.querySelector('#courseList');
    let declareButton = document.querySelector('#declare');
    let changeButton = document.querySelector('#change');


    declareButton.addEventListener('click', function () {
        courseForm.style.display = "block";
        console.log("clicked");
    });

    saveButton.addEventListener('click', function () {
        // Get all selected courses
        let selectedCourses = courseForm.querySelectorAll('input[type="checkbox"]:checked');

        // Clear existing list items
        selectedCoursesList.innerHTML = '';

        // Create list items for selected courses
        for (let i = 0; i < selectedCourses.length; i++) {
            let course = selectedCourses[i];
            let listItem = document.createElement('li');
            listItem.textContent = course.value;
            selectedCoursesList.appendChild(listItem);
        }
        selectedCoursesList.style.display = "block";
        
        changeButton.getElementsByClassName.display = 'block';
        courseForm.getElementsByClassName.display = "none";
        console.log("saved");
    });
});
