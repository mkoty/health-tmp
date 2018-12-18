import {Component, OnInit} from '@angular/core';
import {toolsPanelItems} from '../../constants/tools-menu';

@Component({
  selector: 'app-tools-panel',
  templateUrl: './tools-panel.component.html',
  styleUrls: ['./tools-panel.component.scss']
})
export class ToolsPanelComponent implements OnInit {
  toolsPanelItems = toolsPanelItems

  constructor() {
  }

  ngOnInit() {
  }

}
