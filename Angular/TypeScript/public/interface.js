"use strict";
//-- create class Employee Implement IEmplyee -- getSalary
class Employee {
    constructor(id, fname, lname, age, salary, address) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.salary = salary;
        this.address = address;
    }
    getSalary() {
        return this.salary;
    }
}
//-- create class Manager extened Employee -- show Employee Data (empId){show emp data};
class Manager extends Employee {
    constructor(id, fname, lname, age, salary, address) {
        super(id, fname, lname, age, salary, address);
    }
    getData() {
        console.log(`Employee Id: ${this.id}\nEmployee Name: ${this.fname} ${this.lname}\nEmployee Age: ${this.age}\nEmployee Salary: ${this.salary}\nEmployee Address: ${this.address.city} ${this.address.street} ${this.address.zCode}`);
    }
}
var manager = new Manager(1, "Ahmed", "Hassan", 20, 5000, { city: "Shebin Elkom", street: "University", zCode: 1 });
manager.getData();
