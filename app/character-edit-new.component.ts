import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector:'character-edit-new',
	template:`
		<h3>Edit using reactive forms (formControls)</h3>
		<form [formGroup]="characterForm">
		<table>
			<tr><td>Name:</td>	<td><input formControlName="name" /></td></tr>
			<tr><td>Gender:</td>	<td><input formControlName="gender" /></td></tr>
			<tr><td>Birthyear:</td>	<td><input formControlName="birthYear"></td></tr>
			<tr><td>Height:</td>	<td><input formControlName="height"></td></tr>
			<tr><td>Mass:</td>		<td><input formControlName="mass"></td></tr>
			<tr><td>Eyecolor:</td>	<td><input formControlName="eyeColor"></td></tr>
			<tr><td>Haircolor:</td>	<td><input formControlName="hairColor"></td></tr>
			<tr><td>Skincolor:</td>	<td><input formControlName="skinColor"></td></tr>
		</table>
		<button (click)="save()" type="button">Save</button>
		</form>`
})
export class CharacterEditNewComponent {
	@Input() character:any;
	@Output() onSave = new EventEmitter<any>();

	characterForm = new FormGroup({
		name: new FormControl(),
		gender: new FormControl(),
		birthYear: new FormControl(),
		height: new FormControl(),
		mass: new FormControl(),
		eyeColor: new FormControl(),
		hairColor: new FormControl(),
		skinColor: new FormControl(),
	});

	ngOnChanges(changes:any) {
		if(changes.character.currentValue && Object.keys(changes.character.currentValue).length) {
			this.characterForm.controls['name'].setValue(this.character.name);
			this.characterForm.controls['gender'].setValue(this.character.gender);
			this.characterForm.controls['birthYear'].setValue(this.character.birth_year);
			this.characterForm.controls['height'].setValue(this.character.height);
			this.characterForm.controls['mass'].setValue(this.character.mass);
			this.characterForm.controls['eyeColor'].setValue(this.character.eye_color);
			this.characterForm.controls['hairColor'].setValue(this.character.hair_color);
			this.characterForm.controls['skinColor'].setValue(this.character.skin_color);
		}
	}

	save() {
		this.onSave.emit({
			name: this.characterForm.controls['name'].value,
			gender: this.characterForm.controls['gender'].value,
			birth_year: this.characterForm.controls['birthYear'].value,
			height: this.characterForm.controls['height'].value,
			mass: this.characterForm.controls['mass'].value,
			eye_color: this.characterForm.controls['eyeColor'].value,
			hair_color: this.characterForm.controls['hairColor'].value,
			skin_color: this.characterForm.controls['skinColor'].value,
			id: this.character.id
		});
	}

	constructor() {	}
}