import {Component, Input, OnInit} from '@angular/core';
import {StudyCard} from '../../entities/StudyCard';

@Component({
  selector: 'app-study-card',
  templateUrl: './study-card.component.html',
  styleUrls: ['./study-card.component.scss']
})
export class StudyCardComponent implements OnInit {

  @Input() card: StudyCard;

  constructor() { }

  ngOnInit() {
  }

}
