const countdown_date = new Date("May 31, 2024 00:00:00").getTime();

const countdown_days = document.getElementById("days");
const countdown_hours = document.getElementById("hours");
const countdown_minutes = document.getElementById("minutes");
const countdown_seconds = document.getElementById("seconds");

let x = setInterval(function () {
    let date_today = new Date().getTime();

    let days_left = countdown_date - date_today;

    let days = Math.floor(days_left / (1000 * 60 * 60 * 24));
    let hours = Math.floor((days_left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((days_left % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((days_left % (1000 * 60)) / 1000);

    countdown_days.innerHTML = days;
    countdown_hours.innerHTML = hours;
    countdown_minutes.innerHTML = minutes;
    countdown_seconds.innerHTML = seconds;

    if (days_left < 0) {
        clearInterval(x);
        countdown_days.innerHTML = "00";
        countdown_hours.innerHTML = "00";
        countdown_minutes.innerHTML = "00";
        countdown_seconds.innerHTML = "00";
    }
}, 1000);

const initialize_slider = () => {
    const image_list = document.querySelector(".slider_wrapper .image_list");
    const slide_buttons = document.querySelectorAll(".slider_wrapper .slide_button");
    const slider_scrollbar = document.querySelector(".container .slider_scrollbar");
    const scrollbar_thumb = document.querySelector(".scrollbar_thumb");

    const max_scroll_left = image_list.scrollWidth - image_list.clientWidth;

    scrollbar_thumb.addEventListener("mousedown", (e) => {
        const start_x = e.clientX;
        const thumb_position = scrollbar_thumb.offsetLeft;
        const max_thumb_position = slider_scrollbar.getBoundingClientRect().width - scrollbar_thumb.offsetWidth;

        const handle_mouse_move = (e) => {
            const delta_x = e.clientX - start_x;
            const new_thumb_position = thumb_position + delta_x;

            const bounded_position = Math.max(0, Math.min(max_thumb_position, new_thumb_position));
            const scroll_position = (bounded_position / max_thumb_position) * max_scroll_left;

            scrollbar_thumb.style.left = `${bounded_position}px`;
            image_list.scrollLeft = scroll_position;
        }

        const handle_mouse_up = () => {
            document.removeEventListener("mousemove", handle_mouse_move);
            document.removeEventListener("mouseup", handle_mouse_up);
        }

        document.addEventListener("mousemove", handle_mouse_move);
        document.addEventListener("mouseup", handle_mouse_up);
    });

    slide_buttons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev_button" ? -1 : 1;
            const scroll_amount = image_list.clientWidth * direction;
            image_list.scrollBy({ left: scroll_amount, behavior: "smooth" });
        })
    });

    const handle_slide_buttons = () => {
        slide_buttons[0].style.display = image_list.scrollLeft <= 0 ? "none" : "flex";
        slide_buttons[1].style.display = image_list.scrollLeft >= max_scroll_left ? "none" : "flex";
    }

    const update_scroll_thumb_position = () => {
        const scroll_position = image_list.scrollLeft;
        const thumb_position = (scroll_position / max_scroll_left) * (slider_scrollbar.clientWidth - scrollbar_thumb.offsetWidth);
        scrollbar_thumb.style.left = `${thumb_position}px`;
    }

    image_list.addEventListener("scroll", () => {
        update_scroll_thumb_position();
        handle_slide_buttons();
    })

}

window.addEventListener("resize", initialize_slider);
window.addEventListener("load", initialize_slider);

const firstnameValue = document.querySelector('#firstname');
const lastnameValue = document.querySelector('#lastname');
const emailValue = document.querySelector('#email');
const detailsValue = document.querySelector('#details');

const form = document.querySelector('#userForm');

function submitForm(event) {
    console.log("wow");
}

function resetForm(event) {
    document.getElementById("firstname").value = '';
    document.getElementById("lastname").value = '';
    document.getElementById("email").value = '';
    document.getElementById("details").value = '';
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

const checkDetails = () => {
    const detail = detailsValue.value.trim();

    if (!isRequired(detail)) {
        showError(detailsValue, 'Must input inquiry');
    } else {
        showSuccess(detailsValue);
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
        isEmailValid = checkEmail(),
        isDetailValid = checkDetails();
        

    let isFormValid = isFirstnameValid && isLastnameValid && isEmailValid && isDetailValid;

    if (isFormValid) {
        alert("“Your message has been submitted or emailed. Thank you!”");
        resetForm();
    }
});

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('submitButton').addEventListener('click', submitForm);
    document.getElementById('cancelButton').addEventListener('click', resetForm);
});
document.querySelectorAll('.image_list img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
});
document.querySelector('.popup-image span').addEventListener('click', () => {
    document.querySelector('.popup-image').style.display = 'none';
});

console.log("script.js has successfully connected to index.html");