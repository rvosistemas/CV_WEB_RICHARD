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

function getValueCheck() {
    return new Promise(resolve => {
        var check = document.getElementById("check");
        resolve(check.checked);
    });
}

function loadData(url) {
    return new Promise((resolve, reject) => {
        Papa.parse(url, {
            download: true,
            header: true,
            complete: function (results) {
                var jsonData = results.data;
                resolve(jsonData);
            },
            error: function (error) {
                reject(error);
            },
        });
    });
}

async function renderProjects() {
    var container = document.querySelector("#projects-container");
    container.innerHTML = "";

    var checked = await getValueCheck();
    projectDataCsv = checked ? "/src/data/projects-es.csv" : "/src/data/projects-en.csv"
    try {
        var jsonData = await loadData(projectDataCsv);
        renderRowProjects(container, jsonData);
    } catch (error) {
        lang = document.querySelector('html').lang;
        message = lang === 'es' ? "Error al cargar los proyectos desde archivo CSV:" : "Error loading projects from CSV file:";
        console.log(message, error);
    }
}

function renderRowProjects(container, projects) {
    projects.forEach(function (project) {
        project.image_path = project.image_path.replace(";", "");
        project.name = project.name.replace(";", "");
        var projectHTML = projectTemplate
            .replace("{image_path}", project.image_path)
            .replace("{name}", project.name)
            .replace("{description}", project.description);

        container.insertAdjacentHTML("beforeend", projectHTML);
    });
}