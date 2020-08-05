function store() {
    var name = document.getElementById('name').value;
    // sessionStorage.setItem('name',name);
    var gender = document.getElementById('gender').value;
    var hobbies = document.getElementById('hobbies').value;
    var dob = (document.getElementById('Dob').value);
    var member_age = getAge(dob)
    function getAge() {
        var today = new Date();
        var birthDate = new Date(dob);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    if (member_age < 17) {
        alert("Warning!!! Member must be 17 or above");
        return;
    }
    
    var address = document.getElementById('address').value;
    var email = document.getElementById('email').value;
    var phone = parseInt(document.getElementById('phone').value);
    
    if (isNaN(phone)) {
        alert("Warning!!! Phone must be digits only");
        return
    }

    var city = document.getElementById('select_city').value;
    var comment = document.getElementById('comment_box').value;

    alert("Member information" + '\n' +
            "------------------" + '\n' +
            "Name: " + name + '\n' +
            "Gender: " + gender + '\n' +
            "Hobbies: " + hobbies + '\n' +
            "Birthday: " + dob + '\n' +
            "Address: " + address + '\n' +
            "Email: " + email + '\n' +
            "Phone: " + phone + '\n' +
            "City: " + city + '\n' +
            "Comment: " + comment + '\n'
        );
}