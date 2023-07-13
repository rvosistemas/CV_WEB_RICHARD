var projectTemplate = `
    <div class="project highlight" onclick="removeHighlight()">
        <div class="overlay"></div>
        <div class="img-container" style="background-image: url('{image_path}')"></div>
        <div class="info">
            <h4>{name}</h4>
            <p>{description}</p>
            <ul class="tags">
                {tags}
            </ul>
            <a href="{repository_link}" target="_blank">URL REPOSITORY</a>
        </div>
    </div>
`;

function getValueCheck() {
    return new Promise(resolve => {
        var check = document.getElementById("check");
        resolve(check.checked);
    });
}

function loadCSVData(url) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    reject(new Error("Error al cargar el archivo CSV."));
                }
            }
        };

        xhr.open("GET", url, true);
        xhr.send();
    });
}

async function renderProjects() {
    var container = document.querySelector("#projects-container");
    container.innerHTML = "";

    var checked = await getValueCheck();
    var englishPath = "https://raw.githubusercontent.com/rvosistemas/CV_WEB_RICHARD/main/src/data/projects-en.csv";
    var spanishPath = "https://raw.githubusercontent.com/rvosistemas/CV_WEB_RICHARD/main/src/data/projects-es.csv";
    var projectDataCsv = checked ? spanishPath : englishPath;

    try {
        var csvData = await loadCSVData(projectDataCsv);
        var jsonData = Papa.parse(csvData, {
            header: true,
            dynamicTyping: true,
        }).data;
        renderRowProjects(container, jsonData);
    } catch (error) {
        lang = document.querySelector('html').lang;
        let spanishMessage = "Error al cargar los proyectos desde archivo CSV:";
        let englishMessage = "Error loading projects from CSV file:";
        message = lang === 'es' ? spanishMessage : englishMessage;
        console.log(message, error);
    }
}

function renderRowProjects(container, projects) {
    projects.forEach(function (project) {
        project.image_path = project.image_path.replace(";", "");
        project.name = project.name.replace(";", "");

        var tagsHTML = project.tags.split(',').map(tag => {
            var tagClass = getTagClass(tag);
            return `<li class="${tagClass}">${tag}</li>`;
        }).join('');

        var projectHTML = projectTemplate
            .replace("{image_path}", project.image_path)
            .replace("{name}", project.name)
            .replace("{tags}", tagsHTML)
            .replace("{repository_link}", project.repository_link)
            .replace("{description}", project.description);

        container.insertAdjacentHTML("beforeend", projectHTML);
    });
}

function getTagClass(tag) {
    const tagClasses = {
        python: ["PYTHON", "DJANGO", "FLASK", "FASTAPI"],
        java: ["JAVA", "SPRING", "SPRING BOOT"],
        php: ["PHP", "LARAVEL"],
        csharp: ["C#", ".NET"],
        go: ["GO", "GIN"],
        ruby: ["RUBY", "RUBY ON RAILS"],
        typescript: ["TYPESCRIPT", "TS"],
        javascript: ["JAVASCRIPT", "JS", "JQUERY", "AJAX", "VANILLA"],
        jsframeworks: ["REACT", "VUE", "ANGULAR", "SVELTE", "NODEJS", "EXPRESS", "ELECTRON", "REACT NATIVE", "VUEX", "VUE ROUTER", "ANGULAR MATERIAL", "SVELTE", "VUEX", "VUE ROUTER", "REACT NATIVE", "ANGULAR MATERIAL"],
        html: ["HTML", "PUG", "JADE"],
        css: ["CSS", "BOOTSTRAP", "TAILWIND", "MATERIALIZE", "MATERIAL UI", "ANT DESIGN", "SASS", "LESS"],
        sql: ["SQL", "MYSQL", "POSTGRESQL", "SQLITE", "MSSQL", "ORACLE"],
        nosql: ["MONGODB", "FIREBASE", "REDIS"],
        mobile: ["ANDROID", "IOS", "FLUTTER", "KOTLIN", "SWIFT"],
        aws: ["AWS", "EC2", "S3", "LAMBDA"],
        azure: ["AZURE", "FUNCTIONS"],
        gcp: ["GCP", "FIREBASE"],
        devops: ["DOCKER", "KUBERNETES", "JENKINS", "GITLAB", "GITHUB", "GIT"],
        agile: ["AGILE", "SCRUM", "KANBAN"],
        tdd: ["TDD", "TEST DRIVEN DEVELOPMENT"],
        api: ["API", "REST", "RESTFUL", "SOAP", "GRAPHQL"],
        architecture: ["MVC", "MICROSERVICES", "MONOLITHIC", "SERVERLESS"],
        security: ["JWT"],
        apitools: ["POSTMAN", "INSOMNIA", "APIARY"],
        docs: ["OPENAPI", "SWAGGER", "RAML", "API BLUEPRINT"],
        patrons: ["DESIGN PATTERNS", "SOLID", "DRY", "KISS", "YAGNI"],
        testing: ["TEST", "TESTING", "UNITTEST", "INTEGRATIONTEST", "ENDTOENDTEST", "E2ETEST"],
        unity: ["UNITY"],
    };

    for (const [key, value] of Object.entries(tagClasses)) {
        if (value.includes(tag.toUpperCase())) {
            return key + "-tag";
        }
    }

    return "other-tag";
}

function removeHighlight() {
    var divs = document.getElementsByClassName("project");

    for (var i = 0; i < divs.length; i++) {
        divs[i].classList.remove("highlight");
    }
}
