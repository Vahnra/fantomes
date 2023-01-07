import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Fantomes } from '../fantome/fantomes';
import { FantomesService } from '../fantome/fantomes.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  currentFantome: Fantomes|undefined;
  fantome$: Observable<Fantomes> = new Observable();
  role: String|undefined;
  form: any = {
    username: null,
    role: null,
  };
  myArray: any = '';

  constructor(private storageService: StorageService, private fantomesService: FantomesService) {

  }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    this.fantomesService.getFantome(this.currentUser.id).subscribe(fantome => {this.currentFantome = fantome; this.myArray = fantome;
    });
    this.form.role = this.currentUser.role;   
    
  }

  update(): void {
    this.role = '';

    this.fantomesService.update(this.currentUser.id, this.form)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.role = res.message ? res.message : 'This tutorial was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
}

