
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

// -------------------- INCLUDE OTHERS HTML FILES --------------------
// --- start --- 
fetch("/src/html/start.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("#start").innerHTML = data;
    });
// --- about_me --- 
fetch("/src/html/about_me.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("#about_me").innerHTML = data;
    });
// --- services --- 
fetch("/src/html/services.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("#services").innerHTML = data;
    });
// --- skills --- 
fetch("/src/html/skills.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("#skills").innerHTML = data;
    });
// --- portfolio --- 
fetch("/src/html/portfolio.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("#portfolio").innerHTML = data;
    });
// --- contact --- 
fetch("/src/html/contact.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("#contact").innerHTML = data;
    });
// --- footer --- 
fetch("/src/html/footer.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("footer").innerHTML = data;
    });