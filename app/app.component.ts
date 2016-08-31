import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    	<nav>
	    	<ul>
	    		<li><a [routerLink]="['/']">Home</a></li>
	    		<li><a [routerLink]="['/characters']">Stars</a></li>
	    		<li><a [routerLink]="['/collection']">My favorites</a></li>
	    	</ul>
    	</nav>
    	<router-outlet></router-outlet>`,
})
export class AppComponent { }
