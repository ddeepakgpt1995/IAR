import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { course } from '../interfaces/course.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
apiUrl="api/courses"
// _id:number[]=[]; // !--- non-null assertion operator.
  constructor(private http: HttpClient) { }
  getCourse() {
    return this.http.get<course[]>(this.apiUrl);
  }

}
