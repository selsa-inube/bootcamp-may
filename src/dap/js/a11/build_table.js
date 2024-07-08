const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];

const generateTable = (data) => {
    const table = document.createElement('table'),
     header = document.createElement('tr');
     keys = Object.keys(data[0]);

    keys.forEach(key => {
        const th = document.createElement('th');
        th.textContent = key;
        header.appendChild(th);
    });
    table.appendChild(header);
    
    data.forEach(element => {
        const tr = document.createElement('tr');
        keys.forEach(key => {
            td = document.createElement('td');
            td.textContent = element[key];
            tr.appendChild(td);
        })
        table.appendChild(tr);
    });



    document.querySelector('#mountains').appendChild(table);

}

generateTable(MOUNTAINS);