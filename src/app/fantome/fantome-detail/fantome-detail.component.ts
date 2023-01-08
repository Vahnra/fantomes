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
export class FantomeDetailComponent implements OnInit {
  currentUser: any;
  currentFantome: Fantomes | undefined;
  fantome: Fantomes | undefined;
  form: any = {
    username: null,
  };
  myArray: any = '';
  isFriend: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private storageService: StorageService, private fantomesService: FantomesService) {

  }

  ngOnInit() {
    const fantomeId: string | null = this.route.snapshot.paramMap.get('id');
    this.currentUser = this.storageService.getUser();
    if (fantomeId) {
      this.fantomesService.getFantome(fantomeId).subscribe(fantome => this.fantome = fantome);   
      if (this.currentUser) {
        this.fantomesService.getFantome(fantomeId).subscribe(fantome => this.fantome = fantome);
        this.fantomesService.getFantome(this.currentUser.id).subscribe(fantome => {
          this.currentFantome = fantome;
          this.myArray = fantome;
          for (const data of this.myArray.friends) {
            if (data.id == fantomeId) {
              this.isFriend = true;
              break;
            }
          };
        });
      }
    }
  }

  update(): void {

    if (this.fantome) {
      this.form = {
        username: this.fantome.username,
        role: this.fantome.role,
        id: this.fantome._id
      };
    }
    this.fantomesService.addFriend(this.currentUser.id, this.form)
      .subscribe({
        next: (res) => {
          console.log(res);
          window.location.reload()
        },
        error: (e) => console.error(e),
      });

  }
}
