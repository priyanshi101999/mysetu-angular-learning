import { Component, OnInit } from '@angular/core';
import {Courses} from '../course'
import { COURSES } from '../mockCourse'
import { CourseService } from '../course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {


  courses :Courses[] = [{
    id :1,
    name : "angular"
  }];

  teach = COURSES;
selectedCourse: Courses;


  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.getCourses()
  }

  onSelect(course: Courses): void{
    this.selectedCourse = course;
  }

  getCourses(): void{
    this.courseService.getCourses().subscribe(courses => this.courses=courses )
  }
}
