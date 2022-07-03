import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProgressSpinnerMode } from '@swimlane/ngx-ui';

@Component({
  selector: 'app-loading-overlay',
  templateUrl: './loading-overlay.component.html',
  styleUrls: ['./loading-overlay.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingOverlayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  diameter = 80;
  strokeWidth = 6;
  color = '#1483FF';
  mode = ProgressSpinnerMode.Indeterminate;
  small = false;
  showIcon = true;
}
