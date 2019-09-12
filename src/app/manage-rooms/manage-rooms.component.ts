import { Component, OnInit, Input } from '@angular/core';
import {HomeService} from '../home.service';
import {CallService  } from '../call.service';
import { ModalService } from '../_modal';
import {FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-manage-rooms',
  templateUrl: './manage-rooms.component.html',
  styleUrls: ['./manage-rooms.component.css'],
  providers:[HomeService, CallService, , ModalService]
})
export class ManageRoomsComponent implements OnInit {
  
  homeRooms=[];
  availableRooms: any =[] 
  availableRoomsType: any =[] 
  selectedValue:any;
  index:number;
  myGroup = new FormGroup({
    roomControl: new FormControl('', [Validators.required])
});
  constructor(private homeService: HomeService, private callService: CallService, private modalService: ModalService) { }

  ngOnInit() {
    this.showAvailableRooms();
    this.showAvailableRoomsType();
    
   
  }

  showAvailableRooms() {
    this.callService.getAvailableRooms()
    .subscribe(response=> {
      this.availableRooms=response;
      this.homeService.setHomeRooms(this.availableRooms)
    console.log('rooms',this.availableRooms)
    })
  } 
  
  showAvailableRoomsType() {
    this.callService.getRoomTypes()
    .subscribe(response=> {
      this.availableRoomsType=response;
    })
  } 

  addRoom(room){
    this.availableRooms.push(room);
   //this.homeService.addHomeRooms(room).subscribe( homeRooms => this.homeRooms=homeRooms );
   //console.log('add',this.homeRooms)
  }
  removeRoom(){
    this.availableRooms.splice(this.index,1)
    this.closeModal('custom-modal-1')
    //this.homeService.setHomeRooms(this.availableRooms)
    console.log('removeA', this.availableRooms)
   // this.homeService.removeHomeRooms(this.availableRooms).subscribe( homeRooms => this.homeRooms=homeRooms );
   // console.log('remove', this.homeRooms)
  }

  openModal(id: string, index) {
    this.modalService.open(id);
    this.index= index;
}

closeModal(id: string) {
    this.modalService.close(id);
}
editRoom(){
 
  this.availableRooms.push(this.selectedValue );
 
}

  

}
