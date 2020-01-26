import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimallistComponent } from './animallist/animallist.component';
import { AddanimalComponent } from './addanimal/addanimal.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimalService } from "./animal.service";
import { FormsModule } from "@angular/forms";
import { AnimaldetailComponent } from './animaldetail/animaldetail.component';
import { AnimalSearchComponent } from './animal-search/animal-search.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimallistComponent,
    AddanimalComponent,
    AnimaldetailComponent,
    AnimalSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AnimalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
