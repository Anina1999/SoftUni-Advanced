class Company {
    departments;

    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department) {
            throw new Error("Invalid input!");
        }

        if (salary < 0) {
            throw new Error("Invalid input!");
        }

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = {
                avg: 0,
                sumSalary: 0,
                employee: []
            }
        }

        this.departments[department].employee.push({name, salary, position});
        
        this._updateDepartmentInfo(department, salary);

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    };

    bestDepartment() {
        const [departmentName, departmentInfo] = this._getBestDepartment();
        let buff = `Best Department is: ${departmentName}\n`;
        buff += `Average salary: ${departmentInfo.avg.toFixed(2)}\n`;
        departmentInfo.employee.sort((a, b) => {
            return b.salary - a.salary || a.name.localeCompare(b.name);
        }).forEach(emp => buff += `${emp.name} ${emp.salary} ${emp.position}\n`);

        return buff.trim();
    };

    _updateDepartmentInfo(department, salary) {
        const currentDepartment = this.departments[department];
        currentDepartment.sumSalary += salary;
        currentDepartment.avg = currentDepartment.sumSalary / currentDepartment.employee.length;
    }

    _getBestDepartment() {
        return Object.entries(this.departments)
            .sort(([keyA, valueA], [keyB, valueB]) => valueB.avg - valueA.avg)[0];
    }
}

let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());