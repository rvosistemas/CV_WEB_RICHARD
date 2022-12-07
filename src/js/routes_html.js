// -------------------- INCLUDE OTHERS HTML FILES --------------------
// --- start --- 
// fetch("../html/start.html")
fetch("/src/html/start.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("#start").innerHTML = data;
    });
// --- about_me --- 
fetch("../html/about_me.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("#about_me").innerHTML = data;
    });
// --- services --- 
fetch("../html/services.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("#services").innerHTML = data;
    });
// --- skills --- 
fetch("../html/skills.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("#skills").innerHTML = data;
    });
// --- portfolio --- 
fetch("../html/portfolio.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("#portfolio").innerHTML = data;
    });
// --- contact --- 
fetch("../html/contact.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("#contact").innerHTML = data;
    });
// --- footer --- 
fetch("../html/footer.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("footer").innerHTML = data;
    });