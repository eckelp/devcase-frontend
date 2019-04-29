import { DashboardComponent } from './dashboard/dashboard.component';
import { Component } from '@angular/core';

import { Routes } from '@angular/router';


export const dashRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  }
]
