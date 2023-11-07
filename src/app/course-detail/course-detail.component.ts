import { Component, OnInit , Input} from '@angular/core';
import { Courses } from '../course'

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {


  @Input() course: Courses;

  constructor() { }

  ngOnInit() {
  }

}
