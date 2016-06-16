import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { LocationComponent } from './location.component';
import { HeroService } from './hero.service';
import {ProjectNameService} from './projectname.service';
import {ComponentOne} from './component-one';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
@Component({
  selector: 'my-projectname',
  templateUrl: 'app/projectname.component.html',
  styleUrls: ['app/projectname.component.css','app/app.css'],
  directives: [ROUTER_DIRECTIVES],
  inputs:['newproject1'],
})
//@RouteConfig([
//  {
  //  path:'/',
  //  name:'ProjectName',
   // component: ComponentOne,
  //  useAsDefault: true
 // },{
  //  path:'/item',
  //  name:'ProjectNameItem',
  //  component:LocationComponent,
 // }
//])
export class ProjectNameComponent implements OnInit {
 // @Input()
  newproject1:string;
  projects: String[] = [];
  message:string="";
  newproject:string="";
  showForm:boolean=true;
  constructor(
      private router: Router,
      private heroService: HeroService,
      private projectnameService:ProjectNameService
      ) { 
        console.log("this is project name component constructor")
      }
  ngOnInit() {
   this.message="this is project name";
   this.projects=this.heroService.getHeroes() ;
  }
   goProjectname(){
    this.router.navigate(['ProjectName']);
  }
  gotoLocation(newproject:string,el1:any,el2:any){
   // console.log(el1);
   // console.log(el2);
    this.projectnameService.setProjectName(newproject);
    this.newproject1=this.projectnameService.getProjectName();
        console.log(this.newproject1);

     
   // let link=['LocationDetail',{name:newproject}];
   let link=['Location'];
   setTimeout(function(){
     this.router.navigate(link);
   }.bind(this),0);
   
 }
}