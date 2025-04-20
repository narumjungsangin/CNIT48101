{
    "101": {
      "name": "Alice Johnson",
      "age": 28
    },
    "102": {
      "name": "Bob Smith",
      "age": 34
    }
  }

  // Function to fetch user profile asynchronously using XMLHttpRequest
function fetchUserProfile(userId, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'user_profile.json', true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            const profiles = JSON.parse(xhr.responseText);
            const userProfile = profiles[userId];
            if (userProfile) {
                callback(null, userProfile);
            } else {
                callback(new Error("User profile not found."));
            }
        } else {
            callback(new Error("Error loading user profiles."));
        }
    };

    xhr.onerror = function() {
        callback(new Error("Network request failed."));
    };

    xhr.send();
}

// Simulated asynchronous fetching of user activities
function fetchUserActivities(userId, callback) {
    setTimeout(() => {
        const activities = ["running", "reading", "coding"];
        callback(null, activities);
    }, 1500);
}

// Main function coordinating the asynchronous operations
function displayUserInformation(userId) {
    fetchUserProfile(userId, (err, profile) => {
        if (err) {
            console.error(err);
            return;
        }

        fetchUserActivities(userId, (err, activities) => {
            if (err) {
                console.error(err);
                return;
            }

            const outputElement = document.getElementById("userInfo");
            outputElement.innerHTML = `
                <h3>User Information:</h3>
                <p><strong>Name:</strong> ${profile.name}</p>
                <p><strong>Age:</strong> ${profile.age}</p>
                <p><strong>Activities:</strong> ${activities.join(", ")}</p>
            `;
        });
    });
}

// Initiate asynchronous process
displayUserInformation("101");

