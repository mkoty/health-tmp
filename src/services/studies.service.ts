import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';
import {StudyCardResponse} from '../entities/StudyCardResponse';

@Injectable({
  providedIn: 'root'
})
export class StudiesService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getAllStudies(): Observable<StudyCardResponse> {
    return this.http
      .get<StudyCardResponse>(this.apiUrl + 'studies');
  }
}
