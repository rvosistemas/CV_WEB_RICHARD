// -------------------- INCLUDE OTHERS HTML FILES --------------------
// --- start --- 
fetch("./src/html/start.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("#start").innerHTML = data;
    });
// --- about_me --- 
fetch("./src/html/about_me.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("#about_me").innerHTML = data;
    });
// --- services --- 
fetch("./src/html/services.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("#services").innerHTML = data;
        renderServices();
    });
// --- skills --- 
fetch("./src/html/skills.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("#skills").innerHTML = data;
        renderSkills();
    });
// --- portfolio --- 
fetch("./src/html/portfolio.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("#portfolio").innerHTML = data;
    });
// --- contact --- 
fetch("./src/html/contact.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("#contact").innerHTML = data;
    });
// --- footer --- 
fetch("./src/html/footer.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("footer").innerHTML = data;
    });