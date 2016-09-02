import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class StarWars {
	//todo: persist cache to device (localstorage, idb) - should be other service!
	private personCache = {};

	private collection:any[] = [];

	static addId(person:any) {
		person.id = person.url.match(/(\d+)\/$/)[1];
		return person;
	}

	getPeople(page=1, offset=0) {
		return this.http.get('http://swapi.co/api/people/?page='+page)
			.map(response => {
				let data:any = response.json();
				// use local version of person if there is one
				data.results = data.results.map((person:any) =>  {
					person = StarWars.addId(person);
					if (this.personCache[person.id]) {
						return this.personCache[person.id]
					}
					return person;
				});

				// put in cache, if its not already there...
				data.results.forEach((person:any) => {
					if (!this.personCache[person.id]) {
						this.personCache[person.id] = person;
					}
				});

				return data;
			});
	}

	getPerson(id:number) {
		if(this.personCache[id.toString()]) {
			return Observable.of(this.personCache[id]);
		}
		return this.http.get('http://swapi.co/api/people/'+id+'/')
			//todo: ids (IMPORTANT) and caching should be added here
			.map(response => response.json())
			.map((person:any) => StarWars.addId(person));
	}

	toggleCollection(id:number) {
		let index = this.collection.indexOf(id);
		if(index > -1) {
			this.collection.splice(index,1);
		} else {
			this.collection.push(id);
		}
	}

	getCollection() {
		return Observable.from(this.collection)
			.concatMap(id => this.getPerson(id))
			.reduce((acc,person) => {
				acc.push(person);
				return acc;
			},[]);
	}

	editPerson(person:any) {
		this.personCache[person.id] = person;
	}

	constructor(private http:Http) {}
}