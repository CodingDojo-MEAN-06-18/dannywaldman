import { Component, OnInit, OnDestroy } from '@angular/core';
import { PetService } from '../../services';
import * as Pets from '../../models/pets';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit, OnDestroy  {
   private petTypes: Array<Pets.PetType>;
   private subcription: Subscription;
   private pet: Pets.Pet = new Pets.Pet();
   private errors: string[] = [];

  constructor(private readonly service: PetService, private readonly router: Router) { }

  ngOnInit() {
    this.subcription = this.service.getPetTypes().subscribe(types => this.petTypes = types.sort((a, b) => a.name.localeCompare(b.name)) );
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.pet.skills = this.pet.skills.filter(item => item && item.length > 0);
    this.service.addPet(this.pet).subscribe(pet => this.router.navigate(['pets']), error => this.errors = error.error);
  }

}
