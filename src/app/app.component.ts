import { Component } from '@angular/core';
import { StorageService } from './_services/storage.service';
import { AuthService } from './_services/auth.service';
import { FantomesService } from './fantome/fantomes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fantomes';

  private roles: string[] = [];
  isLoggedIn = false;
  username?: string;

  constructor(private storageService: StorageService, private authService: AuthService, private fantomesService: FantomesService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.username = user.username;
    }
  }

  logout(): void {
    this.storageService.clean();
    // this.authService.logout().subscribe({
    //   next: res => {
    //     console.log(res);
        

    //     window.location.reload();
    //   },
    //   error: err => {
    //     console.log(err);
    //   }
    // });
  }

}
