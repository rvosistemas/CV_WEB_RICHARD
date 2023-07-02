
// TODO: minificar todo el proyecto o empaquetarlo
// -------------------- MAIN FUNCTIONS --------------------

// --------------MENU RESPONSIVE--------------------

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

// --------------DOWNLOAD CV--------------------


function downloadPDF() {
    var lang = document.querySelector('html').lang;

    var pathPDF = lang === "es" ? "/src/data/CV-ES.pdf" : "/src/data/CV-EN.pdf"

    var link = document.createElement("a");
    link.href = pathPDF;
    link.setAttribute("download", "");
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}



// --------------SEND EMAIL--------------------


function alertEmail(fields) {
    if (!fields.fullName || !fields.email || !fields.topic || !fields.message) {
        var lang = document.querySelector('html').lang;
        var langMessages = {
            es: {
                error: "¡Algo salió mal!",
                footer: "Por favor, rellene todos los campos obligatorios."
            },
            en: {
                error: "Something went wrong!",
                footer: "Please fill in all required fields."
            }
        };
        var langText = langMessages[lang].error;
        var langFooter = langMessages[lang].footer;

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: langText,
            footer: `<div style="font-weight: bold; color: red">${langFooter}.</div>`
        });
        return true;
    }
}

function sendEmail() {
    var recipient = "rvosistemas@outlook.com";
    var subject = "Formulario de contacto";

    var fields = {
        fullName: document.getElementById("full_name").value,
        email: document.getElementById("email").value,
        topic: document.getElementById("topic").value,
        message: document.getElementById("message").value
    };

    if (alertEmail(fields)) return;

    var body = Object.entries(fields).map(function (entry) {
        return entry[0] + ": " + entry[1];
    }).join("\n");

    var mailtoLink = "mailto:" + recipient + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    window.open(mailtoLink);
}