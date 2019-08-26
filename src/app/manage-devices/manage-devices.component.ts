import { Component, OnInit } from '@angular/core';
import {CallService  } from '../call.service';
import { ModalService } from '../_modal';

@Component({
  selector: 'app-manage-devices',
  templateUrl: './manage-devices.component.html',
  styleUrls: ['./manage-devices.component.css'],
  providers:[CallService, ModalService]
})
export class ManageDevicesComponent implements OnInit {
  roomAvailableDevices: any=[]; 
  expand: boolean []= [];
 
  constructor(private callService: CallService, private modalService: ModalService) { }

  ngOnInit() {
    this.showAvailableDevicesByRoom();
    
  }

  //showAvailableRooms() {
   // this.callService.getAvailableRooms()
    //.subscribe(response=> {
     // this.availableRooms=response;
   // console.log(this.availableRooms)
   // })
 // } 

  showAvailableDevicesByRoom() {
   
    this.callService.getAvailableDevices()
    .subscribe(response=> {
      this.roomAvailableDevices=response;
     console.log("devv",this.roomAvailableDevices )
    })
  }
 
  expandDevices(index){
    //this.expand=[]
    this.expand[index]=!this.expand[index];
  }

  removeDevices(roomNameId,index){
    console.log(roomNameId, index)
    for(let i = 0 ; i < this.roomAvailableDevices.length; i++ ){
      if(this.roomAvailableDevices[i].name ==this.roomAvailableDevices[roomNameId].name ) this.roomAvailableDevices[i].devices.splice(index,1)
       else console.log('not found')
    }
    this.closeModal('custom-modal-1')
    console.log("afterdevv",this.roomAvailableDevices )
  }


   openModal(id: string) {
        this.modalService.open(id);
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }
}
