
function convertDataToHtml(data){
    var html;
    for(var test in data){
        let dataRow = data[test]
        var row = document.createElement('tr');
        for (var property in dataRow) {
            var th = document.createElement('th');
            th.scope = "col";
            th.innerText = dataRow[property];
            row.appendChild(th);
        }    
        var test2 = document.getElementById('restoResults');
        test2.appendChild(row);
    }
    return html;
}