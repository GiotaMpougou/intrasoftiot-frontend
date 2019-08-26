import { Component, OnInit } from '@angular/core';
import {HomeService} from '../home.service';
import {CallService  } from '../call.service';
import { ModalService } from '../_modal';

@Component({
  selector: 'app-manage-rooms',
  templateUrl: './manage-rooms.component.html',
  styleUrls: ['./manage-rooms.component.css'],
  providers:[HomeService, CallService, , ModalService]
})
export class ManageRoomsComponent implements OnInit {

  homeRooms=[];
  availableRooms: any =[] 

  constructor(private homeService: HomeService, private callService: CallService, private modalService: ModalService) { }

  ngOnInit() {
    this.showAvailableRooms();
  }

  showAvailableRooms() {
    this.callService.getAvailableRooms()
    .subscribe(response=> {
      this.availableRooms=response;
      this.homeService.setHomeRooms(this.availableRooms)
    console.log('rooms',this.availableRooms)
    })
  } 
  
  addRoom(room){
    this.availableRooms.push(room);
   //this.homeService.addHomeRooms(room).subscribe( homeRooms => this.homeRooms=homeRooms );
   //console.log('add',this.homeRooms)
  }
  removeRoom(index){
    this.availableRooms.splice(index,1)
    this.closeModal('custom-modal-1')
    //this.homeService.setHomeRooms(this.availableRooms)
    console.log('removeA', this.availableRooms)
   // this.homeService.removeHomeRooms(this.availableRooms).subscribe( homeRooms => this.homeRooms=homeRooms );
   // console.log('remove', this.homeRooms)
  }

  openModal(id: string) {
    this.modalService.open(id);
}

closeModal(id: string) {
    this.modalService.close(id);
}
  

}
