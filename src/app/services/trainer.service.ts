import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  params : new HttpParams ({})
};
const apiUrl = 'http://apps.capbpm.com/UF/api/v1/person';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor(private http: HttpClient ) { }

  async getAll() {
    try {
      const trainers = await this.http.get(apiUrl, httpOptions).toPromise();
      console.log(trainers);
      return trainers;
    } catch (error) {
        console.log(error);
    }
  }
  async getByType(type: string ) {
    const url = apiUrl + '/findByType?type=' + type ;

    try {
      const users = await this.http.get(url, httpOptions).toPromise();
      console.log(users);
      return users;
    } catch (error) {
        console.log(error);
    }
  }

  async getByID(id: string) {
    const url = `${apiUrl}/${id}`;
    try {
      const trainer = await this.http.get(url, httpOptions).toPromise();
      return trainer;
    } catch (error) {
      console.log(error);
    }
  }
}
