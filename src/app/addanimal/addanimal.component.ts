import { Component, OnInit } from '@angular/core';
import { Animal } from '../classes/animal.class';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-addanimal',
  templateUrl: './addanimal.component.html',
  styleUrls: ['./addanimal.component.css']
})
export class AddanimalComponent implements OnInit {

  private animal:Animal = new Animal();
  constructor(private animalService:AnimalService) {}

  addAnimal(){
    this.animalService.addAnimal(this.animal).subscribe();
  }

  ngOnInit() {
  }

}
