
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