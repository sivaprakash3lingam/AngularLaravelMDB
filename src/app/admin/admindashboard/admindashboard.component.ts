import { Component, OnInit, Input, Output } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { AdmintopheaderComponent } from '../admintopheader/admintopheader.component';
@Component({
	selector: 'app-admindashboard',
	templateUrl: './admindashboard.component.html',
	styleUrls: ['./admindashboard.component.scss']
})

export class AdmindashboardComponent implements OnInit {

	constructor() {
	}

	ngOnInit(): void {
	}

	sidenavtoggler(arg: any) {
		alert("Called");
	}

}
