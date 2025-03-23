document.getElementById('studentForm').onsubmit = function(event) {
    event.preventDefault();
    if (validateForm()) {
        displayInformation();
    }
};

function validateForm() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var university = document.getElementById('university').value;
    var subject = document.getElementById('subject').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var dob = document.getElementById('dob').value;
    var hobbies = document.getElementById('hobbies').value;

 
    if(name === ""){
        alert("Name fields are required!");
        return false;
    }
    if(age === ""){
        alert("Age fields are required!");
        return false; 
    }
    if(email === ""){
        alert("Email fields are required!");
        return false; 
    }

    if(phone === ""){
        alert("Phone fields are required!");
        return false; 
    }

    if(address === ""){
        alert("Address fields are required!");
        return false; 
    }
    if(university === ""){
        alert("University fields are required!");
        return false; 
    }

    if(subject === ""){
        alert("Subject fields are required!");
        return false; 
    }

   
    if( !gender){
        alert("Gender fields are required!");
        return false; 
    }
    if(dob === ""){
        alert("Date of Birth fields are required!");
        return false; 
    }
    if(hobbies === ""){
        alert("Hobbies fields are required!");
        return false; 
    }


    // Email validation using regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').style.display = 'inline';
        return false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    return true;
}

function displayInformation() {
    document.getElementById('formScreen').style.display = 'none';
    document.getElementById('infoScreen').style.display = 'block';

    var table = document.getElementById('infoTable');
    var data = {
        "Full Name": document.getElementById('name').value,
        "Age": document.getElementById('age').value,
        "Email": document.getElementById('email').value,
        "Phone Number": document.getElementById('phone').value,
        "Address": document.getElementById('address').value,
        "University Name": document.getElementById('university').value,
        "Subject Name": document.getElementById('subject').value,
        "Gender": document.querySelector('input[name="gender"]:checked').value,
        "Date of Birth": document.getElementById('dob').value,
        "Hobbies": document.getElementById('hobbies').value
    };

    for (var key in data) {
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.textContent = key;
        cell2.textContent = data[key];
    }
}

function goBack() {
    document.getElementById('infoScreen').style.display = 'none';
    document.getElementById('formScreen').style.display = 'block';
    document.getElementById('infoTable').innerHTML = "<tr><th>Field</th><th>Information</th></tr>";
    document.getElementById('studentForm').reset();
}