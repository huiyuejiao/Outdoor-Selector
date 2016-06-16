import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HeroService } from './hero.service';
import {ProjectNameComponent} from'./projectname.component';
import {LocationComponent} from './location.component';
import {LocationService} from './location.service';
import {ParkinglotComponent} from './parkinglot.component';
import {RoadwayComponent} from './roadway.component';
import {ProjectdefaultComponent} from './projectdefault.component';
import {ProjectDetailService} from './projectdetail.service';
@Component({
  selector: 'my-project',
  templateUrl: 'app/project.component.html',
  styleUrls: ['app/project.component.css','app/app.css'],
  directives: [ParkinglotComponent,ROUTER_DIRECTIVES,ProjectNameComponent,LocationComponent]
  //providers:[LocationService],
})
@RouteConfig([
    {
        path:'/',
        component: ProjectdefaultComponent,
        useAsDefault: true 
    },
    {
        path:'/parkinglot',
        name:'Parkinglot',
        component:ParkinglotComponent,
    },
   {
        path:'/roadway',
        name:'Roadway',
        component: RoadwayComponent,
    },
    
])
export class ProjectComponent implements OnInit {
  @Input()  choosenproject=" ";
  @Output() projectDetailChange = new EventEmitter();
  projects: String[] = [];
  message:string="";
  newproject:string="";
  location:string="";
  latitude:number;
  longitude:number;
  title:string="What application best describes your project?";
  projectdetail:string;
  projectItems = ["Parking Lot","Road Way","Pathway","Individual System"];
  model = { options: '' };
  constructor(
      private router: Router,
      private heroService: HeroService,
      private locationService:LocationService,
      private projectdetailservice:ProjectDetailService
      ) {
            this.location=this.locationService.getLocation();
            console.log("this is project component constructor")
       }
  ngOnInit() {
    this.message="this is project name";
    this.projects=this.heroService.getHeroes() ;
    this.location=this.locationService.getLocation();
    this.latitude=this.locationService.getLatitude();
    this.longitude=this.locationService.getLongitude();
    this.choosenproject=this.projectdetailservice.getProjectDetail();
   // console.log(this.location+"project init");
    }
  gotoLocation(newproject:string){
    let link=['LocationDetail',{name:newproject}];
    this.router.navigate(link);
    }
  goProjectname(){
    this.router.navigate(['ProjectName']);
  }
  goProject(){
    this.router.navigate(['Project']);
  }
  chooseProject(project:string){
      this.title="";
      switch(project){
          case "Parking Lot":
          this.router.navigate(['Parkinglot']);
          break;
          case "Road Way":
          this.router.navigate(['Roadway']);
          break;
      }
  }
chooseProjectDetail(project:string){
   this.model.options = project;
   this.projectdetail=project;
   this.choosenproject=project;
   this.projectdetailservice.setProjectDeatil(project); 
   this.projectDetailChange.emit({
       value:this.projectdetail
   });
   console.log(this.model.options);
   setTimeout(function(){
       this.router.navigate(['Detail']);
   }.bind(this),0);
    
  }
  
}