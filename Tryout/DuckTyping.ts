// declaring interface:
interface Employee {
    employeeId: number;
    employeeName: string;
}

// logic to display the Product details with interface object as parameter
// tslint:disable-next-line:adjacent-overload-signatures
function getEmployeeDetails(empObj: Employee): string {
    return "The name of employee: "+empObj.employeeName;
}

// declaring interface along with interface properties: (with ducktyping: addtion property)
const empObj = {employeeId: 1001, employeeName: 'ketan', employeeSalary: 120000};


// invoking the employee details function:
const nameOfEmployee: string = getEmployeeDetails(empObj);

// displaying the result:
console.log(nameOfEmployee);
