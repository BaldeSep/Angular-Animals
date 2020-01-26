import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimallistComponent } from './animallist/animallist.component';
import { AddanimalComponent } from './addanimal/addanimal.component';
import { AnimaldetailComponent } from './animaldetail/animaldetail.component';
import { AnimalSearchComponent } from './animal-search/animal-search.component';


const routes: Routes = [
  {path: "animals/search", component: AnimalSearchComponent,  },
  {path: "animals/:id", component: AnimaldetailComponent},
  {path: "animals", component: AnimallistComponent},
  {path: "addAnimal", component: AddanimalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
