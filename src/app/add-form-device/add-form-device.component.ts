import { Component, OnInit } from '@angular/core';
import {CallService  } from '../call.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-form-device',
  templateUrl: './add-form-device.component.html',
  styleUrls: ['./add-form-device.component.css'],
  providers:[CallService]
})
export class AddFormDeviceComponent implements OnInit {
  devicesType: any=[]; 
  availableRooms: any=[]; 
  myform: FormGroup;
  room: FormControl;
  type: FormControl;
  name: FormControl;
  information: FormControl;
  ipAddress: FormControl;
  constructor(private callService: CallService) { }

  ngOnInit() {
    this.showDeviceType();
    this.showAvailableRooms();

    this.createFormControls();
    this.createForm();
  }

  createFormControls(){
    this.room = new FormControl("", Validators.required);
    this.name = new FormControl("", Validators.required); 
    this.type = new FormControl("", Validators.required); 
    this.information = new FormControl("", Validators.required);
     this.ipAddress = new FormControl("", Validators.required);
  }
  createForm(){
    this.myform = new FormGroup({
    room: this.room,
     type: this.type,
     name: this.name,
     information: this.information ,
     ipAddress: this.ipAddress
   });
  }
  

  showAvailableRooms() {
    this.callService.getAvailableRooms()
    .subscribe(response=> {
      this.availableRooms=response;
    })
  }

  showDeviceType() {
    this.callService.getDevicesType()
    .subscribe(response=> {
      this.devicesType=response;
    })
  }

  onClickSubmit(formData) {
    if (this.myform.valid) {
      console.log("Form Submitted!");
      console.log(this.myform.value);
    }
    else {
      alert ('Fill out all fields in form!!!')
    }
      //call service
     //let params =  {
    
     // "name":,
     // "information":,
     // "ip_address":,
     // "roomId":,
     // "deviceType":{
      //  "typeid":
     // }
  }
  

}
