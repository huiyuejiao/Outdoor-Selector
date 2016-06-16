import { Component, OnInit, EventEmitter,ElementRef,Input, Output} from '@angular/core';
import { RouteParams,Router } from '@angular/router-deprecated';
import { Http,HTTP_PROVIDERS, Response } from '@angular/http';
import {ANGULAR2_GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';
import {LocationService} from './location.service';
import {ProjectNameComponent} from'./projectname.component';
import {Observable} from 'rxjs/Rx';
import {ProjectNameService} from './projectname.service';
declare var jQuery:any;
@Component({
  selector: 'my-location',
  templateUrl: 'app/location.component.html',
  styleUrls: ['app/location.component.css','app/app.css'],
  directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES,ProjectNameComponent],
  //providers:[LocationService],
  inputs:['location','latitude','longitude'],
})
export class LocationComponent  {
  name:string;
  showMap:boolean;
  location:string;
  ChosenAddress:string;
  LocationAddress:string;
  url:string;
  locationUrl:string;
  message:string="Your location is:";
  latitude:number;
  longitude:number;
  constructor(
      private router: Router,
      private routeParams: RouteParams,
      private http:Http,
      private locationService:LocationService,
      private projectnameService:ProjectNameService,
      private elRef:ElementRef
      ) { 
        console.log("this is location constructor")
      }      
  ngOnInit() {
    this.message=this.projectnameService.getProjectName();
    this.name = this.routeParams.get('name');
  }
  lat: number = 48.43434715694229;
  lng: number = -123.3803765103221;
  mapClicked(e:any){
    this.lat=e.coords.lat;
    this.lng=e.coords.lng;
    this.locationService.setLatitude(this.lat);
    this.locationService.setLongitude(this.lng);
    this.url="http://maps.googleapis.com/maps/api/geocode/json?latlng="+this.lat+","+ this.lng+"&sensor=true";
    this.http.get(this.url).subscribe(   
      Response =>{
         this.ChosenAddress=Response.json().results[0].formatted_address;
         this.LocationAddress=Response.json().results[0].formatted_address;
         this.locationService.setLocation(this.ChosenAddress);});
    
  }
  showMaps(){
    this.showMap=!this.showMap;  
  }
  goProjectname(){
    this.router.navigate(['ProjectName']);
  }
  goProject(){
     this.ChosenAddress=this.locationService.getLocation();
     this.LocationAddress=this.locationService.getLocation();
     this.location=this.locationService.getLocation();
     this.latitude=this.locationService.getLatitude();
     this.longitude=this.locationService.getLongitude();
     setTimeout(function(){
     this.router.navigate(['Project']);
   }.bind(this),0);
  }
  goLocation(){
    this.router.navigate(['Location']);
  }
  showLatLog(location:string){
    var geolocation:any;
    this.locationUrl="https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA";
    this.locationUrl="https://maps.googleapis.com/maps/api/geocode/json?address="+location;
    this.http.get(this.locationUrl).subscribe(
      Response=>{
        geolocation=Response.json().results[0].geometry.location;
        console.log(geolocation);
        this.lat=geolocation.lat;
        this.lng=geolocation.lng;
        this.locationService.setLocation(location);
        this.locationService.setLatitude(geolocation.lat);
        this.locationService.setLongitude(geolocation.lng);
      });   
  }
  fadeout(ele:any){
       var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            ele.style.display = 'none';
        }
        ele.style.opacity = op;
        ele.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.2;
    }, 50);
     
  }
fadein(element:any) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
        alert("here");
    }, 10);
}

  
}