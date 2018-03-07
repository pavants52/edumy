import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../../utilityApp/services/shared.service';
import { Subject } from './subject';
import { SubjectService } from './subject.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html'
})
export class SubjectsComponent implements OnInit {

  subjects:Subject[];
  constructor(private subjectService: SubjectService) { }

  ngOnInit():void {
    this.getSubjects();
  }
  getSubjects(): void {
    this.subjectService.getSubjects().then(values => this.subjects = values)
  }

}
