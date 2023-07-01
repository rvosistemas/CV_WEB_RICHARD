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

function obtenerValorCheck() {
    return new Promise(resolve => {
        var check = document.getElementById("check");
        resolve(check.checked);
    });
}

function cargarDatos(url) {
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

async function renderServices() {
    var container = document.querySelector("#services-container");
    container.innerHTML = "";

    // var check = document.getElementById("check");
    var checked = await obtenerValorCheck();
    serviceDataCsv = checked ? "/src/data/services-es.csv" : "/src/data/services-en.csv"
    try {
        var jsonData = await cargarDatos(serviceDataCsv);
        console.log("jsonData: ", jsonData);
        renderRowServices(container, jsonData);
        // Resto del código que utiliza jsonData
    } catch (error) {
        console.log("Error al cargar o convertir el archivo CSV:", error);
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