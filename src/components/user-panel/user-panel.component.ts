import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {
  userMenuItem = [
    {
      path: '../../assets/icon_menu.svg'
    },
    {
      path: '../../assets/icon_blocks.svg'
    },
    {
      path: '../../assets/icon_search.svg'
    },
    {
      path: '../../assets/icon_apps.svg'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
