var skillTemplate = `
<div class="skill">
    <div class="info">
        <p><span class="list"></span>{name}</p>
        <span class="percentage">{percentage}</span>
    </div>
    <div class="bar">
        <div class="{progress_bar}"></div>
    </div>
</div>
`;

function renderSkills() {
    var container = document.querySelector(".skills-container");
    container.innerHTML = "";

    skillDataCsv = "/src/data/skills.csv";

    Papa.parse(skillDataCsv, {
        download: true,
        header: true,
        complete: function (results) {
            var jsonData = results.data;
            var rowsData = chunkArray(jsonData, 3);

            rowsData.forEach(function (rowSkills) {
                var row = createRow(container);
                renderRowSkills(row, rowSkills);
            });
        },
        error: function (error) {
            lang = document.querySelector('html').lang;
            message = lang === 'es' ? "Error al cargar las habilidades desde archivo CSV:" : "Error loading skills from CSV file:";
            console.log(message, error);
        },
    });
}

function chunkArray(arr, size) {
    var chunks = [];
    for (var i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}

function createRow(container) {
    var row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    return row;
}

function renderRowSkills(row, skills) {
    skills.forEach(function (skill) {
        skill.name = skill.name.replace(";", "");
        skill.percentage = skill.percentage.replace(";", "");
        skill.progress_bar = skill.progress_bar.replace(";", "");
        var skillHTML = skillTemplate
            .replace("{name}", skill.name)
            .replace("{percentage}", skill.percentage)
            .replace("{progress_bar}", skill.progress_bar);
        row.insertAdjacentHTML("beforeend", skillHTML);
    });
}
