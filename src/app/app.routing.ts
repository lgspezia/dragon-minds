import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScaffoldingComponent } from './core/scaffolding/scaffolding.component';
import { LoginComponent } from './core/login/login.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { ListDragonsComponent } from './dragons/list-dragons/list-dragons.component';
import { ViewDragonComponent } from './dragons/view-dragon/view-dragon.component';
import { ManipulateDragonComponent } from './dragons/manipulate-dragon/manipulate-dragon.component';

import { AuthGuard } from './core/auth';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/login' },
    { path: '', component: ScaffoldingComponent, canActivate: [AuthGuard], children: [
        { path: 'dragons', component: ListDragonsComponent },
        { path: 'dragons/new', component: ManipulateDragonComponent },
        { path: 'dragons/edit/:id', component: ManipulateDragonComponent },
        { path: 'dragons/:id', component: ViewDragonComponent }
    ]},
    { path: 'login', component: LoginComponent },
    { path: 'page-not-found', component: PageNotFoundComponent },
    { path: '**', pathMatch: 'full', redirectTo: '/page-not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
