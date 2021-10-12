import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AdmintopheaderComponent } from './admin/admintopheader/admintopheader.component';
import { AdminsidebarComponent } from './admin/adminsidebar/adminsidebar.component';

const routes: Routes = [
	{ 'path': '', component: LoginComponent },
	{ 'path': 'admin', component: LoginComponent },
	{ 'path': 'admin/login', component: LoginComponent },
	{ 'path': 'admin/dashboard', component: AdmindashboardComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
