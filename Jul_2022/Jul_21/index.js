class Human {
    constructor(name) {
      this.name = name;
    }
  
    memberInfo() {
      return `Hello...!!! ${this.name}. Good Evening..!`;
    }
  }

    let greet = new Human("Prasad"); 
    console.log(greet.memberInfo());

class Student extends Human {
    constructor(name, BatchName, Role) {
        super(name);
        this.BatchName = BatchName;
        this.Role = Role;
    }
    
    memberInfo() {
        return `Hello...!!! ${this.name}. Good Evening..! Your Batch Name is "${this.BatchName}" and you have a Role as - ${this.Role}`;
    }
}
  
let std = new Student("Prasad", "FSHD05", "Student");
console.log(std.memberInfo());

