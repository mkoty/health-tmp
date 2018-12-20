import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {
  userMenuItem = [
    {
      path: '../../assets/icon-blocks.svg'
    },
    {
      path: '../../assets/icon-search.svg'
    },
    {
      path: '../../assets/icon-apps.svg'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
