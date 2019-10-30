class Company{
    constructor(){
        this.departments= []
    }
    addEmployee(username, salary, position, department){
        if (!username || !salary || !position || !department) {
            throw new Error(`Invalid input!`);
        }
        if (salary < 0) {
            throw new Error(`Invalid input!`);
        }

       let currentDep = this.departments.filter(e => e.name === department);

       if (currentDep.length=== 0) {
           let obj = {
               name: department,
               employees: [{username, salary, position}],
               avrgSalary: salary
           }
           this.departments.push(obj)
       } else {
        currentDep[0].employees.push({username, salary, position});
        let sum = 0;
        currentDep[0].employees.forEach(e=> sum += e.salary);
        currentDep[0].avrgSalary = sum/currentDep[0].employees.length;
       }
       return `New employee is hired. Name: ${username}. Position: ${position}`
    }
    bestDepartment(){
        let sorted = this.departments.sort((a, b) => b.avrgSalary - a.avrgSalary);
        let current = sorted[0];
        // console.log(sorted)
        let result =  `Best Department is: ${current.name}\nAverage salary: ${current.avrgSalary.toFixed(2)}`;
        current.employees.sort((a, b) => a.username.localeCompare(b.username))
                        .sort((a,b) => b.salary - a.salary)
                        .forEach(e => {
            result += `\n${e.username} ${e.salary} ${e.position}`
        })
        return result
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
console.log(c.addEmployee("Pesho", 1500, "electrical engineer", "Construction"));
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

// console.log(c.departments[0].employees);
// console.log(c)