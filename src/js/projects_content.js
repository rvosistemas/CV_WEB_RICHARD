var projectTemplate = `
    <div class="project">
        <div class="overlay"></div>
        <a>
            <img src="{image_path}" alt="">
        </a>
        <div class="info">
            <h4>{name}</h4>
            <p>{description}</p>
        </div>
    </div>
`;

window.addEventListener('resize', function () {
    renderProjects()
});

function renderProjects() {
    var container = document.querySelector("#projects-container");
    container.innerHTML = "";

    var check = document.getElementById("check");
    projectDataCsv = check.checked ? "/src/data/projects-es.csv" : "/src/data/projects-en.csv"

    Papa.parse(projectDataCsv, {
        download: true,
        header: true,
        complete: function (results) {
            var jsonData = results.data;
            var rowsData = chunkArray(jsonData, 3);

            if (screen.width > 768 && screen.width < 1024) {
                rowsData = chunkArray(jsonData, 2);
            }

            rowsData.forEach(function (rowProjects) {
                var row = createRow(container);
                renderRowProjects(row, rowProjects);
            });
        },
        error: function (error) {
            console.log("Error al cargar o convertir el archivo CSV:", error);
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

function renderRowProjects(row, projects) {
    projects.forEach(function (project) {
        project.title = project.title.replace(";", "");
        project.icon = project.icon.replace(";", "");
        var projectHTML = projectTemplate
            .replace("{title}", project.title)
            .replace("{icon}", project.icon)
            .replace(
                "{tags}",
                project.tags
                    .split(",")
                    .map(function (tag) {
                        tag = tag.replace(";", "");
                        return "<li>" + tag + "</li>";
                    })
                    .join("")
            )
            .replace("{description}", project.description);

        row.insertAdjacentHTML("beforeend", projectHTML);
    });
}
