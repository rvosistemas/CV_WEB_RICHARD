
// función que me aplica el estilo a la opción seleccionada en el menu y quita la previamente seleccionada
function select(link) {
    var option = document.querySelectorAll("#links a");
    for (var i = 0; i < 5; i++) {
        option[i].className = "";
    }
    link.className = "selected";
    // hacemos desaparecer el menu una vez que se ha seleccionado una opción en el modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

// función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

window.onscroll = function () {
    skills_effect()
}

// función que aplica la animación de la barra de habilidades
function skills_effect() {
    var skills = document.getElementById("skills");
    var skills_distance = window.innerHeight - skills.getBoundingClientRect().top;
    if (skills_distance >= 300) {
        document.getElementById("html_css").classList.add("bar-progress_html_css");
        document.getElementById("js").classList.add("bar-progress_js");
        document.getElementById("python").classList.add("bar-progress_python");
    }
}

// -------------------- INCLUDE OTHERS HTML FILES --------------------
fetch("/src/html/start.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("#start").innerHTML = data;
    });

fetch("/src/html/about_me.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("#about_me").innerHTML = data;
    });

fetch("/src/html/services.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("#services").innerHTML = data;
    });

fetch("/src/html/skills.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("#skills").innerHTML = data;
    });

fetch("/src/html/portfolio.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("#portfolio").innerHTML = data;
    });

fetch("/src/html/contact.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("#contact").innerHTML = data;
    });
fetch("/src/html/footer.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("footer").innerHTML = data;
    });