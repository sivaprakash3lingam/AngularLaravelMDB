import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminprofileService } from '../adminprofile.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	products: any = [];
	submitted: boolean = false;
	authstatus: boolean = false;

	constructor(private AdminLogin: AdminprofileService, private router: Router) {
	}

	ngOnInit(): void {
	}

	form_admin_login: any = new FormGroup({
		username: new FormControl('', [Validators.required, Validators.minLength(3)]),
		password: new FormControl('', Validators.required)
	});

	submit() {
		this.submitted = true;

		var formData: any = new FormData();
		formData.append("username", this.form_admin_login.get('username').value);
		formData.append("password", this.form_admin_login.controls.password.value);

		this.AdminLogin.sendGetRequest(formData).subscribe((data: any) => {
			if (data.access == true && data.status == true) {
				this.authstatus = true;
				localStorage.setItem('admin.token', data.token);
				this.router.navigate(['/admin/dashboard']);
			}
		});
	}
}
