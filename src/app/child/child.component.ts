import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() data?: string;
  @Input() data1?: number;

  @Output() Messageevent=new EventEmitter<string>();

  sendMessage()
  {
    this.Messageevent.emit("Hello Good AfterNoon")
  }

  @Output() newteacher = new EventEmitter<string>();

  addnewTeacher(t:string)
  {
    if (t)
    {
      this.newteacher.emit(t);
    }
  }
}
