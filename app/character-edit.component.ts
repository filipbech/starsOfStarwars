import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
	selector:'character-edit',
	template:`
		<h3>Edit using template-driven forms (ngModel)</h3>
		<table>
			<tr><td>Name:</td>	<td><input [(ngModel)]="name" /></td></tr>
			<tr><td>Gender:</td>	<td><input [(ngModel)]="gender" /></td></tr>
			<tr><td>Birthyear:</td>	<td><input [(ngModel)]="birthYear"></td></tr>
			<tr><td>Height:</td>	<td><input [(ngModel)]="height"></td></tr>
			<tr><td>Mass:</td>		<td><input [(ngModel)]="mass"></td></tr>
			<tr><td>Eyecolor:</td>	<td><input [(ngModel)]="eyeColor"></td></tr>
			<tr><td>Haircolor:</td>	<td><input [(ngModel)]="hairColor"></td></tr>
			<tr><td>Skincolor:</td>	<td><input [(ngModel)]="skinColor"></td></tr>
		</table>
		<button (click)="save()">Save</button>`
})
export class CharacterEditComponent {
	@Input() name:string;
	@Input() gender:string;
	@Input() birthYear:string;
	@Input() height:string;
	@Input() mass:string;
	@Input() eyeColor:string;
	@Input() hairColor:string;
	@Input() skinColor:string;
	@Input() id:string;

	@Output() onSave = new EventEmitter<any>();

	save() {
		this.onSave.emit({
			name: this.name,
			gender: this.gender,
			birth_year: this.birthYear,
			height: this.height,
			mass: this.mass,
			eye_color: this.eyeColor,
			hair_color: this.hairColor,
			skin_color: this.skinColor,
			id: this.id
		});
	}

	constructor() {	}
}