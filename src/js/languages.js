// -------------------- CHOOSE LANGUAGES --------------------

const language = async (id, texts_to_change) => {
    var request_json = await fetch('/src/languages/en.json');
    if (id) {
        request_json = await fetch('/src/languages/es.json');
    }
    const texts = await request_json.json();
    for (const text_to_change of texts_to_change) {
        const section = text_to_change.dataset.section;
        const value = text_to_change.dataset.value;
        text_to_change.innerHTML = texts[section][value];
    }
};

async function change_language() {
    console.log("change_language 2");
    var check = document.getElementById("check");
    const texts_to_change = document.querySelectorAll("[data-section]");
    let id = check.checked;
    check.addEventListener("click", await language(id, texts_to_change));
}
