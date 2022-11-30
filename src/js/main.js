
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
    console.log("var x -->  ", x)
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

window.onscroll = function () {
    skills_effect()
}

// function that applies skill bar animation
function skills_effect() {
    var skills = document.getElementById("skills");
    var skills_distance = window.innerHeight - skills.getBoundingClientRect().top;
    if (skills_distance >= 300) {
        document.getElementById("html_css").classList.add("bar-progress_html_css");
        document.getElementById("js").classList.add("bar-progress_js");
        document.getElementById("python").classList.add("bar-progress_python");
    }
}