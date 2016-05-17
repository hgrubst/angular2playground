
import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';

@Component({
	selector:'app',
	templateUrl:'app/app.html'
})
export class AppComponent {
	
}

bootstrap(AppComponent).then(function(){
	console.log('application bootstraped')
});