import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Cache } from './cache.service';

@Injectable()
export class StarWars {
	private collection:string[];

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
					if (this.cache.isCached(person.id)) {
						return this.cache.getCache(person.id);
					}
					return person;
				});

				// put in cache, if its not already there...
				data.results.forEach((person:any) => {
					if (!this.cache.isCached(person.id)) {
						this.cache.setCache(person.id, person);
					}
				});

				return data;
			});
	}

	getPerson(id:string) {
		if(this.cache.isCached(id)) {
			return Observable.of(this.cache.getCache(id));
		}
		return this.http.get('http://swapi.co/api/people/'+id+'/')
			//todo: ids (IMPORTANT) and caching should be added here
			.map(response => response.json())
			.map((person:any) => StarWars.addId(person));
	}

	toggleCollection(id:string) {
		let index = this.collection.indexOf(id);
		if(index > -1) {
			this.collection.splice(index,1);
		} else {
			this.collection.push(id);
		}
		this.cache.setCache('collection', this.collection);
	}

	getCollection() {
		if (!this.collection) {
			this.initCollection();
		}
		return Observable.from(this.collection)
			.concatMap(id => this.getPerson(id))
			.reduce((acc,person) => {
				acc.push(person);
				return acc;
			},[]);
	}

	editPerson(person:any) {
		this.cache.setCache(person.id, person);
	}

	private initCollection() {
		if (this.cache.isCollectionCached()) {
			this.collection = this.cache.getCollection();
		} else {
			this.collection = [];
		}
	}

	constructor(private http:Http, private cache:Cache) {}
}