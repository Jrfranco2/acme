const r_name = "^\\w+";

class Employee{
    constructor(data) {
        this.data = data;
    }

    getName() {
        let [_name] = this.data.match(r_name);
    
        return _name;
    }
}

module.exports = Employee;