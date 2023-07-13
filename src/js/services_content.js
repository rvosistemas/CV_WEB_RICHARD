var serviceTemplate = `
    <div class="service">
        <span class="icon"><i class="{icon}"></i></span>
        <h4>{title}</h4>
        <hr>
        <ul class="services-tag">
            {tags}
        </ul>
        <p>{description}</p>
    </div>
`;

async function renderServices() {
    var container = document.querySelector("#services-container");
    container.innerHTML = "";

    var checked = await getValueCheck();
    var servicesEng = "https://raw.githubusercontent.com/rvosistemas/CV_WEB_RICHARD/main/src/data/services-en.csv";
    var servicesEsp = "https://raw.githubusercontent.com/rvosistemas/CV_WEB_RICHARD/main/src/data/services-es.csv";
    var serviceDataCsv = checked ? servicesEsp : servicesEng;

    try {
        var csvData = await loadCSVData(serviceDataCsv);
        var jsonData = Papa.parse(csvData, {
            header: true,
            dynamicTyping: true,
        }).data;
        renderRowServices(container, jsonData);
    } catch (error) {
        lang = document.querySelector('html').lang;
        message = lang === 'es' ? "Error al cargar los servicios desde archivo CSV:" : "Error loading services from CSV file:";
        console.log(message, error);
    }
}

function renderRowServices(container, services) {
    services.forEach(function (service) {
        service.title = service.title.replace(";", "");
        service.icon = service.icon.replace(";", "");
        var serviceHTML = serviceTemplate
            .replace("{title}", service.title)
            .replace("{icon}", service.icon)
            .replace(
                "{tags}",
                service.tags
                    .split(",")
                    .map(function (tag) {
                        tag = tag.replace(";", "");
                        return "<li>" + tag + "</li>";
                    })
                    .join("")
            )
            .replace("{description}", service.description);

        container.insertAdjacentHTML("beforeend", serviceHTML);
    });
}
