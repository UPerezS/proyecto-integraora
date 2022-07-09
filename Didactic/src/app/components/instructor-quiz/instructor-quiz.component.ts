import { Component, OnInit } from '@angular/core';
// import swal from 'sweetalert';
// import swal from 'sweetalert';

@Component({
  selector: 'app-instructor-quiz',
  templateUrl: './instructor-quiz.component.html',
  styleUrls: ['./instructor-quiz.component.css']
})

export class InstructorQuizComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  swal(){
    console.log('Deseas Guardarlo')
  }

}

// function mostAlert(params:1) {
//   swal({
//     title: "Are you sure?",
//     text: "Once deleted, you will not be able to recover this imaginary file!",
//     icon: "warning",
//     dangerMode: true,
//   })
// }
