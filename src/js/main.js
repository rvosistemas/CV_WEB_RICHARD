
// -------------------- MAIN FUNCTIONS --------------------
// function that applies the style to the selected option in the menu and removes the previously selected one
function select(link) {
    var option = document.querySelectorAll("#links a");
    for (var i = 0; i < 5; i++) {
        option[i].className = "";
    }
    link.className = "selected";
    // we make the menu disappear once an option has been selected in responsive mode
    var x = document.getElementById("nav");
    x.className = "";
}

// function that shows responsive menu
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

// send message
function send_message() {
    const form = document.querySelector('#form');
    form.addEventListener('submit', handleSubmit);
}

function handleSubmit(event) {
    const buttonMailTo = document.querySelector('#rvo_email');
    event.preventDefault();
    const form = new FormData(this);
    buttonMailTo.setAttribute('href', `mailto:rvosistemas@outlook.com?subject=nombre: ${form.get('full_name')} email: ${form.get('email')}&body=${form.get('message')}`);
    buttonMailTo.click();
}