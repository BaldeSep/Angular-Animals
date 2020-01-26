import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';
import { Animal } from '../classes/animal.class';

@Component({
  selector: 'app-animal-search',
  templateUrl: './animal-search.component.html',
  styleUrls: ['./animal-search.component.css']
})
export class AnimalSearchComponent implements OnInit {
  animals:Animal[];
  animal:Animal;
  constructor(private animalService:AnimalService) {
    this.animals = [];
    this.animal = new Animal();
  }

  getAnimalsByAge(){
    this.animalService.getAnimalsByAge(this.animal.age).subscribe( data => {
      this.animals = data;
    }); 
  }

  getAnimalById(){
    this.animalService.getAnimalById(this.animal.id).subscribe( data => {
      this.animals = [data];
    });
  }

  ngOnInit() {
  }

}
