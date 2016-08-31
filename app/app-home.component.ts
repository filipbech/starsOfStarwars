import {Component} from '@angular/core';

@Component({
	selector:'app-home',
	template:`
		<h1>Welcome to The Stars of StarWars</h1>
		<p>This app uses the starwars API from swapi.co to show lists of characters from starwars. You can edit missing/inaccurate data and add characters to your favorites-collection. </p>
		<p>At this point nothing is persisted, so if you mess up you can just reload the page and start from scratch</p>
		<p>This application is a DEMO to show off parts of Angular2. Feel free to download the source and play around with it.</p>

	`,
})
export class AppHomeComponent {
	constructor() {}
}