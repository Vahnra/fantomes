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
  currentFantome: Fantomes | undefined;
  fantome$: Observable<Fantomes> = new Observable();
  role: String | undefined;
  form: any = {
    username: null,
    id: null,
  };
  friendArray: any = '';

  constructor(private storageService: StorageService, private fantomesService: FantomesService) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    this.fantomesService.getFantome(this.currentUser.id).subscribe(fantome => {
      this.currentFantome = fantome; 
      this.friendArray = fantome;
    });
    this.form.role = this.currentUser.role;
    this.form.username = this.currentUser.username;
  }

  // Update user
  update(): void {
    this.role = '';

    this.fantomesService.update(this.currentUser.id, this.form)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.role = res.message ? res.message : 'Update successfull!';
        },
        error: (e) => console.error(e)
      });
  }

  // Delete friend
  deleteFriend(friendId: string):void {
    this.form = {
      id: friendId
    };
    this.fantomesService.deleteFriend(this.currentUser.id, this.form)
      .subscribe({
        next: (res) => {
          console.log(res);
          window.location.reload()
        },
        error: (e) => console.error(e),
      });
    console.log(friendId);
    
  }
}

