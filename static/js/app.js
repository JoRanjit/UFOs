// import the data from data.js
const tableData = data;

// D3 is a JavaScript library that produces sophisticated and 
// highly dynamic graphics in an HTML webpage. 

var tbody = d3.select("tbody");

function buildTable(data){
// First, clear out any existing data
    tbody.html("");

// Next, loop through each object in the data
// and append a row and cells for each value in the row
    data.forEach((dataRow) => {

//Append a row to the table body
        let row = tbody.append("tr");

// loop throigh each field in the datarow an add
// each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
                let cell = row.append("td");
                cell.text(val);
       });
    });
}
