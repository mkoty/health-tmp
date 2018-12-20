import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  signIn(Username: string, Password: string, Domain = 'NA') {
    return this.http.post(this.apiUrl + 'authenticate', {Username, Password, Domain});
  }
}
