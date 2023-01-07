import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/_services/storage.service';
import { Fantomes } from '../fantomes';
import { FantomesService } from '../fantomes.service';

@Component({
  selector: 'app-fantome-detail',
  templateUrl: './fantome-detail.component.html',
  styleUrls: ['./fantome-detail.component.css']
})
export class FantomeDetailComponent implements OnInit{
  currentUser: any;
  fantome: Fantomes|undefined;
  form: any = {
    username: null,
  };

  constructor(private route: ActivatedRoute, private router: Router, private storageService: StorageService, private fantomesService: FantomesService) {
    
  }

  ngOnInit() {
    const fantomeId: string|null = this.route.snapshot.paramMap.get('id');   
    if (fantomeId) {
      this.fantomesService.getFantome(fantomeId).subscribe(fantome => this.fantome = fantome);
   
    }

    this.currentUser = this.storageService.getUser();
    
  }

  update(): void {
    if(this.fantome) {
      this.form = {
        username: this.fantome.username,
        role: this.fantome.role,
      };
    }
    this.fantomesService.addFriend(this.currentUser.id, this.form)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => console.error(e)
      });
  }
}
