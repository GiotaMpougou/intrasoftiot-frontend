import { Component, OnInit , Input} from '@angular/core';
import {HomeService} from '../home.service';
import { ActivatedRoute } from '@angular/router';
import {CallService  } from '../call.service';
@Component({
  selector: 'app-room-devices',
  templateUrl: './room-devices.component.html',
  styleUrls: ['./room-devices.component.css'],
  providers:[HomeService, CallService]
})
export class RoomDevicesComponent implements OnInit {
  roomDevices:any=[];
  id: any;
  showDevices: boolean
 

  constructor(private homeService: HomeService,private route:  ActivatedRoute, private callService: CallService) { }

  ngOnInit(){
    this.showDevices =  false

    this.route.queryParams.subscribe(params => {
      this.id = params.id
      this.callService.getDevices(this.id).then(roomDevices=>{
        this.roomDevices = roomDevices
        this.showDevices =  true;
    });
  }) }

    

  } 

