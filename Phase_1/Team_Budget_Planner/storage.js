
function addData() {

    //get data from the input box
    var client = document.getElementById("client").value;
    var project = document.getElementById("project").value;
    var budget = document.getElementById("budget").value;

    const dataObj = {
        client: client,
        project: project,
        budget: budget
    }

    //get the item from the localstorage if null get empty array 
    var annualData = JSON.parse(localStorage.getItem("annualData") || "[]");

    //push the data object 
    annualData.push(dataObj);

    // Saving the data into localStorage
    localStorage.setItem("annualData", JSON.stringify(annualData));

    //tell user data is added
    document.getElementById("displayAdd").innerHTML = "The data is already added";

}

function clearData() {
    var client = document.getElementById("client");
    var project = document.getElementById("project");
    var budget = document.getElementById("budget");
    var displayAdd = document.getElementById("displayAdd");

    //empty input box
    client.value ="";
    project.value ="";
    budget.value ="";
    displayAdd.innerHTML ="";

}

function displayData() {
    let annualData = localStorage.getItem("annualData");
    let dataJson = JSON.parse(annualData);

    var tableContent=""
    var startTable ="<table class=\"container-table\"><tr><th>Client Name</th><th>Project Name</th><th>Budget </th></tr>"
    var totalBudget = 0;
    dataJson.forEach(item => {
        tableContent += `<tr>
                        <td> ${item.client} </td>
                        <td> ${item.project} </td>
                        <td> ${item.budget} </td>
                        </tr>`
        var str = item.budget.replace(/\D/g, "");
        totalBudget += parseInt(str);
    });
    
    var endTable="</table>"
    tableContent = startTable+tableContent+endTable
    document.getElementById("main").innerHTML=tableContent;
    document.getElementById("totalBudget").innerHTML = `Total cost: $${totalBudget.toLocaleString()}`
    
}