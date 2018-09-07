function idCard(firstName, lastName, address, age, phoneNumber) {
    let firstName = document.getElementById(fname).value;
    let lastName = document.getElementById(lname).value;
    let address = document.getElementById(addr).value;
    document.getElementById(postFullName).innerHTML = firstName + " " + lastName;
    document.getElementById(postAddress).innerHTML = address;
    let age = parseInt(document.getElementById(age).value);
    let phoneNumber = parseInt(document.getElementById(tel).value);
    let numberArray;
    numberArray.push(age, phoneNumber)
    for (i = 0, i < numberArray.length, i++) {
        if (numberArray.i <= 100) {
            document.getElementById(postAge).innerHTML = "Age: " + age;
        } else if (numberArray.i > 100) {
            document.getElementById(postPhoneNumber).innerHTML = "Phone Number: " + phoneNumber;
        } else {
            alert("Something went wrong. Please check Age and Phone Number")
        };
    };
};