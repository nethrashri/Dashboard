import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public http:HttpClient) { }

  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [];
  
  public doughnutChartType:string = 'doughnut';
  salesurl:string;
  salesReq:any={};
  salesRes:any={};



 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }


  
  ngOnInit() {
    this.salesurl= 'http://localhost:10010/sales';
    this.http.post(this.salesurl,this.salesReq)
    .subscribe(res =>{
      this.salesRes=res;
      this.doughnutChartData= this.salesRes.sales;

console.log(JSON.stringify(res));
//    }, 5000);

     
    }), ()=>{
      console.log("inside error");
    }
  
    console.log("login works")
  }

}
