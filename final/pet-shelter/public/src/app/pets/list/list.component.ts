import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Pets from '../../models/pets';
import { Subscription } from 'rxjs';
import { PetService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  private pets: Array<Pets.Pet> = [];
  private subcription: Subscription;

  constructor(private readonly service: PetService, private readonly router: Router) { }

  ngOnInit() {
    this.subcription = this.service.getPets().subscribe(pets => {
        this.pets = pets.sort((a, b) => a.type['name'].localeCompare(b.type['name']));
        if (this.pets.length === 0) {
            this.router.navigate(['pets', 'new']);
        }
    });
}

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }

}
