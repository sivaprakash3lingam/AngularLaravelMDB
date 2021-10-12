import { Component, OnInit, Output, EventEmitter, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-admintopheader',
	templateUrl: './admintopheader.component.html',
	styleUrls: ['./admintopheader.component.scss']
})
export class AdmintopheaderComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	@Output() ClickSideNav: EventEmitter<any> = new EventEmitter<any>();

}