import { NgModule, EventEmitter, Input, Output } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './admin/login/login.component';
import { TopheaderComponent } from './topheader/topheader.component';
import { FooterComponent } from './footer/footer.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AdmintopheaderComponent } from './admin/admintopheader/admintopheader.component';
import { AdminsidebarComponent } from './admin/adminsidebar/adminsidebar.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		TopheaderComponent,
		FooterComponent,
		AdmindashboardComponent,
		AdmintopheaderComponent,
		AdminsidebarComponent,
		//BsDatepickerModule
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		FormsModule,
		HttpClientModule,
		MdbAccordionModule,
		MdbCarouselModule,
		MdbCheckboxModule,
		MdbCollapseModule,
		MdbDropdownModule,
		MdbFormsModule,
		MdbModalModule,
		MdbPopoverModule,
		MdbRadioModule,
		MdbRangeModule,
		MdbRippleModule,
		MdbScrollspyModule,
		MdbTabsModule,
		MdbTooltipModule,
		MdbValidationModule,
		BrowserAnimationsModule,
  BsDatepickerModule.forRoot(),
		//BsDatepickerModule.forRoot()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
