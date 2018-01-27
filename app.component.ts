import { Component } from '@angular/core';

interface Employee{
  name:string;
  age:number;
  selected ?:boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Divya Angular training Class';
  selectEmp;
  newEmployee:Employee={name:'',age:null};
  employees:Array<Employee>=[
    {
      name:'Divya',
      age:25
    },
    {
      name:'Jacob',
      age:30
    }
  ]

  clearSelections(){
    this.employees.forEach(emp => emp.selected=false);
  }

  selectedEmployee(emp){
    this.clearSelections();
    emp.selected=true;
    this.selectEmp=emp;
  }

  addEmployee(){
    this.employees.push(this.newEmployee);
  }
}
