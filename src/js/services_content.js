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

function renderServices() {
    var container = document.querySelector("#services-container");
    container.innerHTML = "";

    var check = document.getElementById("check");
    serviceDataCsv = check.checked ? "/src/data/services-es.csv" : "/src/data/services-en.csv"

    Papa.parse(serviceDataCsv, {
        download: true,
        header: true,
        complete: function (results) {
            var jsonData = results.data;
            var rowsData = chunkArray(jsonData, 3); // Dividir los servicios en grupos de 3

            rowsData.forEach(function (rowServices) {
                var row = createRow(container);
                renderRowServices(row, rowServices);
            });
        },
        error: function (error) {
            console.log("Error al cargar o convertir el archivo CSV:", error);
        },
    });
}

function chunkArray(arr, size) {
    // Función para dividir un array en grupos de un tamaño específico
    var chunks = [];
    for (var i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}

function createRow(container) {
    // Crea una nueva fila y la agrega al contenedor
    var row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    return row;
}

function renderRowServices(row, services) {
    // Renderiza los servicios en una fila específica
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

        row.insertAdjacentHTML("beforeend", serviceHTML);
    });
}
