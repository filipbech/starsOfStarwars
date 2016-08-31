import {Component, Input} from '@angular/core';
import {StarWars} from './starwars.service';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
	selector:'character-detail',
	template:`
		<h1 [textContent]="character.name"></h1>
		<table *ngIf="!routeParams.edit">
			<tr><td>Gender:</td>	<td [textContent]="character.gender"></td></tr>
			<tr><td>Birthyear:</td>	<td [textContent]="character.birth_year"></td></tr>
			<tr><td>Height:</td>	<td [textContent]="character.height"></td></tr>
			<tr><td>Mass:</td>		<td [textContent]="character.mass"></td></tr>
			<tr><td>Eyecolor:</td>	<td [textContent]="character.eye_color"></td></tr>
			<tr><td>Haircolor:</td>	<td [textContent]="character.hair_color"></td></tr>
			<tr><td>Skincolor:</td>	<td [textContent]="character.skin_color"></td></tr>
			<tr><td colspan="2"><a [routerLink]="['/character/'+character.id+'/edit']">Edit</a></td></tr>
		</table>
		<character-edit
			*ngIf="routeParams.edit"
			[name]="character.name"
			[gender]="character.gender"
			[birthYear]="character.birth_year"
			[height]="character.height"
			[mass]="character.mass"
			[eyeColor]="character.eye_color"
			[hairColor]="character.hair_color"
			[skinColor]="character.skin_color"
			[id]="character.id"
			(onSave)="save($event)"
		></character-edit>

		<character-edit-new
			*ngIf="routeParams.edit"
			[character]="character"
			(onSave)="save($event)"
		></character-edit-new>

	`
})
export class CharacterDetailComponent {
	character:any = {};
	routeParams:any = {};
	constructor(private starwars: StarWars, private route:ActivatedRoute, private router:Router) {
		this.route.params
			.map((routeParams) => {
				this.routeParams = routeParams;
				return this.routeParams['characterId'];
			})
			.switchMap(id => this.starwars.getPerson(id))
			.subscribe(person => {
				this.character = person;
	        });
	}

	save(character:any) {
		this.starwars.editPerson(character);
		this.router.navigateByUrl('/character/' + character.id);
	}
}




