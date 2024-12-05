// CREATE AN ARRAY OF EMPLOYEES
let employees = [
    {id: 12345678, name: "Zak Rogers", extension: 1234, email: "zak@company.com", department: "HR"},
    {id: 23456789, name: "Jessica Mills", extension: 2345, email: "jessica@company.com", department: "Finance"},
    {id: 34567891, name: "Mark Johnson", extension: 3456, email: "mark@company.com", department: "IT"},
    {id: 45678912, name: "Fred Stevens", extension: 4567, email: "fred@company.com", department: "Marketing"},
    {id: 56789123, name: "Sally Trust", extension: 5678, email: "sally@company.com", department: "Sales"}
];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
window.addEventListener('load', () => {
    if (localStorage.getItem('employees')) {
        employees = JSON.parse(localStorage.getItem('employees'));
    }
    buildGrid();
});

// GET DOM ELEMENTS
const form = document.getElementById('addForm');
const empTable = document.getElementById('empTable');
const empCount = document.getElementById('empCount');

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
function buildGrid() {
    const tbody = empTable.querySelector('tbody');
    tbody.innerHTML = '';
    for (let employee of employees) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.extension}</td>
            <td>${employee.email}</td>
            <td>${employee.department}</td>
            <td><button class="btn btn-sm btn-danger delete">X</button></td>
        `;

        tbody.appendChild(row);
    }
empCount.textContent = `(${employees.length})`;
localStorage.setItem('employees', JSON.stringify(employees));
}

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const extension = document.getElementById('extension').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    const newEmployee = {
        id: parseInt(id),
        name: name,
        extension: parseInt(extension),
        email: email,
        department: department
    };
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee);
    // BUILD THE GRID
    buildGrid();
    // RESET THE FORM
    form.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this employee?')) {
        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            const row = e.target.closest('tr');
            const id = parseInt(row.querySelector('td:first-child').textContent);
        // REMOVE EMPLOYEE FROM ARRAY
            employees = employees.filter(emp => emp.id !== id);
        // BUILD THE GRID
            buildGrid();
    }
}
});;