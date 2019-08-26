import { Component, Input, Output, EventEmitter } from '@angular/core';
import {HomeService} from './home.service';
import { HttpClient } from '@angular/common/http';
//import { AdminComponent } from './admin/admin.component';

import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HomeService]
})
export class AppComponent {
public roomId :number;
 public role:string = "admin";
 
  
  ngOnInit() {
    this.checkUserAdmin();
  }
  constructor( private router: Router) { }

  checkUserAdmin(){
    if(this.role==="user"){
      this.router.navigate(['/rooms'] )
    }else if (this.role === 'admin'){
      this.router.navigate(['/admin/rooms'] )
    }

  }
  status(){
    if(this.roomId) return false 
    else return true 
  }
 
}
