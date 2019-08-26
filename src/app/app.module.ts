import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  Routes, RouterModule } from '@angular/router'


import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomDevicesComponent } from './room-devices/room-devices.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ManageRoomsComponent } from './manage-rooms/manage-rooms.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ManageDevicesComponent } from './manage-devices/manage-devices.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { AddFormDeviceComponent} from  './add-form-device/add-form-device.component';
import { FormsModule} from '@angular/forms'
import { ModalModule } from './_modal';
import { ReactiveFormsModule } from '@angular/forms';



const appRoutes: Routes = [
  { path: "room-devices", component: RoomDevicesComponent},
  { path:"rooms", component: RoomsComponent},
  { path:"admin", 
  component: AdminComponent, 
  children: [  
    { path:"manageRooms", component: ManageRoomsComponent},
    { path:"manageDevices", component: ManageDevicesComponent,},
    { path:"manageUsers", component: ManageUsersComponent},
    { path:"rooms",component: RoomsComponent },
    { path:"addDevice", component: AddFormDeviceComponent}
    ]},
  { path:'', redirectTo:"/rooms", pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomDevicesComponent,
    HomeComponent,
    AdminComponent,
    ManageRoomsComponent,
    ManageDevicesComponent,
    ManageUsersComponent,
    AddFormDeviceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ModalModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
