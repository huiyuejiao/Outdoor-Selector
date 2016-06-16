import { Component, OnInit, EventEmitter,ElementRef,Input, Output} from '@angular/core';
import {ProjectNameService} from './projectname.service';
import {ProjectComponent} from'./project.component';
import {LocationComponent} from './location.component';
import {LocationService} from './location.service';
import {ProjectDetailService} from './projectdetail.service';
@Component({
  selector: 'my-projectdetail',
  templateUrl: 'app/projectdetail.component.html',
  styleUrls: ['app/projectdetail.component.css','app/app.css'],
  directives: [ProjectComponent],
})
export class ProjectDetailComponent{
   projectname:string;
   latitude:number;
   longitude:number;
   location:string;
   projectdetail:string;
   parkinglotShow:boolean=false;
   roadwayShow:boolean=false;
   models=["EG320","EG340","EG145","TP1B2","TP2B2","TP2B4","TP3B4"];
   constructor(
      private locationService:LocationService,
      private projectnameService:ProjectNameService,
      private projectdetailservice:ProjectDetailService
      ) { 
          console.log("This is project detail component constructor")
      }
   ngOnInit() {
    this.projectname=this.projectnameService.getProjectName();
    this.location=this.locationService.getLocation();
    this.latitude=this.locationService.getLatitude();
    this.longitude=this.locationService.getLongitude();
    this.projectdetail=this.projectdetailservice.getProjectDetail();
        switch(this.projectdetail){
          case "Parking Lot":
          this.parkinglotShow=true;
          break;
          case "Road Way":
          this.roadwayShow=true;
          break;
      }
  }
  myprojectChange(ele:any){
      console.log(ele);
      this.projectdetail=ele.value;
      switch(this.projectdetail){
          case "Parking Lot":
          this.parkinglotShow=true;
          this.roadwayShow=false;
          break;
          case "Road Way":
          this.roadwayShow=true;
          this.parkinglotShow=false;
          break;
      }
  }
}