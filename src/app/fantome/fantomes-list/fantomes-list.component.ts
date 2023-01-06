import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Fantomes } from '../fantomes';
import { FantomesService } from '../fantomes.service';

@Component({
  selector: 'app-fantomes-list',
  templateUrl: './fantomes-list.component.html',
  styleUrls: ['./fantomes-list.component.css']
})
export class FantomesListComponent implements OnInit{

  fantomes$: Observable<Fantomes[]> = new Observable();

  constructor(private fantomesService: FantomesService) { }

  ngOnInit(): void {
    this.fetchFantomes();
  }

  deleteFantome(id: string): void {
    this.fantomesService.deleteFantome(id).subscribe({
      next: () => this.fetchFantomes()
    });
  }
  
  private fetchFantomes(): void {
    this.fantomes$ = this.fantomesService.getFantomes();
  }
}
