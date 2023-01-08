import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Fantomes } from './fantomes';

@Injectable({
  providedIn: 'root'
})
export class FantomesService {

  private url = 'https://server-fantomes.onrender.com/user';
  // private url = 'http://localhost:8080/user';

  private fantomes$: Subject<Fantomes[]> = new Subject();

  constructor(private httpClient: HttpClient) { }

  // Get all fantomes
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

  // Get 1 fantome
  getFantome(id: string): Observable<Fantomes> {
    return this.httpClient.get<Fantomes>(`${this.url}/detail/${id}`);
  }

  // Update fantome user
  update(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.url}/${id}`, data);
  }

  // Add friend
  addFriend(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.url}/add/${id}`, data);
  }

  // Delete friend
  deleteFriend(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.url}/delete-friend/${id}`, data);
  }


}
