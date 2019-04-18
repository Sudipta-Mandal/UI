let tBodyElement = document.querySelector('#tbody');

let employees = [
    {
        name : 'John',
        age : 45,
        designation : 'Manager'
    },
    {
        name : 'Rajan',
        age : 25,
        designation : 'Software Engineer'
    },
    {
        name : 'Williams',
        age : 35,
        designation : 'Tech Lead'
    }
];

function getTableData(employees) {
    let tempStr = '';
    for(let i=0; i<employees.length; i++){
        let employee = employees[i];
        tempStr += "<tr>" +
                        "<td>" + employee.name + "</td>" +
                        "<td>" + employee.age + "</td>" +
                        "<td>" + employee.designation + "</td>" +
                     "</tr>";
    }
    return tempStr;
}
tBodyElement.innerHTML = getTableData(employees);

// Template String From ES6 version (Back Tick)

function getTableDataUsingBackTick(employees) {
    let tempStr = '';
    for(let i=0; i<employees.length; i++){
        let employee = employees[i];
        tempStr += `<tr>
                        <td>${employee.name}</td>
                        <td>${employee.age}</td>
                        <td>${employee.designation}</td>
                    </tr>`;
    }
    return tempStr;
}
tBodyElement.innerHTML = getTableDataUsingBackTick(employees);