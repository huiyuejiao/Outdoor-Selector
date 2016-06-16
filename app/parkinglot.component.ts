import { Component, OnInit } from '@angular/core';
@Component({
    selector:'my-parkinglot',
    templateUrl:'app/parkinglot.component.html',
    styleUrls: ['app/app.css'],
    
})
export class ParkinglotComponent{
 LaneWidth:number;
 LaneLength:number;
 parkinglot:string="parkinglot";
}
