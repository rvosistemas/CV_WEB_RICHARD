function changeMode(anchor) {
    var icon = anchor.querySelector("i");
    icon.classList.toggle('fa-sun');
    icon.classList.toggle('fa-moon');

    anchor.querySelector("span").textContent = icon.classList.contains('fa-sun') ? "|| Light" : "|| Dark";

    var webBody = document.body;
    webBody.classList.toggle("light");

    var header = document.getElementsByTagName("header")[0];
    var start = document.getElementsByClassName("start")[0];
    if (anchor.querySelector("span").textContent == "|| Dark") {
        start.style.backgroundImage = "url(../img/background-start-light.jpg)";
        start.style.backgroundColor = "rgba(255,255,255,0.9)";
        header.style.backgroundColor = "rgba(255,255,255,0.9)";
        document.documentElement.style.setProperty('--secondary-color', '#000');
        document.documentElement.style.setProperty('--tertiary-color', '#f3f3f3');
    } else {
        start.style.backgroundImage = "url(../img/background-start.jpg)";
        start.style.backgroundColor = "rgba(0,0,0,0.7)";
        header.style.backgroundColor = "rgba(0,0,0,0.7)";
        document.documentElement.style.setProperty('--secondary-color', '#f3f3f3');
        document.documentElement.style.setProperty('--tertiary-color', '#000');
    }
}

