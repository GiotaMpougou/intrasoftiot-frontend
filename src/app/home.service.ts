import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';


@Injectable()
export class HomeService {


  roomDevices:any=[];
  homeRooms:any=[];
  roomId: any ;
  constructor() { }

 //getDevicesByIdRoom(devices,roomId):Observable< object[]>{
  //this.roomDevices = []
  //for(let i= 0; i<devices.length; i++ ){
   //if(roomId == devices[i].roomId ){
    //      this.roomDevices.push(devices[i]);
     // }
   //}
   //return of(this.roomDevices);
  //}

  setHomeRooms(availableRooms){
    this.homeRooms.push(availableRooms)
  }
  getHomeRooms(){
    return this.homeRooms;
  }
  
  //addHomeRooms(room){

  // this.homeRooms.push(room);
  // return of(this.homeRooms);
 // }

 // removeHomeRooms(index){
   //  this.homeRooms.splice(index,1)
   // return of(this.homeRooms);
 // }

}