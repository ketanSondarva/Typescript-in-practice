// declaring the parent class:

class Employee {
    protected employeeId: number;
    protected employeeName: string;

    constructor(employeeId: number, employeeName: string) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
    }

    getEmployee(): void {
        console.log("Employee ID: "+this.employeeId+" name: "+this.employeeName);
    }
}

class Manager extends Employee {
    private managerId: number;
    constructor(employeeId: number, employeeName: string, managerId: number) {
        super(employeeId, employeeName);
        this.managerId = managerId;
    }

    getEmployee(): void {
        super.getEmployee();
        console.log("Employee "+this.employeeName+" is Manager")
    }
}

// Manager class object creation:
const m = new Manager(1,"ketan sondarava",38);

// invoking the getEmployee method:
m.getEmployee();
