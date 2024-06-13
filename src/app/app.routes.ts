import { Routes, Router, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { NgModule, Component} from '@angular/core';
import { CommonModule } from '@angular/common';


export const routes: Routes = [

    {
        path: '', component: HomeComponent
    },
    {
        path: 'content/:id', component: ContentComponent
    }


];

({ 
    imports: [CommonModule, Component, NgModule, Router, RouterModule.forRoot(routes)],
     exports: [RouterModule, CommonModule]
});