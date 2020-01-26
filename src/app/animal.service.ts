import { Injectable } from '@angular/core';
import { Animal } from './classes/animal.class';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private url:string;
  constructor(private http:HttpClient) {
    this.url = 'http://localhost:9000/animal';
  }

  getAllAnimals():Observable<Animal[]>{
    return this.http.get<Animal[]>(this.url);
  }

  getAnimalById(id:number):Observable<Animal>{
    return this.http.get<Animal>(`${this.url}/${id}`);
  }

  getAnimalsByAge(age:number):Observable<Animal[]>{
    console.log(`${this.url}/age/${age}`);
    return this.http.get<Animal[]>(`${this.url}/age/${age}`);
  }

  addAnimal(animal:Animal):Observable<Animal>{
    return this.http.post<Animal>(this.url, animal);
  }

  updateAnimal(animal:Animal):Observable<Animal>{
    return this.http.put<Animal>(this.url, animal);
  }

  deleteAnimal(id:number):Observable<Animal>{
    return this.http.delete<Animal>(`${this.url}/${id}`);
  }

}
