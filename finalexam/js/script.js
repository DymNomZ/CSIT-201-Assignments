const firstnameValue = document.querySelector('#firstname');
const lastnameValue = document.querySelector('#lastname');
const birthdayValue = document.querySelector('#bday');
const genderValue = document.querySelector('#genderSmall');
const emailValue = document.querySelector('#email');
const passwordValue = document.querySelector('#password');
const confirmPasswordValue = document.querySelector('#confirmPassword');

const form = document.querySelector('#userForm');

console.log("Successfully connection between JS and HTML");

let selectedGender = '';

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
        showError(genderValue, 'Must select gender');
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

const checkEmail = () => {
    const email = emailValue.value.trim();

    if (!isRequired(email)) {
        showError(emailValue, 'Must input email');
    } else {
        showSuccess(emailValue);
        return true;
    }
    return false;
};

const checkPassword = () => {
    const password = passwordValue.value.trim();

    if (!isRequired(password)) {
        showError(passwordValue, 'Must input password');
    } else if(checkIsSame()) {
        showSuccess(passwordValue);
        return true;
    } else {
        showError(passwordValue, 'Password and Confirm Password input must be the same');
        return false;
    }
};

const checkConfirmPassword = () => {
    const confirmPassword = confirmPasswordValue.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordValue, 'Input password to confirm');
    } else if(checkIsSame()){
        showSuccess(confirmPasswordValue);
        return true;
    } else {
        showError(confirmPasswordValue, 'Password and Confirm Password input must be the same');
        return false;
    }
};

const checkIsSame = () => {
    var firstInput = document.getElementById("password").value;
    var secondInput = document.getElementById("confirmPassword").value;
    if(firstInput == secondInput){
        return true;
    } else if (passwordValue != null && confirmPasswordValue != null){
        return false;
    }
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

    var fname = document.getElementById("firstname");
    var lname = document.getElementById("lastname");
    var bday =  document.getElementById("bday");
    var gender =  document.getElementById("gender");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var confirmPass = document.getElementById("confirmPassword");

    let isFirstnameValid = checkFirstname(),
        isLastnameValid = checkLastname(),
        isBirthdayValid = checkBday(),
        isGenderValid = checkGender(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPaswordValid = checkConfirmPassword();
        

    let isFormValid = isFirstnameValid && isLastnameValid && isBirthdayValid && isGenderValid
    && isEmailValid && isPasswordValid && isConfirmPaswordValid;

    if (!isFormValid) {
        e.preventDefault();
    }
});

form.addEventListener('reset', function (e) {
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("bday").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    var elements = document.getElementsByTagName("input");

    for (var i = 0; i < elements.length; i++) {
        if (elements[i].type == "radio") {
            elements[i].checked = false;
        }
    }
});