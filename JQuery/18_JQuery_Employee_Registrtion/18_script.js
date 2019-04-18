let designations = ['Software Engineer','Sr.Software Engineer','Tech Lead','Sr.Tech Lead','Project Manager','Sr.Project Manager'];
let optionsTag = '';
let locations = ['Hyderabad','Bangalore','Chennai','Noida','Delhi','Other'];
let l_optionsTag = '';
let employees = [];

designations.forEach((designation) => {
    optionsTag += `<option value="${designation}">${designation.toUpperCase()}</option>`;
});
$('#designation-select').append(optionsTag);

locations.forEach((location) => {
    l_optionsTag += `<option value="${location}">${location.toUpperCase()}</option>`;
});
$('#location-select').append(l_optionsTag);

// Registration  Logic
$('#register').click(function() {
    let employee = {
        employee_name : $('#employee_name').val().toUpperCase(),
        employee_desg : $('#designation-select').val().toUpperCase(),
        employee_age : $('#employee_age').val(),
        employee_location : $('#location-select').val().toUpperCase()
    };
    employees.push(employee);
    displayEmployeeData();
    clearFormData();
});

// display the employee data
let displayEmployeeData = () => {
    let employeeRows = '';
    let tempRow = '';
    let sno = 1;
    if(employees.length !== 0){
        employees.forEach((employee)=>{
            tempRow =     `<tr>
                               <td>${sno}</td>
                               <td>${employee.employee_name}</td>
                               <td>${employee.employee_desg}</td>
                               <td>${employee.employee_age}</td>
                               <td>${employee.employee_location}</td>
                           </tr>`;
            employeeRows += tempRow;
            sno++;
        });
    }
    $('#employee_data').empty().append(employeeRows);
};

// Clear the form data
let clearFormData = () => {
    $('#employee_name').val('');
    $('#designation-select').val('');
    $('#employee_age').val('');
    $('#location-select').val('');
};