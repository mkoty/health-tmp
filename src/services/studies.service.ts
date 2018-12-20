import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {StudyCard} from '../entities/StudyCard';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudiesService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getAllStudies(): Observable<StudyCard[]> {
    return this.http
      .get<StudyCard[]>(this.apiUrl + 'studies');
  }
}
