import { Injectable } from '@angular/core';
import { Courses } from './course';
import { COURSES } from './mockCourse';
import { MessagesService } from './messages.service';
import {of} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  

  getCourses(){

    this.messagesService.add( "SiyaRam")
    return of (COURSES);
  }


  constructor(private messagesService: MessagesService) {

   }
   
}

