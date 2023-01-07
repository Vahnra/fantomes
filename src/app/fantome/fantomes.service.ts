import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Fantomes } from './fantomes';

@Injectable({
  providedIn: 'root'
})
export class FantomesService {

  private url = 'http://localhost:8080/user';

  private fantomes$: Subject<Fantomes[]> = new Subject();

  constructor(private httpClient: HttpClient) { }

  private refreshFantomes() {
    this.httpClient.get<Fantomes[]>(`${this.url}/`)
      .subscribe(fantomes => {
        this.fantomes$.next(fantomes);
      });
  }

  getFantomes(): Subject<Fantomes[]> {
    this.refreshFantomes();
    return this.fantomes$;
  }

  getFantome(id: string): Observable<Fantomes> {
    return this.httpClient.get<Fantomes>(`${this.url}/detail/${id}`);
  }

  update(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.url}/${id}`, data);
  }

  addFriend(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.url}/add/${id}`, data);
  }
  

}
