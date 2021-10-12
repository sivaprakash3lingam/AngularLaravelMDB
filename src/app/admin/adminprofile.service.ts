import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class AdminprofileService {

	//constructor() { }

	private API_URL = "http://local.eventhost.loc/public/api/";

	constructor(private httpClient: HttpClient) { }

	public sendGetRequest(formData: undefined) {
		return this.httpClient.post<any>(this.API_URL + "admin/login", formData);
	}

}

