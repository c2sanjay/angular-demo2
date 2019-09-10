import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { student } from '../model/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  providers: [StudentService]
})
export class StudentComponent implements OnInit {
  _student: student;
  studentArr = [];

  constructor(private stService: StudentService) {

    this._student = new student();
  }

  //Edit product
  editStudent(obj) {
    this._student.studentId = obj.studentId;
    this._student.studentName = obj.studentName;
    this._student.schoolName = obj.schoolName;

  }
  //Update product
  updateData() {
    this.stService.updateStudentData(this._student).subscribe(data => {
      this.getStudentData();
      //console.log(this._student);
      console.log(data);
    });

  }

  //Delete product
  deleteProduct(_id) {
    this.stService.delStudentData(_id).subscribe(data => {
      this.getStudentData();
      console.log('' + data);
    })
  }
  saveData() {
    this.stService.saveStudentData(this._student).subscribe(data => {
      console.log(data);
      this.getStudentData();
    })
  }
  getStudentData() {
    this.stService.getStudent().subscribe(data => {
      this.studentArr = data;
    })
  }
  ngOnInit() {
    this.getStudentData();
  }

}
