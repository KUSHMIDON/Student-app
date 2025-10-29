import { Injectable } from '@angular/core';
import { Student, StudentService } from '../services/student.service';

@Injectable({
  providedIn: 'root'
})
export class StudentController {

  students: Student[] = [];
  newStudent: Student = { name: '', rollNumber: '' };

  constructor(private studentService: StudentService) {}

  loadStudents(): void {
    this.studentService.getStudents().subscribe(data => this.students = data);
  }

  saveStudent(): void {
    if (!this.newStudent.name || !this.newStudent.rollNumber) return;

    this.studentService.saveStudent(this.newStudent).subscribe(saved => {
      this.students.push(saved);
      this.newStudent = { name: '', rollNumber: '' };
    });
  }
}
