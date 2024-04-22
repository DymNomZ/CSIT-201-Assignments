const firstnameValue = document.querySelector('#firstname');
const lastnameValue = document.querySelector('#lastname');
const birthdayValue = document.querySelector('#bday');
const genderValue = document.querySelector('#gender');

const form = document.querySelector('#userForm');

console.log("Successfully connection between JS and HTML");

let selectedGender = '';

function submitForm(event) {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var bday = document.getElementById("bday").value;

    if (selectedGender != '') {
        addRowToTable(firstname, lastname, bday, selectedGender);
    } 
}

function resetForm(event) {
    document.getElementById("firstname").value = '';
    document.getElementById("lastname").value = '';
    document.getElementById("bday").value = '';
}

function addRowToTable(first, last, bday, gender) {
    var table = document.getElementById("userTable").getElementsByTagName('tbody')[0];

    var row = table.insertRow(0);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = first;
    cell2.innerHTML = last;
    cell3.innerHTML = bday;
    cell4.innerHTML = gender;
  }

const isRequired = value => value === '' ? false : true;

const checkFirstname = () => {
    const firstname = firstnameValue.value.trim();

    if (!isRequired(firstname)) {
        showError(firstnameValue, 'Must input first name');
    } else {
        showSuccess(firstnameValue);
        return true;
    }
    return false;
};

const checkLastname = () => {
    const lastname = lastnameValue.value.trim();

    if (!isRequired(lastname)) {
        showError(lastnameValue, 'Must input last name');
    } else {
        showSuccess(lastnameValue);
        return true;
    }
    return false;
};

const checkBday = () => {
    const birthday = birthdayValue.value.trim();

    if (!isRequired(birthday)) {
        showError(birthdayValue, 'Must input birthday');
    } else {
        showSuccess(birthdayValue);
        return true;
    }
    return false;
};

const checkGender = () => {
    if (!document.getElementById("male").checked && !document.getElementById("female").checked
    && !document.getElementById("other").checked && !document.getElementById("preferNot").checked) {
        alert("Please specify gender");
    } else {
        showSuccess(genderValue);
        if (document.getElementById("male").checked) {
            selectedGender = 'Male';
        }else if (document.getElementById("female").checked) {
            selectedGender = 'Female';
        }else if (document.getElementById("other").checked) {
            selectedGender = 'Other';
        }else {
            selectedGender = 'Prefer not to say'
        }
        return true;
    }
    return false;
}

const showError = (input, message) => {
    const formField = input.parentElement;

    formField.classList.remove('success');
    formField.classList.add('error');

    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    const formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add('success');

    const error = formField.querySelector('small');
    error.textContent = '';
}


form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isFirstnameValid = checkFirstname(),
        isLastnameValid = checkLastname(),
        isBirthdayValid = checkBday(),
        isGenderValid = checkGender();
        

    let isFormValid = isFirstnameValid && isLastnameValid && isBirthdayValid && isGenderValid;

    if (isFormValid) {

    }
});