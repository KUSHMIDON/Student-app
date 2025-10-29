import { Component, OnInit } from '@angular/core';
import { StudentController } from '../../controllers/student.controller';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.scss']
})
export class StudentViewComponent implements OnInit {

  constructor(public controller: StudentController) {}

  ngOnInit(): void {
    this.controller.loadStudents();
  }
}
