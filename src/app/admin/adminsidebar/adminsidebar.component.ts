import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-adminsidebar',
	templateUrl: './adminsidebar.component.html',
	styleUrls: ['./adminsidebar.component.scss']
})
export class AdminsidebarComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	// // sidebarcollapse: boolean = false;

	// // @Input() sidebartoggling: boolean = false;
	// sbcollapse($event: any) {
	// 	alert($event);

	// }


	sidenavTogge() {
		alert("Super");
	}

}
