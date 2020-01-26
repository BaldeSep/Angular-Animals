import { Component, OnInit } from '@angular/core';
import { Animal } from '../classes/animal.class';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-animaldetail',
  templateUrl: './animaldetail.component.html',
  styleUrls: ['./animaldetail.component.css']
})
export class AnimaldetailComponent implements OnInit {
  private animal:Animal;
  constructor(private route: ActivatedRoute, private animalService:AnimalService) { 
    this.animal = new Animal();
  }

  updateAnimal(){
    this.animalService.updateAnimal(this.animal).subscribe( data => {
      this.animal = data;
    } );
  }

  ngOnInit() {
    this.route.paramMap.subscribe( params => {
      let id = +params.get("id");
      this.animalService.getAnimalById(id).subscribe( data => {
        this.animal = data;
      })
    } )
  }

}
