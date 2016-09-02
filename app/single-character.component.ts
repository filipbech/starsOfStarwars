import {Component, Input, Output, EventEmitter} from '@angular/core';
@Component({
	selector:'single-character',
	template:`
		<button (click)="toggleCollection(person.id)">Toggle fav</button>
		<a [routerLink]="['/character/'+person.id]">{{person.name}}</a>`,
})
export class SingleCharacterComponent {

	@Output() onToggleCollection = new EventEmitter();
	@Input() person:any;

	toggleCollection(id:number) {
		this.onToggleCollection.emit(id);
	}

	constructor() {}
}