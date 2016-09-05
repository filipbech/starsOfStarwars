import {Component} from '@angular/core';
import {StarWars} from './starwars.service'

@Component({
	selector:'character-collection',
	template:`<h1>Personal collection</h1>
		<p>You can add to your collection from the characters page.</p>
		<ul>
			<li *ngFor="let person of collection | async">
				<single-character [person]="person" (onToggleCollection)="onToggleCollection($event)"></single-character>
			</li>
		</ul>
	`
})
export class CharacterCollectionComponent {
	collection:any;
	constructor(private starwars:StarWars) {
		this.collection = this.starwars.getCollection();
	}

	onToggleCollection(id:string) {
		this.starwars.toggleCollection(id);
		this.collection = this.starwars.getCollection();
	}
}