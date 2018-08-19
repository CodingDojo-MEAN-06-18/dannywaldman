import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as Pets from '../../models/pets';
import { Pet } from '../../models/pets';

@Injectable({
  providedIn: 'root'
})
export class PetService  {
  private base = '/api/pets';

  constructor(private readonly http: HttpClient) { }

  getPetTypes(): Observable<Array<Pets.PetType>> {
     return this.http.get<Array<Pets.PetType>>('/api/pets/petTypes');
 }

 addPet(pet: Pets.Pet): Observable<Pets.Pet> {
   return this.http.post<Pets.Pet>(`${this.base}/new`, pet);
 }

 getPets(): Observable<Array<Pets.Pet>> {
   return this.http.get<Array<Pets.Pet>>(`${this.base}/list`);
 }

 getPet(id: string): Observable<Pets.Pet> {
   return this.http.get<Pets.Pet>(`${this.base}/${id}`);
 }

 adoptPet(id: string): Observable<Pets.Pet> {
  return this.http.delete<Pets.Pet>(`${this.base}/${id}`);
 }

 likePet(id: string): Observable<Pets.Pet> {
  return this.http.put<Pets.Pet>(`${this.base}/${id}/like`, id);
 }

 updatePet(pet: Pet): Observable<Pets.Pet> {
  return this.http.put<Pets.Pet>(`${this.base}/edit`, pet);
 }
}
