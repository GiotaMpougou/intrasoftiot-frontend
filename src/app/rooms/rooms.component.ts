import { Component, OnInit, Input, Output, EventEmitter, ComponentFactoryResolver } from '@angular/core';
import {HomeService} from '../home.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {CallService, userRooms  } from '../call.service';

@Component({
  selector: 'app-rooms' ,
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  providers:[HomeService, CallService]
 
})
export class RoomsComponent implements OnInit {

  Imgrooms : object = [{"roomid":1,"name":"https://cdn.pixabay.com/photo/2016/12/30/07/59/kitchen-1940174_960_720.jpg"},
  {"roomid":2,"name":"https://cdn.pixabay.com/photo/2017/08/05/12/08/living-room-2583032_1280.jpg"},
  {"roomid":3,"name":"https://cdn.cloud.grohe.com/Web/21_9/ZZH_T32628D02_000_01_21_9/21_9/960/ZZH_T32628D02_000_01_21_9_21_9.jpg"}]

  rooms: any  = [];
  constructor(private homeService: HomeService,  private router: Router, private route: ActivatedRoute, private callService: CallService) { }
    
  ngOnInit() {
     this.showRooms();
  }

  updateId(id){
     this.router.navigate(['/room-devices'],{queryParams: { id: id}} )
   
  }
 

showRooms() {
    this.callService.getRooms()
    .subscribe(response=> {
      this.rooms=response;
    console.log(this.rooms)
    })
  } 
  
}