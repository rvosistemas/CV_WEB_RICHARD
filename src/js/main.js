
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

function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

// TODO: REVISAR Y QUITAR COMENTARIOS Y PONER LOS MENSAJES EN INGLES Y LUEGO TRADUCIRLOS

function sendEmail() {
    var recipient = "rvosistemas@outlook.com";
    var subject = "Formulario de contacto";

    var fullName = document.getElementById("full_name").value;
    var email = document.getElementById("email").value;
    var topic = document.getElementById("topic").value;
    var message = document.getElementById("message").value;

    // Validar los campos requeridos
    if (!fullName || !email || !topic || !message) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<div style="font-weight: bold; color: red">Please fill in all required fields.</div>'
        })
        return;
    }

    var body = "Name: " + fullName + "\n" +
        "Email: " + email + "\n" +
        "Topic: " + topic + "\n" +
        "Message: " + message;

    var mailtoLink = "mailto:" + recipient + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    window.open(mailtoLink);
}