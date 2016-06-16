import { Component, OnInit } from '@angular/core';
@Component({
    selector:'my-roadway',
    templateUrl:'app/roadway.component.html',
    styleUrls: ['app/app.css'],
})
export class RoadwayComponent{
 roadLength:number;
 roadWidth:number;
 roadway:string="roadway";
}