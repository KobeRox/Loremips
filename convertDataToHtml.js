
function convertDataToHtml(data){
    var html;
    var test2 = document.getElementById('restoResults');
    test2.innerHTML = " ";
    for(var test in data){
        let dataRow = data[test]
        var row = document.createElement('tr');
        for (var property in dataRow) {
            var th = document.createElement('td');
            th.scope = "col";
            th.innerText = dataRow[property];
            row.appendChild(th);
        }    
        test2.appendChild(row);
    }
    return html;
}