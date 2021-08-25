import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-chart-dash',
  templateUrl: './chart-dash.component.html',
  styleUrls: ['./chart-dash.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartDashComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
