//-- create Interface IEmplyee id,fname,lname,age,salary,address:{city,street,zCode}
interface IEmplyee {
  id: number;
  fname: string;
  lname: string;
  age: number;
  salary: number;
  address: {
    city: string;
    street: string;
    zCode: number;
  };
}
//-- create class Employee Implement IEmplyee -- getSalary
class Employee implements IEmplyee {
  constructor(
    public id: number,
    public fname: string,
    public lname: string,
    public age: number,
    public salary: number,
    public address: { city: string; street: string; zCode: number }
  ) {}
  getSalary(): number {
    return this.salary;
  }
}
//-- create class Manager extened Employee -- show Employee Data (empId){show emp data};
class Manager extends Employee {
  constructor(
    id: number,
    fname: string,
    lname: string,
    age: number,
    salary: number,
    address: { city: string; street: string; zCode: number }
  ) {
    super(id, fname, lname, age, salary, address);
  }
    getData(): void {
        console.log(`Employee Id: ${this.id}\nEmployee Name: ${this.fname} ${this.lname}\nEmployee Age: ${this.age}\nEmployee Salary: ${this.salary}\nEmployee Address: ${this.address.city} ${this.address.street} ${this.address.zCode}`);
  }
}

var manager: Manager = new Manager(1, "Ahmed", "Hassan", 20, 5000, { city: "Shebin Elkom", street: "University", zCode: 1 });
manager.getData();