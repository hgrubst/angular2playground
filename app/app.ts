
import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

@Component({
	selector:'app',
	templateUrl:'app/app.html'
})
export class AppComponent {
	
}

bootstrap(AppComponent).then(function(){
	console.log('application bootstraped')
});