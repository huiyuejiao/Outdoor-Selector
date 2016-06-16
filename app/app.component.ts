
import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { ProjectNameComponent } from './projectname.component';
import { LocationComponent } from './location.component';
import { ProjectComponent } from './project.component';
import {ProjectDetailComponent} from './projectdetail.component';
import { HeroService } from './hero.service';
import {LocationService} from './location.service';
import {ProjectNameService} from './projectname.service';
import {ProjectDetailService} from './projectdetail.service';
import {ANGULAR2_GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';
@Component({
  selector: 'my-app',
  template: `
      <h3>{{title}}</h3>
      <nav>
        <a [routerLink]="['./ProjectName']">ProjectName</a>
        <a [routerLink]="['./Location']">Location</a>
        <a [routerLink]="['./Project']">Project</a>
        <a [routerLink]="['./Detail']">Detail</a>
      </nav>
      <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES,ANGULAR2_GOOGLE_MAPS_DIRECTIVES],
  providers: [HeroService,LocationService,ProjectNameService,ProjectDetailService],
})
@RouteConfig([

  {
    path: '/projectname/',
    name: 'ProjectName',
    component: ProjectNameComponent,
    useAsDefault: true
  },
  {
    path: '/location',
    name: 'Location',
    component: LocationComponent,
  
  },
   {
   // path: '/detail/:id',
    path: '/location/:name',
    name: 'LocationDetail',
    component: LocationComponent,
  },
  {
    path: '/project/...',
    name: 'Project',
    component: ProjectComponent,
    
  },
  {
    path:'detail/',
    name:'Detail',
    component:ProjectDetailComponent,
  }
])
export class AppComponent {
    title = 'Lighting Selector';
}
