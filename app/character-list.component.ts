import {Component} from '@angular/core';
import {StarWars} from './starwars.service';

@Component({
	selector:'character-list',
	template:`
		<h1>Starwars characters</h1>
		<ul>
			<li *ngFor="let person of characters"><single-character [person]="person" (onToggleCollection)="toggleCollection($event)"></single-character></li>
		</ul>
		<button (click)="getNext()">Get more</button>
	`
})
export class CharacterListComponent {
	characters:any[] = [];

	page = 1;

	toggleCollection(id:string) {
		this.starwars.toggleCollection(id);
	}

	getNext() {
		this.starwars.getPeople(this.page).subscribe((response:any) => {
			this.page++;
			this.characters.push.apply(this.characters,response.results);
		});
	}

	constructor(private starwars: StarWars) {
		this.getNext();
	}
}