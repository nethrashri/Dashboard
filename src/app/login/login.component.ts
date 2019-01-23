import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import {MatSnackBar} from '@angular/material';
import { from } from 'rxjs';
import 'rxjs/add/operator/timeout'
import { ActivatedRoute, RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public http:HttpClient,private spinner: NgxSpinnerService,public snackBar: MatSnackBar,public router: Router) { }

  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [];
  
  public doughnutChartType:string = 'doughnut';
  loginReq:any={};
  loginurl: string;
  loginRes: any={};
    

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  ngOnInit() {
    
  }

  
  login() {
    this.spinner.show();
 
    this.loginurl= 'http://192.168.0.114:10010/login';
    this.http.post(this.loginurl,this.loginReq)
    .timeout(10)
    .subscribe(res =>{

      // setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();

        console.log(res);
        this.loginRes= res;
        if (this.loginRes.status == 'success')
        {
          this.router.navigate (['m2']);
        }
        else
        {     this.snackBar.open(this.loginRes.status , 'Error', {
          duration: 2000,
        });
    }

//    }, 5000);

     
    }), ()=>{
      console.log("inside error");
      this.snackBar.open("Error in Backed" , 'Error', {
        duration: 2000,
      });
    }
    
   console.log("login id is " + this.loginReq.id);
   console.log("password is " + this.loginReq.pwd);

  }

}
