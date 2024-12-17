import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  teacher: string = "Sarita Lad";
  age: number = 25;
  message:string |undefined
  receiveMsg($event:string)
  {
    this.message=$event
  }

  teachers:string[] = ["sartia","Rahul","Pankaj"]
  AddTeacher(newt : string)
  {
    this.teachers.push(newt)
  }
}
