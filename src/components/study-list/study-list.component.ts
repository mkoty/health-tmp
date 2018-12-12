import {Component, OnInit} from '@angular/core';
import {studyCards} from '../../constants/study-cards';

@Component({
  selector: 'app-study-list',
  templateUrl: './study-list.component.html',
  styleUrls: ['./study-list.component.scss']
})
export class StudyListComponent implements OnInit {
  studyCards = studyCards;

  constructor() {
  }

  ngOnInit() {
  }

}
