import { Component, OnInit, OnDestroy } from '@angular/core';
import { PetService } from '../../services';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../../models/pets';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit, OnDestroy {
  private pet: Pet;
  private UnsubscribeGet: Subscription;
  private UnsubscribeAdopt: Subscription;
  private UnsubscribeLike: Subscription;
  private isLiked = false;

  constructor(private readonly service: PetService, private readonly route: ActivatedRoute, private readonly router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      () => {
       this.UnsubscribeGet = this.service.getPet(this.route.snapshot.params.id).subscribe(pet => {
        if (!pet) {
          this.router.navigate(['pets', 'list']);
        } else {
        this.pet = pet;
        }
        });
      },
      error => {
        console.log(error);
        this.router.navigate(['pets', 'list']);
      }
    );
  }

  ngOnDestroy() {
    this.UnsubscribeGet.unsubscribe();
    if (this.UnsubscribeAdopt) {
      this.UnsubscribeAdopt.unsubscribe();
    }
    if (this.UnsubscribeLike) {
      this.UnsubscribeLike.unsubscribe();
    }
  }

  adopt(): void {
    this.UnsubscribeAdopt = this.service.adoptPet(this.pet._id).subscribe(pet => {
      this.router.navigate(['pets', 'list']);
    },
  error => console.log(error));
  }

  like(): void {
    this.UnsubscribeLike = this.service.likePet(this.pet._id).subscribe(pet => {
      this.pet = pet;
      this.isLiked = true;
    },
  error => console.log(error));
  }

}
