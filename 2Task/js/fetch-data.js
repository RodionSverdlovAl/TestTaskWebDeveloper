function createTable(data) {
    // создание таблицы
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");

    // заголовки
    let headerRow = document.createElement("tr");
    let headers = ["User ID", "id", "Заголовок", "Контент"]; // Заголовки столбцов

    for (let i = 0; i < headers.length; i++) {
        let headerCell = document.createElement("th");
        headerCell.textContent = headers[i];
        headerRow.appendChild(headerCell);
    }

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // рендер строк
    for (let j = 0; j < data.length; j++) {
        let rowData = data[j];
        let row = document.createElement("tr");

        for (let key in rowData) {
            let cell = document.createElement("td");
            cell.textContent = rowData[key];
            row.appendChild(cell);
        }

        tbody.appendChild(row);
    }

    table.appendChild(tbody);

    // вывод таблицы
    let container = document.getElementById("table-container");
    container.appendChild(table);
}

// Запрос к серверу
function fetchData() {
    let url = "https://you-digital.ru/works/posts";

    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            createTable(response);
        }
    };

    xhr.send();
}

fetchData();
