import { Component, OnInit, OnDestroy } from '@angular/core';
import { PetService } from '../../services';
import { ActivatedRoute, Router } from '@angular/router';
import * as Pets from '../../models/pets';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {
  private pet: Pets.Pet = new Pets.Pet();
  private Unsubscribe: Subscription;
  private UnsubscribeTypes: Subscription;
  private UnsubscribeUpdate: Subscription;
  private errors: string[] = [];
  private petTypes: Array<Pets.PetType>;

  constructor(private readonly service: PetService, private readonly route: ActivatedRoute, private readonly router: Router) { }

  ngOnInit() {
    this.UnsubscribeTypes = this.service.getPetTypes()
    .subscribe(types => this.petTypes = types.sort((a, b) => a.name.localeCompare(b.name)) );
    this.route.params.subscribe(
      () => {
       this.Unsubscribe = this.service.getPet(this.route.snapshot.params.id).subscribe(pet => {
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
    if (this.Unsubscribe) {
      this.Unsubscribe.unsubscribe();
    }
    if (this.UnsubscribeTypes) {
      this.UnsubscribeTypes.unsubscribe();
    }
    if (this.UnsubscribeUpdate) {
      this.UnsubscribeUpdate.unsubscribe();
    }
  }

  onSubmit(event: Event): void {
    event.preventDefault();
   this.UnsubscribeUpdate = this.service.updatePet(this.pet).subscribe(pet => {
     this.pet = pet;
     this.router.navigate(['pets', this.pet._id]);
   },
  error => this.errors = error);
  }

}
