const studyGroupData = {
    "studyGroups": [
      {
        "id": 1,
        "major": "Computer Science",
        "courses": ["Introduction to Programming", "Data Structures"],
        "studyTimes": ["Wednesday 3pm-5pm", "Friday 2pm-4pm"],
        "groupSize": 4
      },
      {
        "id": 2,
        "major": "Computer Information Technology",
        "courses": ["Introduction to Programming", "Data Structures"],
        "studyTimes": ["Wednesday 3pm-5pm", "Friday 2pm-4pm"],
        "groupSize": 5
      }
      // Other groups as above...
    ]
  };


document.getElementById('preferencesForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stops the default form submission behavior

    const major = document.getElementById('major').value;
    const courses = document.getElementById('courses').value;
    const studyTimes = document.getElementById('studyTimes').value;
    const groupSize = document.getElementById('groupSize').value;
// Repeat for other form fields

});

// find all the study groups that match the selected fields by the user
// here is an example to select by major, please include other fields in your submission
const matchingGroups = studyGroupData.studyGroups.filter(group =>
  (!major || group.major === major) &&
  (!course || group.courses === courses) &&
  (!studyTimes || group.studyTimes === studyTimes) &&
  (!groupSize || group.groupSize === groupSize)
);

// Create the resultsSection as a div element
const resultsSection =  document.createElement('div');// complete the statement here
// Assign an ID to the div for future reference
resultsSection.id = 'resultsSection'; // Assign an ID to the div for future reference


// Create the resultsList as an unordered list (ul) element
const resultsList = document.createElement('ul');// complete the statement here
resultsList.id = 'resultsList'; // Assign an ID to the ul for future reference

// Append the resultsList (ul) to the resultsSection (div)
resultsSection.appendChild(resultsList);

// Append the resultsSection (div) to the body of the document or a specific container
// your code here...

// add a button next to each study group for the user to join
const joinButton = document.createElement('button');
joinButton.textContent = 'Join Group';
joinButton.addEventListener('click', function() {
    alert('Joined the group!');
});


function addResultItem(group) {
    const item = document.createElement('div');
    // Add a class for styling
    item.classList.add('resultItem'); 
    
    item.innerHTML = `
    <h3>${group.major} Study Group</h3>
    <p>Courses: ${group.courses.join(", ")}</p>
    <p>Study Times: ${group.studyTimes.join(", ")}</p>
    <p>Group Size: ${group.groupSize}</p>
  `;

    // add the Join button and append the button to the corresponding result section
    // add button logic goes here...
    item.appendChild(joinButton);
    resultsList.appendChild(item);
  }

  function handleFormData() {
    const major = document.getElementById('major').value;
    if (!major) {
        alert('Please select a major.');
        return; // Exit the function if the major is not selected
    }

    if (!courses) {
        alert('Please select a course.');
        return; // Exit the function if the major is not selected
    }
    if (!groupSize) {
        alert('Please select a course.');
        return; // Exit the function if the major is not selected
    }
    if (!courses) {
        alert('Please select a course.');
        return; // Exit the function if the major is not selected
    }
    // Continue with form data handling
}
