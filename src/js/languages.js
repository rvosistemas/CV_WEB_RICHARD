// -------------------- CHOOSE LANGUAGES --------------------

const language = async (id, texts_to_change) => {
    var request_json = await fetch('./src/languages/en.json');
    document.querySelector('html').setAttribute('lang', 'en');
    if (id) {
        request_json = await fetch('./src/languages/es.json');
        document.querySelector('html').setAttribute('lang', 'es');
    }
    const texts = await request_json.json();
    for (const text_to_change of texts_to_change) {
        const section = text_to_change.dataset.section;
        const value = text_to_change.dataset.value;
        text_to_change.innerHTML = texts[section][value];
    }
    // elements of contact form
    var full_name = document.getElementById("full_name");
    var email = document.getElementById("email");
    var topic = document.getElementById("topic");
    var message = document.getElementById("message");

    const elements = [full_name, email, topic, message];
    for (const element of elements) { validations(element) }
};

async function change_language() {
    var check = document.getElementById("check");
    const texts_to_change = document.querySelectorAll("[data-section]");
    let id = check.checked;
    check.addEventListener("click", await language(id, texts_to_change));
}

function validations(ele) {
    lang = document.querySelector('html').lang;
    ele.addEventListener('change', function (evt) {
        this.setCustomValidity('');
    });

    ele.addEventListener('invalid', function (evt) {
        // Required
        if (this.validity.valueMissing && lang === 'es') {
            this.setCustomValidity('Por favor rellene este campo.');
        }
        if (this.validity.valueMissing && lang === 'en') {
            this.setCustomValidity('Please fill out this field.');
        }
        if (ele.name === "email" && this.validity.patternMismatch && lang === 'es') {
            this.setCustomValidity('Por favor, haga coincidir el formato del correo.');
        }
        if (ele.name === "email" && this.validity.patternMismatch && lang === 'en') {
            this.setCustomValidity('Please match the request format.');
        }
    });
}


