import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
	providedIn: 'root'
})
export class AdmineventlistService {

	private API_URL = "http://local.eventhost.loc/public/api/";

	constructor(private httpClient: HttpClient) { }

	public sendGetRequest(formData: any) {
		let header = new HttpHeaders();
		header.append('Content-Type', 'application/json');
		let token: string | null = window.localStorage.getItem('admin.token');
		//header.append('token', token);
		return this.httpClient.get<any>(this.API_URL + "admin/event/list", formData);
	}

}
