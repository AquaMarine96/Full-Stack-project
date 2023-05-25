document.addEventListener('DOMContentLoaded', function () {
    let courseForm = document.querySelector('#selection');
    let saveButton = document.querySelector('#save');
    let selectedCoursesList = document.querySelector('#courseList');
    let declareButton = document.querySelector('#declare');

    declareButton.addEventListener('click', function () {
        courseForm.getElementsByClassName.display = "block";
        console.log("clicked");
    });

    saveButton.addEventListener('click', function () {
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

        let changeButton = document.querySelector('#change');
        changeButton.getElementsByClassName.display = 'block';
        courseForm.getElementsByClassName.display = "none";
    });
});
