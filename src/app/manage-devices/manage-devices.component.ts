import { Component, OnInit } from '@angular/core';
import {CallService  } from '../call.service';
import { ModalService } from '../_modal';
import {HomeService  } from '../home.service';
@Component({
  selector: 'app-manage-devices',
  templateUrl: './manage-devices.component.html',
  styleUrls: ['./manage-devices.component.css'],
  providers:[CallService, ModalService]
})
export class ManageDevicesComponent implements OnInit {
  roomAvailableDevices: any=[]; 
  expand: boolean []= [];
  showFiller:boolean  = false;
  roomNameId:number; 
  index:number;
  showBar:boolean=false;
  constructor(private callService: CallService,private homeService: HomeService, private modalService: ModalService) { }

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
    this.expand[index]=!this.expand[index];
  }

  removeDevices(){
    
    for(let i = 0 ; i < this.roomAvailableDevices.length; i++ ){
      if(this.roomAvailableDevices[i].name ==this.roomAvailableDevices[this.roomNameId].name ) this.roomAvailableDevices[i].devices.splice(this.index,1)
       else console.log('not found')
    }
    this.closeModal('custom-modal-1')
    console.log("afterdevv",this.roomAvailableDevices )
  }


   openModal(id: string,roomNameId,index) {
     console.log("inside modal")
        this.modalService.open(id);
        this.roomNameId=roomNameId;
        this.index= index;
        console.log('removeDevices',roomNameId, index)
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }
   
    sideBarAdd(){
      this.showBar=this.homeService.showSideBar()
   }
  }
