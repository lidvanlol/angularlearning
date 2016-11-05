/**
 * Created by filip on 11/5/2016.
 */
import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule}from '@angular/router';

import {HomeComponent} from './Components/pages/home.component';
import {AboutComponent} from './Components/pages/about.component';

const appRoutes:Routes=[
    {
        path:'',
        component:HomeComponent
    },
    {
    path:'about',
    component:AboutComponent

    }
];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);