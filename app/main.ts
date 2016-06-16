import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {ANGULAR2_GOOGLE_MAPS_PROVIDERS} from 'angular2-google-maps/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
bootstrap(AppComponent, [ROUTER_PROVIDERS,ANGULAR2_GOOGLE_MAPS_PROVIDERS,HTTP_PROVIDERS ]);
