import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentsComponent implements OnInit {
  dummyData!:any[];
  filteredData!:any[];
  search:string = "";
  taskCompletionStat:string = "all";
  constructor(private appService:AppService, private cd:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.appService.getData().subscribe((data)=>{
      this.dummyData = data;
      this.filteredData = data;
      this.cd.markForCheck();
    })
  }

  setStatus(e:any, value:string){
    if(value == 'completed'){
      this.filteredData = this.dummyData.filter(task => task.completed === true);
    }else if(value == 'uncompleted'){
      this.filteredData = this.dummyData.filter(task => task.completed === false);
    }else{
      this.filteredData = this.dummyData;
    }
    this.cd.markForCheck();
  }

}
