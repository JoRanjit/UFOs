// import the data from data.js
const tableData = data;

// D3 is a JavaScript library that produces sophisticated and 
// highly dynamic graphics in an HTML webpage. 

var tbody = d3.select("tbody");
// with the above code we declare a variable tbody
// use d3.select to return all tbody tags in HTML

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

function handleClick(){
    let date = d3.select("#datetime").property("value");
// .select will select the 1st instance that matches the following condition
//here - it looks fro #datetime and gets the value
    let filteredData = tableData; 
//if a date is entered - filter the table data based on the date
    if (date){
        filteredData = filteredData.filter(row => row.datetime === date);
    };
// build the display table using the filtered data and the buildTable function
// Note - if no date is entered - the whole data table will be returned
    buildTable(filteredData); 
}

// this part will call the handleClick() when a user clicks the 'filter-btn'
d3.selectAll("#filter-btn").on("click",handleClick);

//finally build the table when the page loads
buildTable(tableData);

