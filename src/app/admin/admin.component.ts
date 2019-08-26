import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  // tabs =[{"id":1,"name":"home" },
 //  {"id":2,"name":"rooms" },
  // {"id":3,"name":"devices" },
  // {"id":4,"name":"users" }]
  // status:any=-1;
    activeTabs: boolean = false ;
  constructor() { }

  ngOnInit() {
   
  }
  //statusTab(tab){
  //  console.log(this.status)
   // console.log(tab)
   // for(let i= 0 ; i < this.tabs.length; i++)
    //  if(tab == this.tabs[i].name)  this.status = "" + this.tabs[i].id.toString()
      
    //  this.status = this.status.toString()
   //   console.log(this.status)
 // }

  showTabs(){
    this.activeTabs=!this.activeTabs;
  }

}
