import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from './app.routing';
import { AppComponent }  from './app.component';
import { StarWars } from './starwars.service';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppHomeComponent } from './app-home.component';
import { CharacterListComponent } from './character-list.component';
import { CharacterDetailComponent } from './character-detail.component';
import { CharacterCollectionComponent } from './character-collection.component';
import { CharacterEditComponent } from './character-edit.component';
import { CharacterEditNewComponent } from './character-edit-new.component';
import { SingleCharacterComponent } from './single-character.component';



// Uncomment this to go in Production mode
// enableProdMode();

@NgModule({
	imports: [
		BrowserModule,
		routing,
		HttpModule,
		FormsModule,
		ReactiveFormsModule
	],
	declarations: [
		AppComponent,
		AppHomeComponent,
		CharacterListComponent,
		CharacterDetailComponent,
		CharacterCollectionComponent,
		CharacterEditComponent,
		CharacterEditNewComponent,
		SingleCharacterComponent
	],
	bootstrap: [
		AppComponent
	],
	providers: [
		StarWars
	]
})
export class AppModule { }
