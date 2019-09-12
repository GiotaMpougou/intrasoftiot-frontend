import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface userRooms {
  id : number;
  name : string;
}

export interface roomDevices {
    id : number;
    name : string;
    type: string;
    status: string;
    information: string;
    roomId: number;
  }

  export interface availableRooms {
    id : number;
    name : string;
  }

  export interface availableDevices {
    id : number;
    name: string;
    homeid: number;
    devices: object;
  }

  export interface devicesType {
    typeid : number;
    name : string;
  }

@Injectable()

export class CallService {
  devices :any =[];
  roomsUrl = 'assets/mocks/userRooms.json';
  devicesUrl ='assets/mocks/roomDevices.json';
  availableRoomsUrl='assets/mocks/availableRooms.json'
   availableDevicesUrl = 'assets/mocks/availableDevices.json'
   devicesTypeUrl = 'assets/mocks/devicesType.json'
  constructor(private http: HttpClient) { }
  
  getRooms() {
    return this.http.get<userRooms>(this.roomsUrl)
     
  }

  async getDevices(roomid: string) {
    let params = new HttpParams().set('id', roomid)
    await this.http.get("assets/mocks/roomDevices.json", { params }).toPromise().then(
      response => {
        console.log("GET Request is successful ", response);
        this.devices = response
      },
      error => {
        console.log("Error", error);
      }
    )
    return this.devices;
  }

  getDevicesType(){
    return this.http.get<devicesType>(this.devicesTypeUrl) 
  }
  
 getAvailableDevices(){

    return this.http.get<availableDevices>(this.availableDevicesUrl) 
  }

  getRoomTypes(){
    return this.http.get<availableRooms>(this.availableRoomsUrl) 
  }
  getAvailableRooms(){
    return this.http.get<availableRooms>(this.availableDevicesUrl) 
  }

 


}