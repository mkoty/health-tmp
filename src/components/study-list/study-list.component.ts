import {Component, OnInit} from '@angular/core';
import {studyCards} from '../../constants/study-cards';
import {StudiesService} from '../../services/studies.service';
import {StudyCard} from '../../entities/StudyCard';

@Component({
  selector: 'app-study-list',
  templateUrl: './study-list.component.html',
  styleUrls: ['./study-list.component.scss']
})
export class StudyListComponent implements OnInit {
  studyCards: StudyCard[];

  constructor(private studiesService: StudiesService) {
  }

  ngOnInit() {
    this.studiesService
      .getAllStudies()
      .subscribe(response => {
        this.studyCards = response.result;
      });
  }
}
