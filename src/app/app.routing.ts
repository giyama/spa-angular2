import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from "./app.component";
import {Page1Component} from "./page1/page1.component";
import {Page2Component} from "./page2/page2.component";


const appRoutes: Routes = [
    { path: 'page1', component: Page1Component },
    { path: 'page2', component: Page2Component}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
