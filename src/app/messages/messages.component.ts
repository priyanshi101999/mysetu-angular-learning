import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';
import { CourseService } from '../course.service';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  data: string
  constructor(public messagesService: MessagesService, public courseService: CourseService) { }

  ngOnInit() {

  }

  clear() {
    this.messagesService.clear()
  }

  add() {
    this.courseService.getCourses().subscribe(data => {
      this.data = data
    })
  }
}
