import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-trans-stat',
  templateUrl: './trans-stat.component.html',
  styleUrls: ['./trans-stat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransStatComponent implements OnInit {
  @Input() title:string = '';
  @Input() amount:string = '';
  @Input() isCurrency:boolean = false;

  constructor() { 
  }

  ngOnInit(): void {
   
  }

}
