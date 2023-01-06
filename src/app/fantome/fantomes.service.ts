import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Fantomes } from './fantomes';

@Injectable({
  providedIn: 'root'
})
export class FantomesService {

  private url = 'http://localhost:5200';

  private fantomes$: Subject<Fantomes[]> = new Subject();

  constructor(private httpClient: HttpClient) { }

  private refreshFantomes() {
    this.httpClient.get<Fantomes[]>(`${this.url}/fantomes`)
      .subscribe(fantomes => {
        this.fantomes$.next(fantomes);
      });
  }

  getFantomes(): Subject<Fantomes[]> {
    this.refreshFantomes();
    return this.fantomes$;
  }

  getFantome(id: string): Observable<Fantomes> {
    return this.httpClient.get<Fantomes>(`${this.url}/fantomes/${id}`);
  }

  createFantome(fantome: Fantomes): Observable<string> {
    return this.httpClient.post(`${this.url}/fantomes`, fantome, { responseType: 'text' });
  }
  
  updateFantome(id: string, fantome: Fantomes): Observable<string> {
    return this.httpClient.put(`${this.url}/fantomes/${id}`, fantome, { responseType: 'text' });
  }
  
  deleteFantome(id: string): Observable<string> {
    return this.httpClient.delete(`${this.url}/fantomes/${id}`, { responseType: 'text' });
  }

}
