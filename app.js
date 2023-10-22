// Add an event listener to the form for submission

document.getElementById('itineraryForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Get the form elements by their IDs
    var location = document.getElementById('location').value;
    var date = document.getElementById('date').value;
    var startTime = document.getElementById('startTime').value;
    var endTime = document.getElementById('endTime').value;
    let budget = document.getElementById('parameter').options[document.getElementById('parameter').selectedIndex].text 


    // Create an array to store the preferences
    var preferences = [];

    // Check if each checkbox is checked and add to the preferences array
    if (document.getElementById('restaurants').checked) {
        preferences.push('Restaurants');
    }
    if (document.getElementById('beaches').checked) {
        preferences.push('Beaches');
    }
    if (document.getElementById('museums').checked) {
        preferences.push('Museums');
    }
    if (document.getElementById('entertainment').checked) {
        preferences.push('Entertainment');
    }
    if (document.getElementById('parks').checked) {
        preferences.push('Parks');
    }

    // Create the formData object
    var formData = {
        location: location,
        date: date,
        startTime: startTime,
        endTime: endTime,
        budget: budget,
        preferences: preferences
    };

    // Log the formData object to the console
    console.log(formData);
});
