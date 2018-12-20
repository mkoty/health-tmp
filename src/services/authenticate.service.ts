import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';
import {LocalStorageService} from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService implements HttpInterceptor {
  private  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient,
              private localStorageService: LocalStorageService) {
  }

  signIn(Username: string, Password: string, Domain = 'NA') {
    return this.http.post(this.apiUrl + 'authenticate', {Username, Password, Domain});
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.localStorageService.getToken()}`
      }
    });

    return next.handle(req);
  }
}
