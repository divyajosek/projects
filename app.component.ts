import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Divya Angular training Class';
  selectEmp;
  employees=[
    {
      name:'Divya',
      age:25
    },
    {
      name:'Jacob',
      age:30
    }
  ]

  selectedEmployee(emp){
    this.selectEmp=emp;
  }

  addEmployee(name,age){
    this.employees.push({name,age});
  }
}
