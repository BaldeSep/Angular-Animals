import { Component, OnInit } from '@angular/core';
import { Animal } from '../classes/animal.class';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-animallist',
  templateUrl: './animallist.component.html',
  styleUrls: ['./animallist.component.css']
})
export class AnimallistComponent implements OnInit {
  animals:Animal[];
  constructor(private animalService: AnimalService) {}
  
  deleteAnimal(id:number){
    this.animalService.deleteAnimal(id).subscribe( data => {
      this.animals = this.animals.filter( animal => {
        return animal.id != id;
      })
    });
  }

  ngOnInit() {
      this.animalService.getAllAnimals().subscribe( data => {
        this.animals = data;
      });
  }

}
