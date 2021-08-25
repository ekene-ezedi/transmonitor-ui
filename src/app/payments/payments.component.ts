import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentsComponent implements OnInit {
  payments:number[] = new Array(500);
  dummyData!:any[];
  constructor(private appService:AppService, private cd:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.appService.getData().subscribe((data)=>{
      this.dummyData = data;
      this.cd.markForCheck();
    })
  }

}
